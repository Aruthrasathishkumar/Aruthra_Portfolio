"use client";

import { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useTheme } from "next-themes";
import * as THREE from "three";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { useMouseParallax } from "@/hooks/useMouseParallax";

// Configuration for easy tuning
const CONFIG = {
  nodeCount: 45,
  connectionDistance: 2.8,
  nodeSize: 0.04,
  lineOpacity: 0.15,
  pulseSpeed: 0.003,
  orbitSpeed: 0.0002,
  driftSpeed: 0.001,
  parallaxIntensity: 0.015,
};

// Generate initial node positions in a 3D space
function generateNodes(count) {
  const nodes = [];
  for (let i = 0; i < count; i++) {
    nodes.push({
      position: new THREE.Vector3(
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 4
      ),
      basePosition: new THREE.Vector3(
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 4
      ),
      pulsePhase: Math.random() * Math.PI * 2,
      driftOffset: Math.random() * Math.PI * 2,
      isActive: Math.random() > 0.7, // 30% chance to be an "active" node
    });
  }
  return nodes;
}

// Generate connections between nearby nodes
function generateConnections(nodes, maxDistance) {
  const connections = [];
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const distance = nodes[i].basePosition.distanceTo(nodes[j].basePosition);
      if (distance < maxDistance) {
        connections.push({
          from: i,
          to: j,
          distance,
        });
      }
    }
  }
  return connections;
}

// Network Graph Component (3D scene contents)
function NetworkGraph({ isDark, reducedMotion, mousePosition }) {
  const groupRef = useRef();
  const nodesRef = useRef();
  const linesRef = useRef();
  const time = useRef(0);

  // Generate nodes and connections once
  const { nodes, connections } = useMemo(() => {
    const nodeData = generateNodes(CONFIG.nodeCount);
    const connectionData = generateConnections(nodeData, CONFIG.connectionDistance);
    return { nodes: nodeData, connections: connectionData };
  }, []);

  // Theme-based colors
  const colors = useMemo(() => {
    if (isDark) {
      return {
        nodeBase: new THREE.Color("#6366f1"),
        nodeActive: new THREE.Color("#a855f7"),
        lineStart: new THREE.Color("#1e3a5f"),
        lineEnd: new THREE.Color("#38bdf8"),
      };
    }
    return {
      nodeBase: new THREE.Color("#818cf8"),
      nodeActive: new THREE.Color("#c084fc"),
      lineStart: new THREE.Color("#c7d2fe"),
      lineEnd: new THREE.Color("#a5b4fc"),
    };
  }, [isDark]);

  // Create geometry for nodes (instanced for performance)
  const nodeGeometry = useMemo(() => new THREE.SphereGeometry(CONFIG.nodeSize, 8, 8), []);
  const nodeMaterial = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        color: colors.nodeBase,
        transparent: true,
        opacity: isDark ? 0.6 : 0.5,
      }),
    [colors.nodeBase, isDark]
  );

  // Create line geometry
  const lineGeometry = useMemo(() => {
    const positions = [];
    const colorArray = [];

    connections.forEach((conn) => {
      const from = nodes[conn.from].basePosition;
      const to = nodes[conn.to].basePosition;

      positions.push(from.x, from.y, from.z);
      positions.push(to.x, to.y, to.z);

      // Gradient along the line
      const opacity = 1 - conn.distance / CONFIG.connectionDistance;
      colorArray.push(
        colors.lineStart.r,
        colors.lineStart.g,
        colors.lineStart.b,
        colors.lineEnd.r,
        colors.lineEnd.g,
        colors.lineEnd.b
      );
    });

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
    return geometry;
  }, [nodes, connections, colors]);

  const lineMaterial = useMemo(
    () =>
      new THREE.LineBasicMaterial({
        color: isDark ? "#4a6fa5" : "#a5b4fc",
        transparent: true,
        opacity: isDark ? CONFIG.lineOpacity : CONFIG.lineOpacity * 0.7,
        linewidth: 1,
      }),
    [isDark]
  );

  // Animation loop
  useFrame((state, delta) => {
    if (reducedMotion) return;

    time.current += delta;

    // Subtle rotation of entire group
    if (groupRef.current) {
      groupRef.current.rotation.y += CONFIG.orbitSpeed;
      groupRef.current.rotation.x = Math.sin(time.current * 0.1) * 0.02;

      // Apply mouse parallax (inverted for depth effect)
      groupRef.current.position.x = -mousePosition.x * 2;
      groupRef.current.position.y = -mousePosition.y * 2;
    }

    // Update line positions based on node drift
    if (linesRef.current) {
      const positions = linesRef.current.geometry.attributes.position.array;
      let idx = 0;

      connections.forEach((conn) => {
        const fromNode = nodes[conn.from];
        const toNode = nodes[conn.to];

        // Calculate drifted positions
        const fromDrift = Math.sin(time.current * CONFIG.driftSpeed + fromNode.driftOffset) * 0.1;
        const toDrift = Math.sin(time.current * CONFIG.driftSpeed + toNode.driftOffset) * 0.1;

        positions[idx++] = fromNode.basePosition.x + fromDrift;
        positions[idx++] = fromNode.basePosition.y + Math.cos(time.current * CONFIG.driftSpeed + fromNode.driftOffset) * 0.05;
        positions[idx++] = fromNode.basePosition.z;

        positions[idx++] = toNode.basePosition.x + toDrift;
        positions[idx++] = toNode.basePosition.y + Math.cos(time.current * CONFIG.driftSpeed + toNode.driftOffset) * 0.05;
        positions[idx++] = toNode.basePosition.z;
      });

      linesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Connection lines */}
      <lineSegments ref={linesRef} geometry={lineGeometry} material={lineMaterial} />

      {/* Nodes */}
      {nodes.map((node, i) => (
        <NodePoint
          key={i}
          node={node}
          geometry={nodeGeometry}
          baseColor={colors.nodeBase}
          activeColor={colors.nodeActive}
          isDark={isDark}
          reducedMotion={reducedMotion}
        />
      ))}
    </group>
  );
}

// Individual node with pulse animation
function NodePoint({ node, geometry, baseColor, activeColor, isDark, reducedMotion }) {
  const meshRef = useRef();
  const time = useRef(0);

  useFrame((state, delta) => {
    if (!meshRef.current || reducedMotion) return;

    time.current += delta;

    // Gentle drift animation
    const drift = Math.sin(time.current * CONFIG.driftSpeed + node.driftOffset) * 0.1;
    meshRef.current.position.x = node.basePosition.x + drift;
    meshRef.current.position.y =
      node.basePosition.y + Math.cos(time.current * CONFIG.driftSpeed + node.driftOffset) * 0.05;
    meshRef.current.position.z = node.basePosition.z;

    // Pulse effect for active nodes
    if (node.isActive) {
      const pulse = Math.sin(time.current * CONFIG.pulseSpeed * 100 + node.pulsePhase) * 0.5 + 0.5;
      meshRef.current.scale.setScalar(1 + pulse * 0.5);
      meshRef.current.material.opacity = (isDark ? 0.4 : 0.3) + pulse * 0.3;
      meshRef.current.material.color.lerpColors(baseColor, activeColor, pulse);
    }
  });

  return (
    <mesh
      ref={meshRef}
      geometry={geometry}
      position={[node.basePosition.x, node.basePosition.y, node.basePosition.z]}
    >
      <meshBasicMaterial
        color={node.isActive ? activeColor : baseColor}
        transparent
        opacity={isDark ? 0.5 : 0.4}
      />
    </mesh>
  );
}

// Gradient Overlays Component
function GradientOverlays({ isDark }) {
  return (
    <>
      {/* Top-left glow (teal/violet in dark, soft purple in light) */}
      <div
        className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: isDark
            ? "radial-gradient(circle, rgba(99,102,241,0.15) 0%, rgba(56,189,248,0.08) 40%, transparent 70%)"
            : "radial-gradient(circle, rgba(129,140,248,0.12) 0%, rgba(196,181,253,0.08) 40%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Center-right glow */}
      <div
        className="absolute top-1/3 -right-20 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: isDark
            ? "radial-gradient(circle, rgba(168,85,247,0.12) 0%, rgba(99,102,241,0.06) 50%, transparent 70%)"
            : "radial-gradient(circle, rgba(192,132,252,0.1) 0%, rgba(165,180,252,0.05) 50%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Bottom gradient */}
      <div
        className="absolute bottom-0 left-1/4 w-[800px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: isDark
            ? "radial-gradient(ellipse, rgba(56,189,248,0.08) 0%, rgba(99,102,241,0.04) 50%, transparent 70%)"
            : "radial-gradient(ellipse, rgba(165,180,252,0.08) 0%, rgba(196,181,253,0.04) 50%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />
    </>
  );
}

// Main AnimatedBackground Component
export default function AnimatedBackground() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();
  const mousePosition = useMouseParallax(CONFIG.parallaxIntensity);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Default to dark theme during SSR to avoid flash
  const isDark = mounted ? resolvedTheme === "dark" : true;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Base background color */}
      <div
        className="absolute inset-0 transition-colors duration-500"
        style={{
          background: isDark
            ? "linear-gradient(180deg, #020617 0%, #0c0c0f 50%, #030712 100%)"
            : "linear-gradient(180deg, #f5f7ff 0%, #F4F5FB 50%, #eef1f8 100%)",
        }}
      />

      {/* Gradient overlays */}
      <GradientOverlays isDark={isDark} />

      {/* 3D Canvas */}
      {mounted && (
        <Canvas
          camera={{ position: [0, 0, 6], fov: 60 }}
          dpr={[1, 1.5]} // Limit pixel ratio for performance
          gl={{ antialias: true, alpha: true }}
          style={{ position: "absolute", inset: 0 }}
        >
          <NetworkGraph
            isDark={isDark}
            reducedMotion={prefersReducedMotion}
            mousePosition={mousePosition}
          />
        </Canvas>
      )}

      {/* Subtle noise texture overlay for premium feel */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}

import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata = {
  title: "Aruthra Sathish Kumar | Software Engineer & AI/ML Engineer",
  description: "Building scalable backend systems and AI-powered applications. Software Engineer seeking 2026 new-grad roles at FAANG.",
  keywords: ["Software Engineer", "AI/ML Engineer", "Backend Developer", "RAG Systems", "Machine Learning", "Full Stack"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

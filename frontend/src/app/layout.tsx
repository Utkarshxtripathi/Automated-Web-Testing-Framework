import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Automated Web Testing Framework",
  description: "Next-gen Selenium Web Testing Framework",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased bg-background text-text-main`}>
        {/* We would wrap this with <ClerkProvider> here */}
        <div className="flex flex-col min-h-screen">
          <nav className="flex items-center justify-between px-8 py-4 border-b border-white/5 glass-card rounded-none">
            <div className="text-xl font-bold text-primary">TestFlow</div>
            <div className="flex space-x-4">
              <button className="secondary-glass-btn py-2 px-4">Sign In</button>
              <button className="primary-gradient-btn py-2 px-4">Get Started</button>
            </div>
          </nav>
          <main className="flex-grow">
            {children}
          </main>
          <footer className="py-8 text-center text-text-muted border-t border-white/5 mt-12">
            <p>&copy; 2026 TestFlow Automation. All rights reserved.</p>
          </footer>
        </div>
      </body>
    </html>
  );
}

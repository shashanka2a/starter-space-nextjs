import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Starter Space - Gainesville's Premier Coworking Space",
  description: "A thoughtfully designed workspace in the heart of Gainesville where entrepreneurs, freelancers, and remote workers thrive together.",
  keywords: ["coworking", "Gainesville", "workspace", "entrepreneurs", "freelancers", "remote work"],
  authors: [{ name: "Starter Space" }],
  openGraph: {
    title: "Starter Space - Gainesville's Premier Coworking Space",
    description: "A thoughtfully designed workspace in the heart of Gainesville where entrepreneurs, freelancers, and remote workers thrive together.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          defaultTheme="system"
          storageKey="starter-space-theme"
        >
          <div className="min-h-screen bg-background text-foreground">
            <Header />
            <main>
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

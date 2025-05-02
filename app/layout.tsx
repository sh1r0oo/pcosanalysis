import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/providers/theme-provider';
import Navbar from '@/components/layouts/Navbar';
import Footer from '@/components/layouts/Footer';
import FluidBackground from '@/components/FluidBackground';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PCOS Detection - ML & DL Comparative Analysis',
  description: 'Comparing Machine Learning and Deep Learning Models for PCOS Detection',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen antialiased selection:bg-blue-500/20`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <FluidBackground />
          <div className="relative z-10 flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
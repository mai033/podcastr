import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ConvexClientProvider from './providers/ConvexClerkProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Podcastr',
  description: 'Generate your podcast using AI',
  icons: {
    icon: '/icons/logo.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ConvexClientProvider>
         <html lang="en">
      <body className={inter.className}>
       {children}
      </body>
    </html>
    </ConvexClientProvider>
  );
}

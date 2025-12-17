import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import '@mantine/core/styles.css';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { theme } from '../theme';
import { GoogleAnalytics } from '@/components/GoogleAnalytics';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Multiplez - Global Sales System Landing Page',
  description: 'TikToK Verification to Amazon Expansion System for Korean Startups',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <ColorSchemeScript defaultColorScheme="dark" />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <MantineProvider theme={theme} defaultColorScheme="dark" forceColorScheme="dark">
          <GoogleAnalytics gaId="G-PLACEHOLDER" />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}

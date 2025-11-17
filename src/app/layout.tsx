import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Script from 'next/script';
import { BitFitMenu } from '@/widgets/NavigationPanel/navigation-menu';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'BitFit - Workout Tracker',
  description: 'Track your workouts and fitness progress with BitFit',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <Script
          src='https://telegram.org/js/telegram-web-app.js?59'
          strategy='beforeInteractive'
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased pb-20`}
        suppressHydrationWarning
      >
        {children}
        <BitFitMenu />
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import './globals.css';
//components
import Header from '@/components/header';
import PageTransition from '@/components/PageTransition';
import StairTransition from '@/components/StairTransition';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-jetbrainsMono',
});

export const metadata: Metadata = {
  title: 'Milad HamisheBahar',
  description: 'Milad Protofolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}

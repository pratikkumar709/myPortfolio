import './globals.css';
import { ColorSchemeScript } from '@mantine/core';
import { Providers } from './providers';
import Header from './components/Header';

export const metadata = {
  title: 'My Portfolio',
  description: 'Hire me before I implode.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript defaultColorScheme="auto" />
      </head>
      <body>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}

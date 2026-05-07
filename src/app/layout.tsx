import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Life OS', description: 'Personal operating system dashboard' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}

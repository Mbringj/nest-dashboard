import '@/app/ui/global.css';
import {inter} from '@/app/ui/font';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.className} antialiased`}>
      <body>{children}</body>
    </html>
  );
}

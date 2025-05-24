import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <header><h1>This is the header</h1></header>
      <body className={`${inter.className} antialiased`}>{children}</body>
      <footer><h1>This is the footer</h1></footer>
    </html>
  );
}
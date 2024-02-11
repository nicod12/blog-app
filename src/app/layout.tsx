import Nabvar from "@/components/Nabvar";
import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Nabvar />
       <section className="container mx-auto">
        {children}
       </section>
      </body>
    </html>
  );
}

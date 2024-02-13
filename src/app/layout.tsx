import Nabvar from "@/components/Nabvar";
import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Nabvar />
       <section>
                {children}
       </section>
      </body>
    </html>
  );
}

import "./globals.css";
import Navbar from "../components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Navbar />
        <h1 className="text-center text-red-800" >Hello world</h1>
        {children}
      </body>
    </html>
  );
}

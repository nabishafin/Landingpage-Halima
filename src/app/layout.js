import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConnectButton from "@/components/ConnectButton";

export const metadata = {
  title: "My Landing Page",
  description: "Smooth scrolling landing page with Locomotive JS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <Navbar />
        {children}
        <Footer />
        <ConnectButton />
      </body>
    </html>
  );
}

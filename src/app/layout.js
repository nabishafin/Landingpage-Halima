import "./globals.css";
import ClientWrapper from "@/components/ClientWrapper";
import { Roboto } from "next/font/google"; // make sure to import Roboto

export const metadata = {
  title: "My Landing Page",
  description: "Smooth scrolling landing page with Locomotive JS",
};

// Import Roboto font
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // optional weights
  style: ["normal", "italic"], // optional
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`bg-white text-gray-900 ${roboto.className}`} // apply Roboto here
        suppressHydrationWarning
      >
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}

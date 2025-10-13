import "./globals.css";
import ClientWrapper from "@/components/ClientWrapper";

export const metadata = {
  title: "My Landing Page",
  description: "Smooth scrolling landing page with Locomotive JS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="bg-white text-gray-900 font-sans" // system font stack
        suppressHydrationWarning
      >
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}

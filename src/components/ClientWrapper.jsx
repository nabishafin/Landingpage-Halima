"use client";

import ConnectButton from "@/components/ConnectButton";
import Navbar from "./Navbar";
import { Footer } from "./Footer";
import { usePathname } from "next/navigation";

export default function ClientWrapper({ children }) {
    const pathname = usePathname();

    // Hide Navbar and Footer on /meeting
    const hideNavFooter = pathname === "/meeting";

    return (
        <>
            {!hideNavFooter && <Navbar />}
            {children}
            {!hideNavFooter && <Footer />}
            <ConnectButton />
        </>
    );
}

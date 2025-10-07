"use client";


import ConnectButton from "@/components/ConnectButton";
import Navbar from "./Navbar";
import { Footer } from "./Footer";

export default function ClientWrapper({ children }) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
            <ConnectButton />
        </>
    );
}

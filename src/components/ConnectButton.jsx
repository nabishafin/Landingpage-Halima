"use client";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export default function ConnectButton() {
  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      <Button
        onClick={() => alert("Thanks for connecting!")}
        className="bg-black hover:bg-white text-white hover:text-black rounded-full px-5 py-3 flex items-center gap-2 shadow-lg transition-transform hover:scale-105"
      >
        <MessageCircle className="w-5 h-5" />
        Connect
      </Button>
    </div>
  );
}

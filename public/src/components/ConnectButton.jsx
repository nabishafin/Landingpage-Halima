"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function ConnectButton() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/meeting"); // navigate to /meeting
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      <Button
        onClick={handleClick}
        className="bg-black hover:bg-white text-white hover:text-black rounded-lg px-5 py-3 flex items-center gap-2 shadow-lg transition-transform hover:scale-105"
      >
        Connect
      </Button>
    </div>
  );
}

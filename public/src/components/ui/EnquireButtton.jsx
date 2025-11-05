import Link from "next/link";
import React from "react";

const EnquireButton = () => {
  return (
    <Link
      href="/meeting"
      className="bg-[#2e2e2e] text-white border p-2 w-full rounded-full mt-2
                 hover:bg-[#101010] hover:text-white
                 transition-colors duration-300 ease-in-out flex justify-center items-center"
    >
      Enquire
    </Link>
  );
};

export default EnquireButton;

import Link from "next/link";
import React from "react";

const EnquireButtonwhite = () => {
  return (
    <Link
      href="/meeting"
      className="bg-white text-black border py-[6px] w-40 rounded-full mt-5 border-gray-300 md:w-40 mx-auto font-semibold
                 hover:bg-gray-50 hover:text-black
                 transition-colors duration-300 ease-in-out flex justify-center items-center"
    >
      Enquire
    </Link>
  );
};

export default EnquireButtonwhite;

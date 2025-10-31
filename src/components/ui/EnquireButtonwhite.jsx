import Link from "next/link";
import React from "react";

const EnquireButtonwhite = () => {
  return (
    <Link
      href="/meeting"
      className="bg-black text-white border py-[6px] w-40 rounded-lg mt-5 border-white  md:w-40 mx-auto font-semibold
                
                 transition-colors duration-300 ease-in-out flex justify-center items-center"
    >
      Enquire
    </Link>
  );
};

export default EnquireButtonwhite;

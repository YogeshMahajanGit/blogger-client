import Image from "next/image";
import React from "react";
import img from "./yogesh.jpg";
export default function Profile() {
  return (
    <div className="profile block 0 ">
      <div className="bg-transparent border-none flex items-center">
        <div className="block relative">
          <Image
            className="w-[32px] h-[32px] bg-[#f2f2f2] rounded-[50%] align-middle hover:grayscale"
            src={img}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import React from "react";
import blogger from "@/public/blogger.webp";

export default function page() {
  return (
    <div className="bg-[#F7F4ED] h-screen overflow-hidden">
      <nav className="border-b border-gray-950">
        <div className="mx-16 flex py-4 items-center">
          <div className="text-4xl  font-playfair font-semibold">Blogger</div>
          <div className="flex-1"></div>
          <div className="sm:flex gap-6 items-center  justify-evenly hidden">
            <div>
              <Link href={"/auth/login"}>Write</Link>
            </div>
            <div>
              <Link href={"/auth/login"}>Sign in</Link>
            </div>
            <div>
              <span>
                <button className="py-2 px-4 bg-black text-white rounded-3xl">
                  <Link href={"/auth/login"}>Get Started</Link>
                </button>
              </span>
            </div>
          </div>
        </div>
      </nav>
      <div className=" overflow-hidden mx-5 md:flex md:items-center">
        <div className="block lg:pt-20 lg:px-16 pt-2">
          <div className="right-0 top-28 absolute w-[460px] h-[600px] hidden lg:block">
            <Image className="align-middle" src={blogger} alt="" />
          </div>
          <div className="mb-10 mt-16 ">
            <h2 className="tracking-tight leading-[100%] lg:text-[130px] text-[70px] md:text-[90px] font-playfair font-normal">
              Your Stories <br />
              Enhanced by
              <span
                className="ml-4 before:block before:absolute before:-inset-1 before:-skew-y-3
               before:bg-green-500 relative inline-block"
              >
                <span className="relative text-white">AI</span>
              </span>
            </h2>
          </div>
          <div className="my-10">
            <h3 className="text-xl leading-6">
              A place to read, write, and elevate your understanding with
              AI-driven creativity.
            </h3>
          </div>
          <div className="mt-4">
            <span>
              <button className="py-2 px-6 bg-black text-white rounded-3xl">
                <Link href={"/auth/login"}>Start reading</Link>
              </button>
            </span>
          </div>
        </div>
      </div>
      <footer></footer>
    </div>
  );
}

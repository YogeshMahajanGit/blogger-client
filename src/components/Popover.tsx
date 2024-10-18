"use client";
import React, { useState, ReactNode } from "react";
import { Popover as TinyPopover } from "react-tiny-popover";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import Link from "next/link";
import StarIcon from "./StarIcon";

interface MyPopoverProps {
  children: ReactNode;
}

export default function MyPopover({ children }: MyPopoverProps) {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const router = useRouter();

  function handleLogOut() {
    Cookies.remove("token");

    router.push("/auth");
  }

  return (
    <TinyPopover
      isOpen={isPopoverOpen}
      positions={["bottom"]}
      padding={10}
      onClickOutside={() => setIsPopoverOpen(false)}
      content={({}) => (
        <div>
          <div className="absolute -right-10 mt-2 w-52 bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="p-2">
              <div className="flex items-center space-x-3 hover:bg-gray-100 hover:text-black transition-colors duration-200 cursor-pointer p-1 rounded-md">
                <Link href={"/dashboard/generate"}>
                  <div className="sm:flex items-center gap-1 pr-6 hidden">
                    <StarIcon />
                    <div className="leading-5 text-[#6B6B6B] hover:text-black">
                      AI Write
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            <Link href="/dashboard/stories">
              <div className="p-2">
                <div className="flex items-center space-x-3 hover:bg-gray-100 hover:text-black transition-colors duration-200 cursor-pointer p-1 rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                    aria-label="Stories"
                  >
                    <path
                      stroke="currentColor"
                      d="M4.75 21.5h14.5a.25.25 0 0 0 .25-.25V2.75a.25.25 0 0 0-.25-.25H4.75a.25.25 0 0 0-.25.25v18.5c0 .138.112.25.25.25Z"
                    ></path>
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      d="M8 8.5h8M8 15.5h5M8 12h8"
                    ></path>
                  </svg>

                  <span>Stories</span>
                </div>
              </div>
            </Link>

            <div className="border-t">
              <button
                onClick={handleLogOut}
                className="flex flex-col  w-full text-gray-400 hover:text-black cursor-pointer 
             p-2 "
              >
                <div className="ml-4 text-sm flex flex-row-reverse gap-1 items-center">
                  <div className="text-sm">Sign out</div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      )}
    >
      <button onClick={() => setIsPopoverOpen(!isPopoverOpen)}>
        {children}
      </button>
    </TinyPopover>
  );
}

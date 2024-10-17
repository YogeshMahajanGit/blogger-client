"use client";
import React, { useState, ReactNode } from "react";
import { Popover as TinyPopover } from "react-tiny-popover";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import Link from "next/link";

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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                  aria-label="Profile"
                >
                  <circle cx="12" cy="7" r="4.5" stroke="currentColor" />
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    d="M3.5 21.5v-4.342C3.5 15.414 7.306 14 12 14s8.5 1.414 8.5 3.158V21.5"
                  />
                </svg>
                <span>My Profile</span>
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
                <div className="text-sm">Sign out</div>
                <div className="ml-4 text-sm">mahaj*****m.com</div>
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

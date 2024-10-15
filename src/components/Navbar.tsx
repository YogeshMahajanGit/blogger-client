import Link from "next/link";
import React from "react";
import Profile from "./Profile";
import MyPopover from "./Popover";
import StarIcon from "./StarIcon";

export default function Navbar() {
  return (
    <nav>
      <div className="pl-8 pr-8 border-b border-gray-200 h-14 flex items-center">
        <div className="flex-grow flex-shrink-0 basis-auto items-center flex">
          <Link href="/">
            <svg width="120" height="50" xmlns="http://www.w3.org/2000/svg">
              <text
                x="5"
                y="35"
                fontFamily="Bitter, serif"
                fontSize="30"
                fill="#242424"
                stroke="5"
                strokeWidth="6"
                fontWeight="700"
              >
                Blogger
              </text>
            </svg>
          </Link>
          <div className="search ml-4 bg-[#f9f9f9] w-[240px] h-[40px] rounded-[20px] border-none items-center flex text-black max-[600px]:hidden">
            <div className="icon ml-3 mr-3 felx">
              <svg
                className="align-middle"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M4.092 11.06a6.95 6.95 0 1 1 13.9 0 6.95 6.95 0 0 1-13.9 0m6.95-8.05a8.05 8.05 0 1 0 5.13 14.26l3.75 3.75a.56.56 0 1 0 .79-.79l-3.73-3.73A8.05 8.05 0 0 0 11.042 3z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              className="bg-transparent p-[10px 20px 10px 0] outline-none border-none"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="icon hidden align-middle ml-3 mr-3 max-[600px]:block p-1">
          <svg
            className="align-middle"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M4.092 11.06a6.95 6.95 0 1 1 13.9 0 6.95 6.95 0 0 1-13.9 0m6.95-8.05a8.05 8.05 0 1 0 5.13 14.26l3.75 3.75a.56.56 0 1 0 .79-.79l-3.73-3.73A8.05 8.05 0 0 0 11.042 3z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
        <Link href={"/dashboard/generate"}>
          <div className="flex items-center gap-1 pr-6">
            <StarIcon />
            <div className="leading-5 text-[#6B6B6B] hover:text-black">
              AI Write
            </div>
          </div>
        </Link>

        <Link href={"/dashboard/new-story"}>
          <div className="write mr-10 max-[400px]:mr-4 ">
            <div className="items-center leading-5 text-[#6B6B6B] hover:text-black flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                aria-label="Write"
              >
                <path
                  fill="currentColor"
                  d="M14 4a.5.5 0 0 0 0-1zm7 6a.5.5 0 0 0-1 0zm-7-7H4v1h10zM3 4v16h1V4zm1 17h16v-1H4zm17-1V10h-1v10zm-1 1a1 1 0 0 0 1-1h-1zM3 20a1 1 0 0 0 1 1v-1zM4 3a1 1 0 0 0-1 1h1z"
                ></path>
                <path
                  stroke="currentColor"
                  d="m17.5 4.5-8.458 8.458a.25.25 0 0 0-.06.098l-.824 2.47a.25.25 0 0 0 .316.316l2.47-.823a.25.25 0 0 0 .098-.06L19.5 6.5m-2-2 2.323-2.323a.25.25 0 0 1 .354 0l1.646 1.646a.25.25 0 0 1 0 .354L19.5 6.5m-2-2 2 2"
                ></path>
              </svg>
              <div className="ml-2 text-sm text-[#6B6B6B] hover:text-black tracking-wider">
                Write
              </div>
            </div>
          </div>
        </Link>
        <MyPopover>
          <Profile />
        </MyPopover>
      </div>
    </nav>
  );
}

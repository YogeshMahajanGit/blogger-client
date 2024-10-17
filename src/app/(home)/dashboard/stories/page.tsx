/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import { listUserBlog } from "@/http/api";
import ButtonPopover from "@/components/ButtonPopover";

interface DecodedToken {
  sub: string;
}

interface Blog {
  _id: string | null | undefined;
  title: string;
  coverImage: string;
  date: string;
}

export default function Stories() {
  const [content, setContent] = useState<Blog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Retrieve the token from cookies
  const token = Cookies.get("token");

  function getUserIdFromToken(token: string): string | null {
    try {
      // Decode the token
      const decoded = jwtDecode<DecodedToken>(token);
      return decoded.sub;
    } catch (error) {
      console.error("Invalid token:", error);
      return null;
    }
  }

  // API call to get user's blog list
  async function getListBlog() {
    try {
      const userId = getUserIdFromToken(token as string);

      if (!userId) {
        setError("User Not Found!");
        return;
      }
      const res = await listUserBlog(userId);
      setContent(res);
    } catch (error) {
      setError("Failed to fetch user blogs.");
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (token) {
      getListBlog();
    } else {
      setError("No token found.");
      setLoading(false);
    }
  }, [token]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }
  console.log(content);
  return (
    <div className="flex justify-center mb-12">
      <div className="w-8/12 ">
        <div className="mt-14 mb-2 text-wrap border-b-2 border-gray-400 ">
          <h1 className="leading-[1] font-semibold text-6xl ">Your library</h1>
        </div>

        <div className="mt-10 flex flex-col gap-5">
          {content.map((ele) => (
            <div
              key={ele._id}
              className="flex items-center gap-2 p-3 border-gray-200 border rounded-lg shadow-inner w-[80%]"
            >
              <div className="w-32 h-32">
                <Image
                  className="rounded-lg align-middle"
                  src={ele.coverImage}
                  alt="Picture of the blog"
                  layout="responsive"
                  objectFit="contain"
                  width={32}
                  height={0}
                />
              </div>
              <div className="ml-2 w-[70%]">
                <h2 className="text-wrap font-bold text-xl mb-6">
                  {ele.title}
                </h2>
                <p className="text-xs">{ele.date}</p>
              </div>
              <div>
                <ButtonPopover id={ele._id as string}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                    />
                  </svg>
                </ButtonPopover>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

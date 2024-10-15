import { Blog } from "@/types";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import Profile from "@/components/Profile";
import parse from "html-react-parser";
import convertTimeString from "@/timer";

export default function BlogCard({ blog }: { blog: Blog }) {
  const formattedDate = convertTimeString(blog.createdAt);
  return (
    <div>
      <div className="max-h-[450px] overflow-hidden">
        <div className="block">
          <Link href={`/blogs/${blog._id}`}>
            <article className="mb-[30px] ">
              <div className="flex mb-4 items-center">
                <div className="mr-4">
                  <div className="bg-transparent border-none flex items-center">
                    <Profile />
                  </div>
                </div>
                <div className="pr-1">
                  <p className="max-h-5 leading-5">{blog.blogger.name}</p>
                </div>
              </div>
              {/* -------------- */}
              <div className="flex justify-between gap-2">
                <div className="flex-1 min-w-0">
                  <div>
                    <h2 className="tracking-normal font-bold leading-8 text-[25px] text-balance">
                      {blog.title}
                    </h2>
                  </div>
                  <div className="pt-4">
                    <h4 className="tracking-normal font-normal leading-5 text-balance prose lg:prose-xl ">
                      {parse(blog.content.slice(0, 140))}...
                    </h4>
                  </div>
                  <div className="h-11 pt-[20px] md:pt-[75px] ">
                    <div className="flex items-center gap-6 text-[13px]">
                      <span>{formattedDate}</span>
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
                          d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
                        />
                      </svg>

                      <div className="flex gap-1 items-center">
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
                            d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" relative ml-6 mr-6 flex-shrink-0 w-[120px] lg:w-[200px] max-[640px]:w-[100px] max-[640px]:h-[100px]">
                  <Image
                    className="rounded-sm align-middle lg:w-[420px] lg:h-[214px]"
                    src={blog.coverImage}
                    alt="Picture of the blog"
                    loading="lazy"
                    // layout="fill"
                    layout="responsive"
                    objectFit="contain"
                    width={0}
                    height={0}
                  />
                </div>
              </div>
            </article>
          </Link>
        </div>
        <div className="border-b border-gray-300 mb-4"></div>
      </div>
    </div>
  );
}
// border-b border-gray-200
// border border-sky-500

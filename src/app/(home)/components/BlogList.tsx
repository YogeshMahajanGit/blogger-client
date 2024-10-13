import React from "react";
import { Blog } from "@/types";
import BlogCard from "./BlogCard";

export default async function BlogList() {
  //Data fetching
  let blogs;
  try {
    const response = await fetch(`${process.env.BACKEND_URL}/blogs`, {
      cache: "no-store",
    });
    if (!response.ok) {
      throw new Error("An error occurred while fetching the blogs");
    }
    blogs = await response.json();
  } catch (error) {
    if (error) {
      return (
        <h1 className="font-semibold text-2xl mt-32 text-red-400">
          An error occurred while Fetching the Blogs
        </h1>
      );
    }
  }

  return (
    <div className="pt-14">
      <div></div>
      {blogs.map((blog: Blog) => (
        <BlogCard key={blog._id} blog={blog} />
      ))}
    </div>
  );
}

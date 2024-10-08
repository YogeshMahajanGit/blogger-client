import React from "react";
import { Blog } from "@/types";
import BlogCard from "./BlogCard";

export default async function BlogList() {
  //Data fetching
  const response = await fetch(`${process.env.BACKEND_URL}/blogs`, {
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error("An error occurred while fetching the blogs");
  }
  const blogs = await response.json();
  return (
    <div className="pt-14">
      {blogs.map((blog: Blog) => (
        <BlogCard key={blog._id} blog={blog} />
      ))}
    </div>
  );
}

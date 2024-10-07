import React from "react";
import { Blog } from "@/types";
import BlogCard from "./BlogCard";

export default function BlogList({ blogs }: { blogs: Blog[] }) {
  return (
    <div className="pt-14">
      {blogs.map((blog) => (
        <BlogCard key={blog._id} blog={blog} />
      ))}
    </div>
  );
}

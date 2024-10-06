import React from "react";
import { Blog } from "@/types";

export default function BlogList({ blogs }: { blogs: Blog[] }) {
  return (
    <div>
      {blogs.map((blog) => (
        <h1 key={blog._id}>{blog.title}</h1>
      ))}
    </div>
  );
}

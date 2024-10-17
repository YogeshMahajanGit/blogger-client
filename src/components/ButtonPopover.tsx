"use client";
import React, { useState, ReactNode } from "react";
import { Popover as TinyPopover } from "react-tiny-popover";
import Link from "next/link";
import { deleteBlog } from "@/http/api";

interface popoverProps {
  id: string;
  children: ReactNode;
  onDelete: (id: string) => void;
}

export default function ButtonPopover({
  id,
  children,
  onDelete,
}: popoverProps) {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  function handleDeleteBlog(id: string) {
    if (!id) return;

    deleteBlog(id)
      .then(() => {
        onDelete(id);
      })
      .catch((error) => {
        console.error("Failed to delete blog:", error);
      });
  }

  return (
    <TinyPopover
      isOpen={isPopoverOpen}
      positions={["bottom"]}
      padding={10}
      onClickOutside={() => setIsPopoverOpen(false)}
      content={() => (
        <div className="absolute -right-10 mt-2 w-32 bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
          <Link href={`/dashboard/edit-post/${id}`}>
            <div className="p-2">
              <div className="flex items-center space-x-3 hover:bg-gray-100 hover:text-black transition-colors duration-200 cursor-pointer p-1 rounded-md">
                <span className="tracking-wide">Edit</span>
              </div>
            </div>
          </Link>

          <div className="p-2">
            <button onClick={() => handleDeleteBlog(id)}>
              <div className="flex items-center text-red-500 space-x-3 hover:bg-gray-100 hover:text-red-600 transition-colors duration-200 cursor-pointer p-1 rounded-md">
                <span className="tracking-wide">Delete</span>
              </div>
            </button>
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

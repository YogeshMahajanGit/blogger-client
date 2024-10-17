"use client";

import Image from "next/image";
import React, { useRef, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import "dotenv/config";
import { createBlog } from "@/http/api";
import Loading from "@/components/Loading";
import { useRouter } from "next/navigation";
import Editor from "@/components/Editor";

export default function NewStory() {
  const [title, setTitle] = useState<string | undefined>("");
  const [content, setContent] = useState<string | undefined>(undefined);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const fileRef = useRef<File | null>(null);
  const category = "computer";

  const router = useRouter();

  // Click handler for the hidden file input
  function handleInputClick() {
    if (inputRef.current) {
      inputRef.current.click();
    }
  }

  // Handle the image preview
  function handlePreviewImage(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];

    if (file) {
      fileRef.current = file;
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  }

  // Handle form submission
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    // Collect all form data
    const formData = new FormData();
    formData.append("title", title as string);
    formData.append("content", content as string);
    formData.append("category", category);
    formData.append("coverImage", fileRef.current as File);

    // Server call
    try {
      await createBlog(formData);
      setLoading(false);
      router.push("/");
    } catch (error) {
      const err = error as Error;
      console.error("Error creating blog:", err.message);
    }
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="flex justify-center w-full mt-10">
      <div className="w-[80%]">
        <div className="w-full flex flex-col gap-1">
          <form onSubmit={handleSubmit}>
            <div className="right-0 flex flex-row-reverse">
              <button
                type="submit"
                style={{ backgroundColor: "#48bb78", color: "#fff" }}
                className="px-3 py-1 hover:bg-green-700
                font-bold rounded transition"
              >
                Publish
              </button>
            </div>

            <TextareaAutosize
              placeholder="Title"
              className=" w-full resize-none appearance-none overflow-hidden bg-transparent text-6xl font-bold focus:outline-none font-sans my-8"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <div className="flex justify-around flex-row-reverse">
              {preview && (
                <div className="w-[320px] flex items-center justify-center hover:border-4 hover:border-green-500 transition">
                  <Image
                    src={preview}
                    alt="Preview"
                    style={{ width: "300px" }}
                    width={0}
                    height={0}
                  />
                </div>
              )}
              {!preview && (
                <div
                  onClick={handleInputClick}
                  className="w-[60%] p-2  border-2 rounded-2xl group flex flex-col items-center justify-center border-dashed border-blue-400 cursor-pointer "
                >
                  <input
                    ref={inputRef}
                    onChange={handlePreviewImage}
                    type="file"
                    id="img"
                    name="img"
                    accept="image/*"
                    className="hidden"
                    required
                  />
                  <svg
                    className="w-14 aspect-square group-hover:scale-105"
                    viewBox="0 0 48 48"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="Open_Folder-2" data-name="Open Folder">
                      <path
                        d="m45 18h-4v-4a2.996 2.996 0 0 0 -3-3h-15.25a2.9991 2.9991 0 0 1 -2.33-1.11l-1.96-2.41a3.9846 3.9846 0 0 0 -3.1-1.48h-11.36a2.996 2.996 0 0 0 -3 3v29.57a3.3672 3.3672 0 0 0 1.01 2.42 3.3672 3.3672 0 0 0 2.42 1.01h33.66a3.441 3.441 0 0 0 3.3-2.47l5.53-18.97a2.003 2.003 0 0 0 -1.92-2.56z"
                        fill="#376cfb"
                      />
                      <path
                        d="m44.9987 18h-28.4262a3.43 3.43 0 0 0 -3.2925 2.47l-5.56 19.0614a3.4286 3.4286 0 0 1 -3.2914 2.4686h33.6638a3.43 3.43 0 0 0 3.2933-2.47l5.5331-18.97a2 2 0 0 0 -1.9201-2.56z"
                        fill="#4294ff"
                      />
                    </g>
                  </svg>
                </div>
              )}
            </div>
            <div className="my-12 rounded-md">
              <Editor value={content as string} onChange={setContent} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

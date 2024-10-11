"use client";

import EditorPage from "@/components/Editor";
import Image from "next/image";
import React, { useRef, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import "dotenv/config";

export default function NewStory() {
  const [title, setTitle] = useState<string | undefined>("");
  const [content, setContent] = useState<string | undefined>(undefined);
  const [preview, setPreview] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const fileRef = useRef<File | null>(null);
  const category = "computer";

  // Click handler for the hidden file input
  function handleInputClick() {
    if (inputRef.current) {
      inputRef.current.click();
    }
  }

  // Handle the image preview and store the file for form submission
  function handlePreviewImage(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];

    if (file) {
      fileRef.current = file; // Store the file for submission
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  }

  // Handle form submission and log all form data
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Collect all form data
    const formData = {
      title,
      content,
      category,
      image: fileRef.current,
    };

    // Log the form data to the console
    console.log("Form Data:", formData);

    // You can then send this form data to your backend API
    console.log(process.env.BACKEND_URL);

    try {
      const res = await fetch(`http://localhost:5000/api/blogs`, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        // Handle HTTP errors
        throw new Error(`Server error: ${res.status}`);
      }

      const data = await res.json();
      console.log("Response data:", data);
    } catch (error) {
      const err = error as Error;
      console.error("Error:", err.message);
    }
  }

  return (
    <div className="flex justify-center w-full mt-10">
      <div className="w-[70%]">
        <div className="w-full flex flex-col gap-1">
          <form onSubmit={handleSubmit}>
            {/* Submit Button */}
            <button type="submit" className="mt-4 bg-blue-600">
              Submit Blog
            </button>
            {/* Title Input */}
            <TextareaAutosize
              placeholder="Title"
              className=" w-full resize-none appearance-none overflow-hidden bg-transparent text-6xl font-bold focus:outline-none font-sans my-8"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            {/* Image Preview and Upload */}
            <div className="flex justify-around flex-row-reverse">
              {preview && (
                <div className="w-[320px] border flex items-center justify-center">
                  <Image
                    src={preview}
                    alt="Preview"
                    style={{ width: "300px" }}
                    width={0}
                    height={0}
                  />
                </div>
              )}
              <div className="w-[320px] bg-white p-4 rounded-2xl flex flex-col gap-8 border border-slate-400">
                <div className="text-center">
                  <h1 className="text-2xl font-medium">
                    Upload Your Blog Image
                  </h1>
                  <p className="text-gray-300">
                    Files Should be less than 5 MB
                  </p>
                </div>
                <div
                  onClick={handleInputClick}
                  className="w-full p-8 border-2 rounded-2xl group flex flex-col items-center justify-center border-dashed border-blue-400 cursor-pointer"
                >
                  <input
                    ref={inputRef}
                    onChange={handlePreviewImage}
                    type="file"
                    id="img"
                    name="img"
                    accept="image/*"
                    className="hidden"
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
              </div>
            </div>

            {/* Editor for Content */}
            <EditorPage setContent={(content) => setContent(content)} />
          </form>
        </div>
      </div>
    </div>
  );
}

// "use client";

// import EditorPage from "@/components/Editor";
// import Image from "next/image";
// import React, { useRef, useState } from "react";
// import TextareaAutosize from "react-textarea-autosize";

// export default function NewStory() {
//   const [title, setTitle] = useState<string | undefined>("");
//   const [content, setContent] = useState<string | undefined>(undefined);
//   const [preview, setPreview] = useState<string | null>(null);
//   const inputRef = useRef<HTMLInputElement | null>(null);

//   function handleInputclick() {
//     if (inputRef.current) {
//       inputRef.current.click();
//     }
//   }

//   // Handle the image preview
//   function handlePreviewImage(e: React.ChangeEvent<HTMLInputElement>) {
//     const file = e.target.files?.[0];

//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setPreview(reader.result as string);
//       };
//       reader.readAsDataURL(file);
//     }
//   }

//   function handleSubmit() {}
//   return (
//     <div className="flex justify-center w-full mt-10">
//       <div className="w-[70%]">
//         <div className="w-full flex flex-col gap-1">
//           <form onSubmit={handleSubmit}>
//             <TextareaAutosize
//               placeholder="Title"
//               className=" w-full resize-none appearance-none overflow-hidden bg-transparent text-6xl font-bold focus:outline-none font-sans mb-4"
//               onChange={() => setTitle(title)}
//             />
//             <div className=" flex justify-around flex-row-reverse">
//               {preview && (
//                 <div className="w-[320px] border  flex items-center justify-center">
//                   {preview && (
//                     <Image
//                       src={preview}
//                       alt="Preview"
//                       style={{ width: "300px" }}
//                       width={0}
//                       height={0}
//                     />
//                   )}
//                 </div>
//               )}
//               <div className="w-[320px] bg-white p-4 rounded-2xl  flex flex-col gap-8 border border-slate-400 ">
//                 <div className="text-cent er">
//                   <h1 className="text-2xl font-medium">
//                     Upload Your Blog Image
//                   </h1>
//                   <p className="text-gray-300 ">
//                     Files Should be less than 5 MB
//                   </p>
//                 </div>

//                 <div
//                   onClick={handleInputclick}
//                   className="w-full p-8 border-2 rounded-2xl  group flex flex-col items-center justify-center border-dashed  border-blue-400 cursor-pointer"
//                 >
//                   <input
//                     ref={inputRef}
//                     onChange={handlePreviewImage}
//                     type="file"
//                     id="img"
//                     name="img"
//                     accept="image/*"
//                     className="hidden"
//                   ></input>
//                   <svg
//                     className="w-14 aspect-square  group-hover:scale-105 "
//                     viewBox="0 0 48 48"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <g id="Open_Folder-2" data-name="Open Folder">
//                       <path
//                         d="m45 18h-4v-4a2.996 2.996 0 0 0 -3-3h-15.25a2.9991 2.9991 0 0 1 -2.33-1.11l-1.96-2.41a3.9846 3.9846 0 0 0 -3.1-1.48h-11.36a2.996 2.996 0 0 0 -3 3v29.57a3.3672 3.3672 0 0 0 1.01 2.42 3.3672 3.3672 0 0 0 2.42 1.01h33.66a3.441 3.441 0 0 0 3.3-2.47l5.53-18.97a2.003 2.003 0 0 0 -1.92-2.56z"
//                         fill="#376cfb"
//                       />
//                       <path
//                         d="m44.9987 18h-28.4262a3.43 3.43 0 0 0 -3.2925 2.47l-5.56 19.0614a3.4286 3.4286 0 0 1 -3.2914 2.4686h33.6638a3.43 3.43 0 0 0 3.2933-2.47l5.5331-18.97a2 2 0 0 0 -1.9201-2.56z"
//                         fill="#4294ff"
//                       />
//                     </g>
//                   </svg>
//                 </div>
//               </div>
//             </div>
//             <EditorPage setContent={() => setContent} />
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

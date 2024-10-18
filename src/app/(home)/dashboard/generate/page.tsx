"use client";
import StarIcon from "@/components/StarIcon";
import { generateBlog } from "@/http/api";
import React, { useRef, useState } from "react";
import parse from "html-react-parser";

export default function Generate() {
  const promptRef = useRef<HTMLInputElement>(null);
  const [content, setContent] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  //Delay para Typing Effect
  function delayPara(index: number, nextWord: string) {
    setTimeout(function () {
      setContent((prev) => prev + nextWord);
    }, 75 * index);
  }

  // format ai response function
  function formatText(content: string): string {
    let formatted = content.replace(/##\s/g, "");

    formatted = formatted.replace(/\*\*(.*?)\*\*/g, "<b>$1</b>");
    // Add line breaks at the end of each sentence
    formatted = formatted.replace(/\.(\s|$)/g, ".<br><br>");

    return formatted;
  }

  async function handlePrompt(e: React.FormEvent<EventTarget>) {
    e.preventDefault();

    // Get prompt
    const prompt = promptRef.current?.value as string;

    if (!prompt) {
      setError("Prompt is required to generate a blog.");
      return;
    }

    // Clear error and start loading
    setError(null);
    setLoading(true);
    setContent("");

    // API call
    try {
      const res = await generateBlog(prompt);
      const { content } = res;

      // format ai respons
      const formatedRes = formatText(content);

      const del: string[] = formatedRes.split(" ");

      for (let i = 0; i < del.length; i++) {
        const nextWord = del[i];
        delayPara(i, nextWord + " ");
      }

      // Clear the input field
      if (promptRef.current) {
        promptRef.current.value = "";
      }

      setLoading(false);
    } catch (error) {
      setError("An error occurred while generating the blog.");
      setLoading(false);
      console.log(error);
    }
  }

  return (
    <section className="h-[92vh] w-100%">
      <div className="sm:w-[60%] mx-auto w-[80%]">
        <div className=" py-7 sm:py-20 flex items-center text-center flex-col justify-center">
          <div className="flex gap-1">
            <h1 className="font-bold text-4xl sm:text-6xl leading-4 text-green-300 bg-clip-text">
              Hey
            </h1>
            <span>
              <StarIcon />
            </span>
          </div>
          <div className="mt-12">
            <h3 className="font-bold text-2xl sm:text-4xl leading-10 md:leading-8 text-slate-500 new-class">
              Have an idea?
              <span className="relative inline-block mx-2">
                <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-green-500 relative">
                  <span className="relative text-white">AI</span>
                </span>
              </span>
              can help
            </h3>
          </div>
        </div>
        <div>
          <form
            onSubmit={handlePrompt}
            className="border text-green-600 bg-[#1E1F20] px-1 flex rounded-full py-2 my-2"
          >
            <div className="w-[93%]">
              <input
                type="text"
                ref={promptRef}
                name="prompt"
                placeholder="Give a topic"
                className="bg-transparent p-2 border-none outline-none text-xl w-full font-medium"
              />
            </div>
            <button
              className={`flex items-center justify-center cursor-pointer ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              type="submit"
              disabled={loading}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                />
              </svg>
            </button>
          </form>
          {error && (
            <p className="text-red-500 text-center text-xl font-normal italic underline underline-offset-2 py-3">
              {error}
            </p>
          )}
          {loading && (
            <div className="w-[100%] flex flex-col gap-2">
              <hr className="hr" />
              <hr className="hr" />
              <hr className="hr" />
            </div>
          )}
        </div>
        {!loading && (
          <div className="prose lg:prose-xl my-10 p-4 overflow-y-scroll no-scrollbar h-[70vh] w-[100%] mx-auto border  text-white bg-[#212121] rounded-lg">
            {content ? parse(content) : <p>No content Write prompt</p>}
          </div>
        )}
      </div>
    </section>
  );
}

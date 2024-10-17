"use client";

import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
    ["link", "image"],
    ["clean"],
  ],
};

const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "align",
  "strike",
  "script",
  "blockquote",
  "background",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "color",
  "code-block",
];

interface EditorProps {
  value: string;
  onChange: (content: string) => void;
}

const Editor: React.FC<EditorProps> = ({ value, onChange }) => {
  return (
    <ReactQuill
      value={value}
      onChange={onChange}
      placeholder={"Write something awesome..."}
      modules={modules}
      formats={formats}
    />
  );
};

export default Editor;

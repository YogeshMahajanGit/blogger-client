/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import NovelEditor from "./NovelEditor ";

interface EditorPageProps {
  setContent: (content: string) => void;
}

export default function EditorPage({ setContent }: EditorPageProps) {
  return <NovelEditor setContent={setContent} />;
}

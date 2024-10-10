import { Editor } from "novel";
import { type Editor as TipTapEditor } from "@tiptap/core";

type NovelEditorProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setContent: any;
};
export default function NovelEditor({ setContent }: NovelEditorProps) {
  return (
    <div>
      <Editor
        defaultValue={{
          type: "doc",
          content: [],
        }}
        onDebouncedUpdate={(editor?: TipTapEditor) => {
          setContent(editor?.getHTML());
        }}
        disableLocalStorage={true}
        className="-mx-10 rounded-md border-none "
      />
    </div>
  );
}

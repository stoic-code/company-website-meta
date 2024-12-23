"use client";
import React from "react";
import "./Editor.css";
import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";

import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.bubble.css";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

type TEditorProps = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  className?: string;
};

const AdminEditor: React.FC<TEditorProps> = ({
  value,
  setValue,
  className,
}) => {
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
    ],
  };

  return (
    <ReactQuill
      theme="snow"
      value={value}
      onChange={setValue}
      className={cn("min-h-[20re] rounded-md border", className)}
      modules={modules}
    />
  );
};

export default AdminEditor;

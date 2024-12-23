"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { CameraIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type TImateUploadBtnProps = {
  setValue: any;
  trigger: any;
  className?: string;
};
// Must have a schema name "image"
export const ImageUploadBtn: React.FC<TImateUploadBtnProps> = ({
  setValue,
  trigger,
  className,
}) => {
  const [imgUrl, setImgUrl] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div
      className={cn(
        "inline-block h-[100px] w-[100px] cursor-pointer  rounded-full",
        className,
      )}
    >
      <div
        onClick={() => {
          inputRef.current?.click();
        }}
        className="absolute flex h-[100px] w-[100px] items-center justify-center rounded-full bg-black text-white opacity-0 transition-opacity duration-300 hover:opacity-60"
      >
        <CameraIcon />
        <input
          onChange={(e) => {
            if (e.target.files) {
              const file = e.target.files[0];
              setValue("image", file);
              trigger("image");
              const fileUrl = URL.createObjectURL(file);
              setImgUrl(fileUrl);
            }
          }}
          type="file"
          accept="image/*"
          hidden
          ref={inputRef}
        />
      </div>
      <Image
        className="h-[100px] w-[100px] rounded-full border border-gray-200"
        height={100}
        width={100}
        alt="placeholder"
        src={imgUrl ? imgUrl : "/avatar.svg"}
      />
    </div>
  );
};

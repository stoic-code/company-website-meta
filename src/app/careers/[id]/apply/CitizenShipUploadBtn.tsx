"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { CameraIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type TImateUploadBtnProps = {
  setValue: any;
  trigger: any;
  name: string;
  className?: string;
};
// Must have a schema name "image"
export const CitizenShipUploadBtn = ({
  setValue,
  trigger,
  className,
  name,
}: TImateUploadBtnProps) => {
  const [imgUrl, setImgUrl] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const placeHolder = name === "citizenship_front" ? "/id_f.svg" : "/id_b.svg";

  return (
    <div
      className={cn(
        "relative inline-block h-[120px] w-[200px] cursor-pointer border border-blue-300",
        className,
      )}
    >
      <div
        onClick={() => {
          inputRef.current?.click();
        }}
        className="absolute flex h-full w-full items-center justify-center bg-black text-white opacity-0 transition-opacity duration-300 hover:opacity-60"
      >
        <CameraIcon />
        <input
          onChange={(e) => {
            if (e.target.files) {
              const file = e.target.files[0];
              setValue(name, file);
              trigger(name);
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
        className="h-full w-full object-cover"
        height={100}
        width={100}
        alt="placeholder"
        src={imgUrl ? imgUrl : placeHolder}
      />
    </div>
  );
};

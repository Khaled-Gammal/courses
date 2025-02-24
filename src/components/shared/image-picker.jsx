"use client";

import { Camera } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

export default function ImagePicker({
  value,
  onChange,
  error,
  disabled = false,
}) {
  const inputRef = useRef();

  const handleClick = () => {
    if (!disabled) inputRef.current.click();
  };

  const handleChange = (e) => {
    const image = e.target.files[0];
    onChange(image);
  };

  // Check if the value is a valid file or an external link
  const isFile = value instanceof Blob || value instanceof File;
  const isImageUrl = typeof value === "string" && value.startsWith("http");

  return (
    <div
      className={`h-[70px] w-[70px] rounded-full bg-gray-300 flex justify-center items-center cursor-pointer ${
        error ? "border-2 border-red-800" : ""
      }`}
      onClick={handleClick}
    >
      <input
        disabled={disabled}
        type="file"
        ref={inputRef}
        style={{ display: "none" }}
        onChange={handleChange}
      />
      {isFile ? (
        <Image
          src={URL.createObjectURL(value)}
          alt="Selected image"
          height={70}
          width={70}
          className="h-[70px] w-[70px] rounded-full object-cover"
        />
      ) : isImageUrl ? (
        <Image
          src={value}
          alt="Image link"
          height={70}
          width={70}
          className="h-[70px] w-[70px] rounded-full object-cover"
        />
      ) : (
        <Camera size={32} color="#606060" strokeWidth={0.75} />
      )}
    </div>
  );
}

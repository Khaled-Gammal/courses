"use client";
import Image from "next/image";
import drag from "../../assets/images/Button.png";
import pdfIcon from "../../assets/icons/Vector.png";
import videoIcon from "../../assets/images/videoimage.png";
import { useRef, useState } from "react";
import { Label } from "../ui/label";
import { MoveDown, Plus } from "lucide-react";
import Link from "next/link";
export default function DragFile({ label, value, onChange, type, error }) {
  const inputRef = useRef(null);
  const handleFile = () => {
    inputRef.current.click();
  };
  const handleChange = (e) => {
    const file = e.target.files[0];
    onChange(file);
  };
  const isImageUrl = typeof value === "string" && value.startsWith("http");
  console.log(value);
  return (
    <div className="flex flex-col gap-1 w-full">
      <Label className="text-sm font-light text-gray-400">{label}</Label>
      {value ? (
        type === "pdf" ? (
          <div className="flex items-center gap-9">
            <div>
              <div className="h-[73px] w-full md:w-[160px] bg-[#E6E4F040] flex items-center justify-center rounded">
                <Image src={pdfIcon} alt="pdf" />
              </div>
              <p className="text-xs font-light text-gray-400 flex justify-between w-full md:w-[160px] py-2 ">
                <span className="text-ellipsis text-nowrap overflow-hidden">
                  {value?.name}
                </span>
                <span>
                <a href={"#"} download={value}>
                  <MoveDown size={16} color="#8D8D8DD9" className="cursor-pointer" 
                //   onClick={()=>{
                //   window?.open(value)
                // }}
                />
                </a>
                </span>
              </p>
            </div>
            <div className="rounded border border-gray-400">
              <Plus size={16} color="#8D8D8DD9" />
            </div>
          </div>
        ) : type === "video" ? (
          <div>
            <div className="h-[73px] w-full md:w-[160px]">
              <Image src={videoIcon} alt="pdf" />
            </div>
            <p className="text-xs font-light text-gray-400 flex justify-between w-full md:w-[160px] py-2 ">
              <span className="text-ellipsis text-nowrap overflow-hidden">
                {value?.name}
              </span>
              <span>
                <MoveDown size={16} color="#8D8D8DD9" onClick={()=>{
                  window?.open(value)
                }}/>
              </span>
            </p>
          </div>
        ) : type==="image"&&(
          <div>
          <div className="h-[73px] w-full md:w-[160px] overflow-auto">
            <Image src={isImageUrl?value:URL.createObjectURL(value)} alt="image" height={73} width={160} className="object-fill"/>
          </div>
          <p className="text-xs font-light text-gray-400 flex justify-between w-full md:w-[160px] py-2 ">
            <span className="text-ellipsis text-nowrap overflow-hidden">
              {value?.name}
            </span>
            <span>
              <a href={"#"} download={value}>
              <MoveDown size={16} color="#8D8D8DD9" 
              // onClick={()=>{
              //   window?.open(value)
              // }}
              />
              </a>
            </span>
          </p>
        </div>
        )
      ) : (
        <div className="flex flex-col justify-center items-center gap-[9px] py-3 border border-dashed  rounded">
          <Image src={drag} alt="drag" onClick={handleFile} />
          <input
            type="file"
            className="hidden"
            ref={inputRef}
            accept={
              type === "pdf"
                ? "application/pdf"
                : type === "video"
                ? "video/*"
                : "image/*"
            }
            onChange={handleChange}
          />
          <div className="flex flex-col items-center gap-1">
            <h3 className="text-sm font-light text-gray-600">
              Drag & Drop or choose file to upload
            </h3>
            <p className="text-xs font-light text-gray-400">
              {value?.name
                ? value?.name
                : type === "pdf"
                ? "Supported formats : pdf"
                : "Drag & Drop or choose Video to upload"}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

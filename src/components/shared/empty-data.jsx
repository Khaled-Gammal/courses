'use client';
import Image from "next/image";
import emptyImage from "@/assets/images/Nothing.png"
export default function EmptyData() {

  return (
    <div className="flex flex-col items-center justify-center gap-[13px] h-[70vh]">
        <p className="text-primary font-medium text-base leading-6">Their is no data here yet !</p>
        <div className="h-[239.02px]  w-[280px] flex justify-center">
        <Image src={emptyImage} alt="Empty data" width={280} height={239} className="object-contain"/>
        </div>
    </div>
  )
}

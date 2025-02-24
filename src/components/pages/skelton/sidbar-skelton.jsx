import { Skeleton } from "@/components/ui/skeleton";

export default function SidbarSkelton() {
  return (
    <div className="flex flex-col items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        {
          Array.from({ length: 8 }).map((_, index) => (
            <Skeleton className="h-4 w-[250px]" key={index} />
          ))
        }
       
      </div>
    </div>
  )
}

'use client'
import { usePathname } from "next/navigation";
import SearchInput from "../shared/search-input";
import { ModeToggle } from "../toggle-mode";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { PageRoutes } from "./sidebar-routing";
import ProfileMenu from "./profile-menu";


function TopBar() {
  const pathname=usePathname()
  const HeaderTitle=PageRoutes.find((item)=>item.path===pathname)?.title
  return (
    <section className="h-[101px] w-full py-[34px] px-3 md:px-[40px] flex flex-row justify-between items-center ">
      <p className="text-primary font-medium text-xl">{HeaderTitle}</p>
      <div className="flex flex-row gap-3 md:gap-[26px] ">
        <div className="hidden  md:block">
        <SearchInput />
        </div>
        <ProfileMenu/>
        <ModeToggle/>
      </div>
    </section>
  );
}

export default TopBar;

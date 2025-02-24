"use client";
import {Plus } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
} from "@/components/ui/sidebar";
import Image from "next/image";
import logo from "@/assets/images/logo.png";
import NavLink from "./navlink";
import { PageRoutes } from "./sidebar-routing";
import { Suspense } from "react";
import SidbarSkelton from "../pages/skelton/sidbar-skelton";


export function AppSidebar() {
  return (
    <Sidebar className="w-[250px]" collapsible="icon">
      <SidebarContent className="" >
        <div className="flex justify-center mb-[41px] mt-6">
          <Image src={logo} alt="logo" height={91} width={103} className="rounded-full"/>
        </div>
        <SidebarGroup>
          <Suspense fallback={<SidbarSkelton/>}>
          <SidebarGroupContent>
            <SidebarMenu>
              {PageRoutes?.map((item) => (
                <>
                  {item?.groupName && (
                    <SidebarGroupLabel className="flex justify-between text-sm font-normal text-gray-400">
                      {item?.groupName} <Plus />
                    </SidebarGroupLabel>
                  )}

                  <NavLink data={item} key={item.title} />
                </>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
          </Suspense>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
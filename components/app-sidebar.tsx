"use client"

import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"

import { NavUser } from "@/components/nav-user"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  
  SidebarHeader,
  
  SidebarMenu,
  
  SidebarMenuButton,
  
  SidebarMenuItem,
  
  SidebarRail,
} from "@/components/ui/sidebar"
import Link from "next/link"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
 
  navMain: [
    {
      title: "Uzman Dashboard",
      url: "/",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "V2",
          url: "/uzman-v2",
        },
        {
          title: "V3",
          url: "/uzman-v3",
        },
      
      ],
    },
    {
      title: "Şube Müdürü",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "V1",
          url: "#",
        },
        
       
      ],
    },
    {
      title: "Daire Başkanı",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "V1",
          url: "/db-v1",
        },
        
        
      ],
    },
    {
      title: "Genel Müdür",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "V1",
          url: "/gm-v1",
        },
       
       
      ],
    },
  ],

}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <div className="flex aspect-square  items-center justify-center rounded-lg">
                  <img src="logo-gri.svg"  />
                </div>
                
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>

      </SidebarHeader>
     
      <SidebarContent>
        <NavMain items={data.navMain} />
        
      </SidebarContent>
      
      <SidebarRail />
    </Sidebar>
  )
}

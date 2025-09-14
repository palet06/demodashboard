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
  
  SidebarRail,
} from "@/components/ui/sidebar"

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
          url: "/sm-v1",
        },
        {
          title: "V2",
          url: "/sm-v2",
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
        {
          title: "V2",
          url: "/db-v2",
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
        {
          title: "V2",
          url: "/gm-v2",
        },
       
      ],
    },
  ],

}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
     
      <SidebarContent>
        <NavMain items={data.navMain} />
        
      </SidebarContent>
      
      <SidebarRail />
    </Sidebar>
  )
}

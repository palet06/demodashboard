import { AppSidebar } from "@/components/app-sidebar";

import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import type { Metadata } from "next";

import "./globals.css";
import { Separator } from "@/components/ui/separator";

import DynamicBreadcrumb from "@/components/DynamicBreadcrumb";



export const metadata: Metadata = {
  title: "Dashboard Demo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <>
          <SidebarProvider>
            <AppSidebar />
            <SidebarInset className="p-3 m-0 bg-gray-50">
              <div className="flex items-center gap-2 px-3">
                <SidebarTrigger />
                <Separator orientation="vertical" className="mr-2 h-4" />
                <DynamicBreadcrumb />
              </div>

              <div id="layout" className="flex flex-1 flex-col p-6 pt-5 pb-0 ">
                {children}
              </div>
            </SidebarInset>
          </SidebarProvider>
        </>
      </body>
    </html>
  );
}

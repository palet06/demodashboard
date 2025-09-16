"use client";

import KutucuklarDbV1 from "@/components/kutucuklar-db-v1";

import OzetBilgileriParent from "@/components/ozet-bilgileri-parent";

import React from "react";

const page = () => {
  return (
    <div id="db-v3" className="flex min-h-screen flex-col text-[#ff0000]">
      <main className="flex-1 space-y-6 p-1  bg-gray-50 ">
       
        <KutucuklarDbV1 />

        <OzetBilgileriParent />
        
      </main>
    </div>
  );
};

export default page;

"use client";

import KutucuklarGmV1 from "@/components/kutucuklar.gm-v1";

import OzetBilgileriParent from "@/components/ozet-bilgileri-parent";

import React from "react";

const page = () => {
  return (
    <div id="genelmudur" className="flex min-h-screen flex-col text-[#ff0000]">
      <main className="flex-1 space-y-6 p-1  bg-gray-50 ">
        
        <KutucuklarGmV1 />

        <OzetBilgileriParent />
      </main>
    </div>
  );
};

export default page;

"use client"



import KutucuklarDbV1 from "@/components/kutucuklar-db-v1";

import OzetBilgileriParent from "@/components/ozet-bilgileri-parent";

import React from "react";


const page = () => {
  return (
<div id="genelmudur" className="flex min-h-screen flex-col text-[#ff0000]">
      
      <main className="flex-1 space-y-6 p-1  bg-gray-50 ">
         <div className="flex items-center justify-between mb-5 text-center w-full">
        <div>
          <h1 className="text-2xl font-bold text-amber-900 text-center">
           Genel Müdür Dashboard - V1
          </h1>
        </div>
      </div>
        {/* <KutucuklarDbV1 /> */}
        gm butonları gekle
        
        <OzetBilgileriParent />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {/* <SalaryRangeAnalytics />
          <RetentionTurnoverAnalytics /> */}
        </div>
        {/* <AnalyticInsightsReport />
        <AgeRangeAnalytics />
        <AdOnPhSalaryDetails />
        <BpoComparisonTable /> */}
      </main>
    </div>
  );
};

export default page;

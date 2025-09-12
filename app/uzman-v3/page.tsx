import Duyurular from "@/components/duyurular";
import EskiBasvuruTablo from "@/components/eski-basvuru-tablo";
import Kutucuklar from "@/components/kutucuklar";

import Linkler from "@/components/linkler";
import Notlar from "@/components/notlar";
import OzetBilgileriParent from "@/components/ozet-bilgileri-parent";
import Performans from "@/components/performans";
import React from "react";

const page = () => {
  return (
    








<div id="v3" className="flex min-h-screen flex-col">
      
      <main className="flex-1 space-y-6 p-1  bg-gray-50 ">
         <div className="flex items-center justify-between mb-5 text-center w-full">
        <div>
          <h1 className="text-2xl font-bold text-amber-900 text-center">
            Uzman Dashboard - V3
          </h1>
        </div>
      </div>
        <Kutucuklar />
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

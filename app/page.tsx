import Duyurular from "@/components/duyurular";
import Linkler from "@/components/linkler";
import MinicikKartV2 from "@/components/minicik-kart-v2";
import React from "react";

const page = () => {
  return (
    <main className="flex-1 p-8 bg-gray-50">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900 text-center">
            Uzman Dashboard - V1
          </h1>
        </div>
      </div>

      <MinicikKartV2 />
      <div className="grid grid-cols-3 gap-4 ">
        <div className="col-span-2 w-full">
          <Duyurular />
        </div>
        <div className="col-span-1 w-full ">
          <Linkler />
        </div>
      </div>
    </main>
  );
};

export default page;

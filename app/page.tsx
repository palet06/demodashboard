
import Duyurular from "@/components/duyurular";
import EskiBasvuruTablo from "@/components/eski-basvuru-tablo";

import Linkler from "@/components/linkler";
import MinicikKartV2 from "@/components/minicik-kart-v2";
import Notlar from "@/components/notlar";
import Performans from "@/components/performans";
import React from "react";

const page = () => {
  return (
    <div className="flex min-h-screen flex-col">

   
    <main className="flex-1 p-1 bg-gray-50 ">
      <div className="flex items-center justify-between mb-5 text-center w-full">
        <div>
          <h1 className="text-2xl font-bold text-amber-900 text-center">
            Uzman Dashboard - V1
          </h1>
        </div>
      </div>

      <MinicikKartV2 />
    

      <div className="grid grid-cols-1 grid-rows-3 lg:grid-cols-4 gap-y-0 gap-x-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1  w-full">
          <EskiBasvuruTablo />
        </div>

        <div className="lg:col-span-2 lg:col-start-3 lg:row-start-1  w-full">
          <Duyurular />
        </div>
        <div className="lg:col-span-1 lg:col-start-1 lg:row-start-2   w-full ">
          <Notlar />
        </div>
        <div className="lg:col-span-1 lg:col-start-2 lg:row-start-2 w-full ">
          <Linkler />
        </div>
         <div className="lg:col-span-2 lg:col-start-3 lg:row-start-2 w-full ">
          <Performans />
        </div>
      </div>
    </main> </div>
  );
};

export default page;

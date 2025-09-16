import Duyurular from "@/components/duyurular";
import EskiBasvuruTablo from "@/components/eski-basvuru-tablo";
import Linkler from "@/components/linkler";

import Notlar from "@/components/notlar";
import Performans from "@/components/performans";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import MinicikKartUzman from "@/components/minicik-kart-uzman";

const Page = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 p-1 bg-gray-50 ">
        
        <div className=" ">
          {/* sol kolonm */}
          <div className="space-y-6 flex flex-col gap-5  ">
            <MinicikKartUzman />
          </div>

          {/* Sağ kolon  */}
          <div className="space-y-6  grid gap-6 grid-cols-1 lg:grid-cols-1 ">
            <Accordion
              type="single"
              collapsible
              defaultValue="duyurular"
              className=" w-full space-y-4  "
            >
              <AccordionItem
                value="duyurular"
                className="bg-white dark:bg-[#0F0F12] rounded-xl border border-gray-200 dark:border-[#1F1F23] shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden"
                
              >
                <AccordionTrigger className="cursor-pointer px-6 py-4 text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary font-semibold text-left hover:bg-gray-50 dark:hover:bg-[#1A1A1E] transition-all duration-200 [&[data-state=open]]:bg-gray-50 dark:[&[data-state=open]]:bg-[#1A1A1E] border-b-0">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    Duyurular
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 pt-2 animate-in slide-in-from-top-2 duration-300">
                  <Duyurular />
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="eneski20basvru"
                className=" bg-white dark:bg-[#0F0F12] rounded-xl border border-gray-200 dark:border-[#1F1F23] shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden"
              >
                <AccordionTrigger className="cursor-pointer px-6 py-4 text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary font-semibold text-left hover:bg-gray-50 dark:hover:bg-[#1A1A1E] transition-all duration-200 [&[data-state=open]]:bg-gray-50 dark:[&[data-state=open]]:bg-[#1A1A1E] border-b-0">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    Değerlendirmenizde Bekleyen En Eski 20 Başvuru
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 pt-2 animate-in slide-in-from-top-2 duration-300">
                  <EskiBasvuruTablo />
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="performns"
                className="bg-white dark:bg-[#0F0F12] rounded-xl border border-gray-200 dark:border-[#1F1F23] shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden"
              >
                <AccordionTrigger className="cursor-pointer px-6 py-4 text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary font-semibold text-left hover:bg-gray-50 dark:hover:bg-[#1A1A1E] transition-all duration-200 [&[data-state=open]]:bg-gray-50 dark:[&[data-state=open]]:bg-[#1A1A1E] border-b-0">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                    Performans Grafiği
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 pt-2 animate-in slide-in-from-top-2 duration-300">
                  <Performans />
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="notlar"
                className="bg-white dark:bg-[#0F0F12] rounded-xl border border-gray-200 dark:border-[#1F1F23] shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden"
              >
                <AccordionTrigger className="cursor-pointer px-6 py-4 text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary font-semibold text-left hover:bg-gray-50 dark:hover:bg-[#1A1A1E] transition-all duration-200 [&[data-state=open]]:bg-gray-50 dark:[&[data-state=open]]:bg-[#1A1A1E] border-b-0">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                    Notlar ve Hızlı Linkler
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 pt-2 animate-in slide-in-from-top-2 duration-300">
                  <div className="grid gap-10 grid-cols-1 lg:grid-cols-2 mb-4">
                    <Notlar />
                    <Linkler />
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Page;

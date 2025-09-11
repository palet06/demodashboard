"use client"
import { usePathname } from "next/navigation";
import React from "react";
import { Card } from "@/components/ui/card";

const standartGridClaslari ="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mb-1"
const MinicikKartUzman = () => {
  const pathname = usePathname();
  console.log(pathname)
  return (
    <div className="mb-4">
      {/* Quick Action Cards */}
      <div className={`${pathname ==='/uzman-v2'?'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-10 mb-1 p':standartGridClaslari}`}>
        <Card className="p-6 hover:shadow-md transition-shadow cursor-pointer border-gray-200">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <h1 className="w-6 h-6 text-green-600 font-bold flex items-center justify-center">
                190
                </h1>
            </div>
            <div>
              <h3 className="font-medium text-gray-900">
                İş Listesinde Bekleyen
              </h3>
            </div>
          </div>
        </Card>
        <Card className="p-6 hover:shadow-md transition-shadow cursor-pointer border-gray-200">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <h1 className="w-6 h-6 text-indigo-600 font-bold flex items-center justify-center" >3</h1>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">GİGM Güncelleme Bekleyen</h3>
                    
                  </div>
                </div>
              </Card>
        {/* <Card className="p-6 hover:shadow-md transition-shadow cursor-pointer border-gray-200">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
              <h1 className="w-6 h-6 text-amber-600 font-bold flex items-center justify-center">
                86
              </h1>
            </div>
            <div>
              <h3 className="font-medium text-gray-900">
                Güncelleme Bekleyen Başvurular
              </h3>
            </div>
          </div>
        </Card>
        <Card className="p-6 hover:shadow-md transition-shadow cursor-pointer border-gray-200">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center">
                    <h1 className="w-6 h-6 text-sky-600 font-bold flex items-center justify-center" >4</h1>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Güncelleme Gelen Başvurular</h3>
                    
                  </div>
                </div>
              </Card> */}
        <Card className="p-6 hover:shadow-md transition-shadow cursor-pointer border-gray-200">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-violet-100 rounded-lg flex items-center justify-center">
              <h1 className="w-6 h-6 text-violet-600 font-bold flex items-center justify-center">
                5
              </h1>
            </div>
            <div>
              <h3 className="font-medium text-gray-900">
                Yurt Dışı Harç Bekleyen
              </h3>
            </div>
          </div>
        </Card>
        <Card className="p-6 hover:shadow-md transition-shadow cursor-pointer border-gray-200">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center">
              <h1 className="w-6 h-6 text-rose-600 font-bold flex items-center justify-center">
                7
              </h1>
            </div>
            <div>
              <h3 className="font-medium text-gray-900">
                Yasal Süresi Geçen Başvurular
              </h3>
            </div>
          </div>
        </Card>
        
      </div>
    </div>
  );
};

export default MinicikKartUzman;

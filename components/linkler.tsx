"use client"
import { usePathname } from "next/navigation";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";


  //const standartYukseklik = "h-[340px]"

const Linkler = () => {
//  const pathname = usePathname();
  const links = [
    { name: "UİGM Portal", url: "https://uigmportal.csgb.gov.tr" },
    { name: "Warehouse", url: "https://warehouseapp.csgb.gov.tr" },
    { name: "Çalışma ve Sosyal Güvenlik Bakanlığı", url: "https://www.csgb.gov.tr" },
    { name: "Personel Portal", url: "https://personelportal.csgb.gov.tr" },
    { name: "Telefon Rehberi", url: "https://kurumici.csgb.gov.tr" },
  ];
  return (
    <div className="w-full">
      <div className="h-full">
        <Card className={`h-[340px] gap-2 pb-0`}>
          <CardHeader className="">
            <CardTitle >
              Hızlı Linkler
            </CardTitle>
            <CardDescription>
             
            </CardDescription>
          </CardHeader>
          <CardContent className="px-2 flex h-full">
            <div className="space-y-0">
              {links.map((link, index) => (
                <div
                  key={index}
                  className="cursor-pointer flex items-center gap-3 p-2 hover:bg-gray-50 border-b border-gray-100 last:border-b-0"
                >
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <div className="flex-1 min-w-0 p-0">
                    <div className="font-medium text-xs lg:text-md whitespace-break-spaces text-gray-900 truncate">
                      <Link href={link.url} target="_blank">{link.name} </Link>
                    </div>
                    <div className="text-xs text-gray-600">{link.url}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Linkler;

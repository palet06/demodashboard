import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Linkler = () => {
  const links = [
    { name: "UİGM Portal", url: "https://deneme.com" },
    { name: "Warehouse", url: "https://deneme.com" },
    { name: "Çalışma ve Sosyal Güvenlik Bakanlığı", url: "https://deneme.com" },
    { name: "Personel Portal", url: "https://deneme.com" },
    { name: "Telefon Rehberi", url: "https://deneme.com" },
  ];
  return (
    <div className="w-full">
      <div className="">
        <Card className="h-[400px] gap-2 pb-0">
          <CardHeader className="">
            <CardTitle >
              Hızlı Linkler
            </CardTitle>
            <CardDescription>
              Kurum içi yardımcı linklere buradan ulaşabilirsiniz
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="space-y-0">
              {links.map((link, index) => (
                <div
                  key={index}
                  className="cursor-pointer flex items-center gap-3 p-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0"
                >
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-sm text-gray-900 truncate">
                      {link.name}
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

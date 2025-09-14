import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import BaskanlikTablo from "./tablo";

const BaskanlikOzet = () => {
  return (
    <div id="baskanlikOzet" className="w-full bg-white">
      <div className="grid grid-cols-1 gap-1  ">
        <Card className="col-span-1 h-auto gap-2 pb-10 ">
          <CardHeader>
            <CardTitle>
              Başkanlık Nezdinde Bulunan Başvuruların Özet Bilgileri
            </CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent className="pl-2 pb-0  ">
            <div className="flex-1 overflow-auto ">
              <div className="max-w-4xl xl:max-w-7xl mx-auto px-3 ">
                <BaskanlikTablo />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BaskanlikOzet;

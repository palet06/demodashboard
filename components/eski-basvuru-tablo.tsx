import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "./ui/badge";

const basvurular = [
  {
    id: 1,
    basvuruNo: 4082117,
    islemAdimi:
      "Harç yatmıştır,Göç İdaresi Başkanlığı güncellmesi sonrası başvuru tamamlanabillir",
    gecenSure: 3,
  },
  {
    id: 2,
    basvuruNo: 4105266,
    islemAdimi: "Dış Kullanıcı Başvuru Güncelleme İşlemi Yapmıştır.",
    gecenSure: 0,
  },
  {
    id: 3,
    basvuruNo: 4105220,
    islemAdimi: "YKN oluştu. Harç yatması bekleniyor",
    gecenSure: 15,
  },
  {
    id: 4,
    basvuruNo: 4082117,
    islemAdimi:
      "Harç yatmıştır,Göç İdaresi Başkanlığı güncellmesi sonrası başvuru tamamlanabillir",
    gecenSure: 3,
  },
  {
    id: 5,
    basvuruNo: 4105266,
    islemAdimi: "Dış Kullanıcı Başvuru Güncelleme İşlemi Yapmıştır.",
    gecenSure: 7,
  },
  {
    id: 6,
    basvuruNo: 4105220,
    islemAdimi: "YKN oluştu. Harç yatması bekleniyor",
    gecenSure: 11,
  },
  {
    id: 7,
    basvuruNo: 4082117,
    islemAdimi:
      "Harç yatmıştır,Göç İdaresi Başkanlığı güncellmesi sonrası başvuru tamamlanabillir",
    gecenSure: 25,
  },
  {
    id: 8,
    basvuruNo: 4105266,
    islemAdimi: "Dış Kullanıcı Başvuru Güncelleme İşlemi Yapmıştır.",
    gecenSure: 2,
  },
  {
    id: 9,
    basvuruNo: 4105220,
    islemAdimi: "YKN oluştu. Harç yatması bekleniyor",
    gecenSure: 8,
  },
  {
    id: 10,
    basvuruNo: 4105220,
    islemAdimi: "YKN oluştu. Harç yatması bekleniyor",
    gecenSure: 6,
  },
];

const EskiBasvuruTablo = () => {
  return (
    <div className="w-full ">
      <div className="grid grid-cols-1 gap-1  ">
        <Card className="col-span-1 h-[400px] gap-2 pb-0 ">
          <CardHeader>
            <CardTitle>
              Değerlendirmenizde Bekleyen En Eski 20 Başvuru
            </CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent className="pl-2 pb-0  ">
            <div className="flex-1 overflow-auto ">
              <div className="max-w-4xl xl:max-w-7xl mx-auto px-3 ">
                <div className=" rounded-lg  bg-background overflow-y-scroll max-h-[300px]">
                  <table className="w-full  ">
                    <thead className="bg-muted border-b border-border sticky top-0 left-0 border-collapse">
                      <tr>
                        <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground w-8">
                          #
                        </th>
                        <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground w-24">
                          Başvuru No
                        </th>
                        <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground  ">
                          Son İşlem Adımı
                        </th>
                        <th className="text-center py-3 px-4 text-xs font-medium text-muted-foreground  whitespace-nowrap">
                          Değerlendirmede Geçen Gün
                        </th>
                      </tr>
                    </thead>
                    <tbody className="">
                      {basvurular.map((basvuru, index) => (
                        <tr
                          key={basvuru.id}
                          className="border-b border-border hover:bg-muted/30 transition-colors "
                        >
                          <td className="py-3 px-4 text-xs text-muted-foreground">
                            {index + 1}
                          </td>
                          <td className="py-3 px-4">
                            <div className="min-w-0">
                              <div className="text-sm  text-slate-100 bg-muted-foreground rounded-sm text-center">
                                {basvuru.basvuruNo}
                              </div>
                            </div>
                          </td>
                          <td className="py-3 px-4 text-left">
                            {basvuru.islemAdimi}
                          </td>
                          <td className="py-3 px-4 text-center ">
                            {basvuru.gecenSure === 0 &&
                               (
                                <Badge
                                  variant="secondary"
                                  
                                >
                                  -
                                </Badge>
                              )}
                            {basvuru.gecenSure >= 1 &&
                              basvuru.gecenSure < 7 && (
                                <Badge
                                  variant="secondary"
                                  className="bg-green-100 text-green-700 "
                                >
                                  {basvuru.gecenSure}
                                </Badge>
                              )}
                            {basvuru.gecenSure >= 7 &&
                              basvuru.gecenSure < 15 && (
                                <Badge
                                  variant="secondary"
                                  className="bg-yellow-100 text-yellow-700 "
                                >
                                  {basvuru.gecenSure}
                                </Badge>
                              )}
                            {basvuru.gecenSure >= 15 && (
                              <Badge
                                variant="secondary"
                                className="bg-red-100 text-red-700 "
                              >
                                {basvuru.gecenSure}
                              </Badge>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EskiBasvuruTablo;

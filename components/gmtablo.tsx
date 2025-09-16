import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Tabs, TabsContent } from "@/components/ui/tabs";
import { useState } from "react";

const baskanlikListesi = [
  {
    id: 1,
    isim: "Nitelikli İşgücü ve Yatırımlar",
    sorumlu: "Mehmet DOĞAN",
    atanands: 281790,
    degerlendirilends: 272000,
    sonuclanands: 215000,
    performans: 79,
  },
  {
    id: 2,
    isim: "Sektörel İzinler I",
    sorumlu: "Sinan AYDIN",
    atanands: 257790,
    degerlendirilends: 240000,
    sonuclanands: 187800,
    performans: 78,
  },
  {
    id: 3,
    isim: "Sektörel İzinler II",
    sorumlu: "Fatma KUTLU",
    atanands: 329790,
    degerlendirilends: 224000,
    sonuclanands: 183000,
    performans: 82,
  },
  {
    id: 4,
    isim: "Uluslararası Koruma",
    sorumlu: "Gül Setenay ÖNÜRME (V.)",
    atanands: 377790,
    degerlendirilends: 192000,
    sonuclanands: 151000,
    performans: 79,
  },
  {
    id: 5,
    isim: "Uyum ve Kurumsal İşbirliği",
    sorumlu: "Gül Setenay ÖNÜRME",
    atanands: 441790,
    degerlendirilends: 160000,
    sonuclanands: 119000,
    performans: 74,
  },
];

export default function GmTablo() {
  const [selectedTab, setSelectedTab] = useState("nitelikli");
  const [mode, setMode] = useState<"tablo" | "grafik">("tablo");

  return (
    <div id="duyurular" className="w-full">
      <div className="grid grid-cols-2 gap-1  ">
        <Card className="col-span-2 h-[400px] xl:h-[450px] gap-2 pb-0 ">
          <CardHeader>
            <CardTitle>Genel Müdürlük Özet</CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent className="pl-2 pb-0  ">
            <div className="flex-1 overflow-auto ">
              <div className="max-w-4xl xl:max-w-full mx-auto px-3 ">
                <div className=" rounded-lg  bg-background overflow-y-scroll max-h-[300px] xl:max-h-[350px]">
                  <Tabs
                    defaultValue="personel"
                    value={selectedTab}
                    onValueChange={(val) => setSelectedTab(val)}
                  >
                    <TabsContent value="nitelikli">
                      <Table>
                        <TableHeader className="border-b border-border bg-muted hover:bg-muted/30 transition-colors">
                          <TableRow>
                            <TableHead>Başkanlık</TableHead>
                            <TableHead>Sorumlu</TableHead>
                            <TableHead className="text-center">
                              Atanan DS
                            </TableHead>
                            <TableHead className="text-center">
                              Değerlendirilen DS
                            </TableHead>
                            <TableHead className="text-center">
                              Sonuçlanan DS
                            </TableHead>
                            <TableHead className="text-center">
                              Performans
                            </TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {baskanlikListesi.map((baskanlik) => (
                            <TableRow
                              key={baskanlik.id}
                              className="hover:bg-muted/30 transition-colors"
                            >
                              <TableCell className="font-medium">
                                {baskanlik.isim}
                              </TableCell>
                              <TableCell>{baskanlik.sorumlu}</TableCell>

                              <TableCell className="text-center">
                                {baskanlik.atanands.toLocaleString()}
                              </TableCell>
                              <TableCell className="text-center">
                                {baskanlik.degerlendirilends.toLocaleString()}
                              </TableCell>
                              <TableCell className="text-center">
                                {baskanlik.sonuclanands.toLocaleString()}
                              </TableCell>
                              <TableCell>
                                <div className="mt-2 grid grid-cols-1 gap-4">
                                  <div>
                                    <div className="flex items-center justify-between text-xs text-slate-600 mb-1">
                                      {/* <span>BPO Automation Impact</span> */}
                                      <span>
                                        {(
                                          (baskanlik.sonuclanands /
                                            baskanlik.degerlendirilends) *
                                          100
                                        ).toFixed()}
                                        %
                                      </span>
                                    </div>
                                    <div className="h-2 bg-gray-500 rounded-full overflow-hidden">
                                      <div
                                        style={{
                                          width: `${(
                                            (baskanlik.sonuclanands /
                                              baskanlik.degerlendirilends) *
                                            100
                                          ).toFixed()}%`,
                                        }}
                                        className={`h-full ${
                                          Number(
                                            (
                                              (baskanlik.sonuclanands /
                                                baskanlik.degerlendirilends) *
                                              100
                                            ).toFixed()
                                          ) < 70 && "bg-red-500"
                                        } ${
                                          Number(
                                            (
                                              (baskanlik.sonuclanands /
                                                baskanlik.degerlendirilends) *
                                              100
                                            ).toFixed()
                                          ) > 70 && "bg-green-500"
                                        }   rounded-full`}
                                      ></div>
                                    </div>
                                  </div>
                                </div>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

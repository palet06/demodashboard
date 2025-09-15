import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
    <Tabs
      defaultValue="personel"
      value={selectedTab}
      onValueChange={(val) => setSelectedTab(val)}
    >
      <TabsList className="grid w-full grid-cols-5">
        <TabsTrigger className="cursor-pointer" value="nitelikli">
          Nitelikli İşgücü ve Yatırımlar
        </TabsTrigger>
        <TabsTrigger className="cursor-pointer flex relative" value="sektorel1">
          Sektörel İzinler I
        </TabsTrigger>
        <TabsTrigger className="cursor-pointer flex relative" value="sektorel2">
          Sektörel İzinler II
        </TabsTrigger>
        <TabsTrigger className="cursor-pointer flex relative" value="uk">
          Uluslararası Koruma
        </TabsTrigger>
        <TabsTrigger className="cursor-pointer flex relative" value="uyum">
          Uyum ve Kurumsal İşbirliği
        </TabsTrigger>
      </TabsList>

      <TabsContent value="nitelikli">
        <Table>
          <TableHeader className="border-b border-border bg-muted hover:bg-muted/30 transition-colors">
            <TableRow>
              <TableHead>Başkanlık</TableHead>
              <TableHead>Sorumlu</TableHead>
              <TableHead className="text-center">Atanan DS</TableHead>
              <TableHead className="text-center">Değerlendirilen DS</TableHead>
              <TableHead className="text-center">Sonuçlanan DS</TableHead>
              <TableHead className="text-center">Performans</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {baskanlikListesi.map((baskanlik) => (
              <TableRow
                key={baskanlik.id}
                className="hover:bg-muted/30 transition-colors"
              >
                <TableCell className="font-medium">{baskanlik.isim}</TableCell>
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

      {/* {mode === "tablo" ? (
        grafik gelecek buraya
      ) : (
        selectedTab === "sube" && (
          <div>
            <h3 className="font-medium text-lg mb-3">Şube Grafik</h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={grafikData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="1 1" />
                  <XAxis dataKey="subeAdi" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar
                    dataKey="adananDs"
                    name="Atanan dosya sayısı"
                    fill="#0088FE"
                    label={{ position: "center", fill: "#fff", fontSize: 12 }}
                  />
                  <Bar
                    dataKey="degerlendirilenDs"
                    name="Değerlendirilen dosya sayısı"
                    fill="#FFBB28"
                    label={{ position: "center", fill: "#fff", fontSize: 12 }}
                  />
                  <Bar
                    dataKey="sonuclananDs"
                    name="Sonuçlanan dosya sayısı"
                    fill="#00C49F"
                    label={{ position: "center", fill: "#fff", fontSize: 12 }}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )
      )}

      {selectedTab === "sube" && (
        <button
          className="cursor-pointer  text-blue-500 rounded hover:text-blue-900"
          onClick={() =>
            setMode((prev) => (prev === "tablo" ? "grafik" : "tablo"))
          }
        >
          {mode === "tablo" ? "Grafik Göster" : "Tablo Göster"}
        </button>
      )} */}
    </Tabs>
  );
}

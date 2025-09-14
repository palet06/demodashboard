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

const personelListesi = [
  {
    id: 1,
    isim: "Havva DOĞAN",
    unvan: "Şube Müdürü",
    sube: "Eğitim, Sağlık ve Ulaştırma Sektörü",
    atanands: 18500,
    degerlendirilends: 18000,
    sonuclanands: 17000,
    performans: 94,
  },
  {
    id: 2,
    isim: "Ayşegül ADIGÜZEL",
    unvan: "Şef",
    sube: "Nitelikli Yatırımlar",
    atanands: 19100,
    degerlendirilends: 18500,
    sonuclanands: 15000,
    performans: 81,
  },
  {
    id: 3,
    isim: "Selin Meydan TANRIGÜLÜ",
    unvan: "Çalışma Uzmanı",
    sube: "Nitelikli Yatırımlar",
    atanands: 17000,
    degerlendirilends: 16000,
    sonuclanands: 12000,
    performans: 75,
  },
  {
    id: 4,
    isim: "Beyza YAYLA",
    unvan: "Çalışma Uzman Yardımcısı",
    sube: "Nitelikli İşgücü Araştırma ve Turkuaz Kart Grup Başkanlığı",
    atanands: 19900,
    degerlendirilends: 19000,
    sonuclanands: 13000,
    performans: 68,
  },
  {
    id: 5,
    isim: "Leyla YILMAZ",
    unvan: "Çalışma Uzman Yardımcısı",
    sube: "Nitelikli İşgücü Araştırma ve Turkuaz Kart Grup Başkanlığı",
    atanands: 16700,
    degerlendirilends: 16000,
    sonuclanands: 14000,
    performans: 87,
  },
  {
    id: 6,
    isim: "Bircan MUTLU",
    unvan: "Çalışma Uzman Yardımcısı",
    sube: "Nitelikli İşgücü Araştırma ve Turkuaz Kart Grup Başkanlığı",
    atanands: 18200,
    degerlendirilends: 18000,
    sonuclanands: 16000,
    performans: 89,
  },
  {
    id: 7,
    isim: "Birsen ÇETİN",
    unvan: "V.H.K.İ.",
    sube: "Eğitim, Sağlık ve Ulaştırma Sektörü",
    atanands: 16300,
    degerlendirilends: 16000,
    sonuclanands: 12000,
    performans: 75,
  },
  {
    id: 8,
    isim: "Betül FETTAHOĞLU",
    unvan: "V.H.K.İ.",
    sube: "Eğitim, Sağlık ve Ulaştırma Sektörü",
    atanands: 16700,
    degerlendirilends: 16000,
    sonuclanands: 11000,
    performans: 68,
  },
  {
    id: 9,
    isim: "Hüsne HALAÇOĞLU SOLAK",
    unvan: "V.H.K.İ.",
    sube: "Eğitim, Sağlık ve Ulaştırma Sektörü",
    atanands: 17541,
    degerlendirilends: 17000,
    sonuclanands: 16000,
    performans: 94,
  },
  {
    id: 10,
    isim: "Nurcan ÜNLÜTÜRK",
    unvan: "Uzman",
    sube: "Nitelikli Yatırımlar",
    atanands: 18896,
    degerlendirilends: 18000,
    sonuclanands: 13000,
    performans: 72,
  },
  {
    id: 11,
    isim: "Nurcan ÇİÇEK KIRKAYAK",
    unvan: "İş ve Meslek Danışmanı",
    sube: "Eğitim, Sağlık ve Ulaştırma Sektörü",
    atanands: 16547,
    degerlendirilends: 16000,
    sonuclanands: 14000,
    performans: 87,
  },
  {
    id: 12,
    isim: "Hacı Bayram Veli YILMAZ",
    unvan: "İş ve Meslek Danışmanı",
    sube: "Nitelikli Yatırımlar",
    atanands: 20365,
    degerlendirilends: 20000,
    sonuclanands: 18000,
    performans: 90,
  },
  {
    id: 13,
    isim: "Nurettin MOĞUL",
    unvan: "İş ve Meslek Danışmanı",
    sube: "Nitelikli Yatırımlar",
    atanands: 17589,
    degerlendirilends: 17000,
    sonuclanands: 12000,
    performans: 70,
  },
  {
    id: 14,
    isim: "Gülden KONUK",
    unvan: "İş ve Meslek Danışmanı",
    sube: "Nitelikli Yatırımlar",
    atanands: 15400,
    degerlendirilends: 15000,
    sonuclanands: 12000,
    performans: 80,
  },
  {
    id: 15,
    isim: "Ayşe Özge BERKER",
    unvan: "İş ve Meslek Danışmanı",
    sube: "Nitelikli Yatırımlar",
    atanands: 17200,
    degerlendirilends: 16500,
    sonuclanands: 15000,
    performans: 91,
  },
  {
    id: 16,
    isim: "Şule SAKINMAZ",
    unvan: "İş ve Meslek Danışmanı",
    sube: "Eğitim, Sağlık ve Ulaştırma Sektörü",
    atanands: 17896,
    degerlendirilends: 17000,
    sonuclanands: 13000,
    performans: 76,
  },
  {
    id: 17,
    isim: "Figen KUL",
    unvan: "Bilgisayar İşletmeni",
    sube: "Nitelikli Yatırımlar",
    atanands: 16456,
    degerlendirilends: 16000,
    sonuclanands: 9000,
    performans: 91,
  },
];

export default function BaskanlikTablo() {
  const [selectedTab, setSelectedTab] = useState("personel");
  const [mode, setMode] = useState<"tablo" | "grafik">("tablo");
  const subeListesi: any[] = [];
  const grafikData: any[] = [];

  // Gruplama işlemi
  personelListesi.forEach((personel) => {
    const existingSube = subeListesi.find(
      (sube) => sube.subeAdi === personel.sube
    );

    if (existingSube) {
      existingSube.atanands += personel.atanands;
      existingSube.degerlendirilends += personel.degerlendirilends;
      existingSube.sonuclanands += personel.sonuclanands;
    } else {
      subeListesi.push({
        id: subeListesi.length + 1,
        subeAdi: personel.sube,
        atanands: personel.atanands,
        degerlendirilends: personel.degerlendirilends,
        sonuclanands: personel.sonuclanands,
        performans: (
          (personel.sonuclanands / personel.degerlendirilends) *
          100
        ).toFixed(),
      });
      grafikData.push({
        subeAdi: personel.sube,
        adananDs: personel.atanands,
        degerlendirilenDs: personel.degerlendirilends,
        sonuclananDs: personel.sonuclanands,
      });
    }
  });

 
  return (
    <Tabs defaultValue="personel"  value={selectedTab}
  onValueChange={(val) => setSelectedTab(val)}>
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger className="cursor-pointer" value="personel">
          Personel Bazlı
        </TabsTrigger>
        <TabsTrigger  className="cursor-pointer flex relative" value="sube">
          Şube Bazlı

         
         
        </TabsTrigger>
      </TabsList>

      <TabsContent value="personel">
        <Table>
          <TableHeader className="border-b border-border bg-muted hover:bg-muted/30 transition-colors">
            <TableRow>
              <TableHead>Personel</TableHead>
              <TableHead>Ünvan</TableHead>
              <TableHead>Şube</TableHead>
              <TableHead>Atanan DS</TableHead>
              <TableHead>Değerlendirilen DS</TableHead>
              <TableHead>Sonuçlanan DS</TableHead>
              <TableHead>Performans</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
          
            {personelListesi.map((personel) => (
              <TableRow
                key={personel.id}
                className="hover:bg-muted/30 transition-colors"
              >
                <TableCell className="font-medium">{personel.isim}</TableCell>
                <TableCell>{personel.unvan}</TableCell>
                <TableCell className=" whitespace-normal">
                  {personel.sube}
                </TableCell>
                <TableCell className="text-center">
                  {personel.atanands.toLocaleString()}
                </TableCell>
                <TableCell className="text-center">
                  {personel.degerlendirilends.toLocaleString()}
                </TableCell>
                <TableCell className="text-center">
                  {personel.sonuclanands.toLocaleString()}
                </TableCell>
                <TableCell>
                  <div className="mt-2 grid grid-cols-1 gap-4">
                    <div>
                      <div className="flex items-center justify-between text-xs text-slate-600 mb-1">
                        {/* <span>BPO Automation Impact</span> */}
                        <span>
                          {(
                            (personel.sonuclanands /
                              personel.degerlendirilends) *
                            100
                          ).toFixed()}
                          %
                        </span>
                      </div>
                      <div className="h-2 bg-gray-500 rounded-full overflow-hidden">
                        <div
                          style={{
                            width: `${(
                              (personel.sonuclanands /
                                personel.degerlendirilends) *
                              100
                            ).toFixed()}%`,
                          }}
                          className={`h-full ${
                            Number(
                              (
                                (personel.sonuclanands /
                                  personel.degerlendirilends) *
                                100
                              ).toFixed()
                            ) < 70 && "bg-red-500"
                          } ${
                            Number(
                              (
                                (personel.sonuclanands /
                                  personel.degerlendirilends) *
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

      {mode === "tablo" ? (
    
        
         
          
         
        <TabsContent value="sube">
           
          <Table>
            <TableHeader className="border-b border-border bg-muted hover:bg-muted/30 transition-colors">
              <TableRow>
                <TableHead>Şube Adı</TableHead>
                <TableHead className="text-center">Atanan DS</TableHead>
                <TableHead className="text-center">
                  Değerlendirilen DS
                </TableHead>
                <TableHead className="text-center">Sonuçlanan DS</TableHead>
                <TableHead>Performans</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {subeListesi.map((sube) => (
                <TableRow
                  key={sube.id}
                  className="hover:bg-muted/30 transition-colors"
                >
                  <TableCell className="font-medium">{sube.subeAdi}</TableCell>
                  <TableCell className="text-center">{sube.atanands}</TableCell>
                  <TableCell className="text-center">
                    {sube.degerlendirilends}
                  </TableCell>
                  <TableCell className="text-center">
                    {sube.sonuclanands}
                  </TableCell>

                  <TableCell>
                    <div className="mt-2 grid grid-cols-1 gap-4">
                      <div>
                        <div className="flex items-center justify-between text-xs text-slate-600 mb-1">
                          {/* <span>BPO Automation Impact</span> */}
                          <span>
                            {(
                              (sube.sonuclanands / sube.degerlendirilends) *
                              100
                            ).toFixed()}
                            %
                          </span>
                        </div>
                        <div className="h-2 bg-gray-500 rounded-full overflow-hidden">
                          <div
                            style={{
                              width: `${(
                                (sube.sonuclanands / sube.degerlendirilends) *
                                100
                              ).toFixed()}%`,
                            }}
                            className={`h-full ${
                              Number(
                                (
                                  (sube.sonuclanands / sube.degerlendirilends) *
                                  100
                                ).toFixed()
                              ) < 70 && "bg-red-500"
                            } ${
                              Number(
                                (
                                  (sube.sonuclanands / sube.degerlendirilends) *
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
        
      ) : (
       
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
      )}
      <button 
              className="cursor-pointer  text-blue-500 rounded hover:text-blue-900"
              onClick={() =>
                setMode((prev) => (prev === "tablo" ? "grafik" : "tablo"))
            }
            >
              {mode === "tablo" ? "Grafik Göster" : "Tablo Göster"}
            </button>
     
     
    </Tabs>
  );
}

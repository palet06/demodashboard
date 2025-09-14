"use client";
import { usePathname } from "next/navigation";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

import { Download, Brain } from "lucide-react";

import { generatePDF } from "@/lib/utils";
import Duyurular from "./duyurular";
import Performans from "./performans";
import EskiBasvuruTablo from "./eski-basvuru-tablo";
import Notlar from "./notlar";
import Link from "next/link";
import Harita from "./Harita";
import BaskanlikOzet from "./baskanlik-ozet";

export default function OzetBilgileriParent() {
  const pathname = usePathname();
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleExportPDF = async () => {
    setIsGeneratingPDF(true);
    setStatusMessage("PDF Oluşturuluyor...");

    try {
      await generatePDF("v3", "uzman-ozet.pdf");
      setStatusMessage("PDF başarı ile oluşturuldu!");

      // Clear success message after 3 seconds
      setTimeout(() => {
        setStatusMessage("");
      }, 3000);
    } catch (error) {
      console.error("PDF Oluşturulurken hata oluştu.:", error);
      setStatusMessage("Hata oluştu. Lütfen tekrar deneyin.");

      // Clear error message after 3 seconds
      setTimeout(() => {
        setStatusMessage("");
      }, 3000);
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  
  return (
    <Card className="col-span-2">
      <CardHeader className="">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 ">
              <Brain className="h-6 w-6 text-blue-600" />
              <CardTitle className="text-xl font-bold">
                Özet Bilgileriniz
              </CardTitle>
            </div>
            {/* <CardDescription className="text-base">
              Comparative analysis of BPO and Digital Marketing sectors in Cagayan de Oro City
            </CardDescription> */}
          </div>
          <div className="flex flex-col items-end">
            <Button
              onClick={handleExportPDF}
              disabled={isGeneratingPDF}
              className="bg-blue-600 hover:bg-blue-700"
            >
              {isGeneratingPDF ? (
                "Oluşturuluyor..."
              ) : (
                <>
                  <Download className="mr-2 h-4 w-4" /> PDF'e Aktar
                </>
              )}
            </Button>
            {statusMessage && (
              <p
                className={`text-sm mt-2 ${
                  statusMessage.toLowerCase().includes("tekrar")
                    ? "text-red-500"
                    : "text-green-500"
                }`}
              >
                {statusMessage}
              </p>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent className="">
        <Tabs defaultValue="duyurular">
          <TabsList className={`grid w-full ${pathname.startsWith("/uzman")?'grid-cols-5':'grid-cols-6'} `}>
            <TabsTrigger className="cursor-pointer" value="duyurular">
              Duyurular
            </TabsTrigger>

            {pathname.startsWith("/uzman") && (
              <TabsTrigger className="cursor-pointer" value="performans">
                Performansım
              </TabsTrigger>
            )}
            {pathname.startsWith("/db") && (
              <>
              <TabsTrigger className="cursor-pointer" value="harita">
                İzin Haritası
              </TabsTrigger>
              <TabsTrigger className="cursor-pointer" value="baskanlikOzet">
                Başkanlık Özet
              </TabsTrigger>
              </>
            )}

            <TabsTrigger className="cursor-pointer" value="bekleyen20">
              Bekleyen Son 20 Başvuru
            </TabsTrigger>
            <TabsTrigger className="cursor-pointer" value="notlar">
              Notlarım
            </TabsTrigger>
            <TabsTrigger className="cursor-pointer" value="linkler">
              Yararlı Linkler
            </TabsTrigger>
          </TabsList>

          <TabsContent value="duyurular" className="space-y-4 pt-4">
            <Duyurular />
          </TabsContent>

          {pathname === "/uzman-v3" && (
            <TabsContent value="performans" className="space-y-4 pt-4">
              <Performans />
            </TabsContent>
          )}
          {pathname.startsWith("/db") && (
            <>
            <TabsContent value="harita" className="space-y-4 pt-4">
              <Harita />
            </TabsContent>
            <TabsContent value="baskanlikOzet" className="space-y-4 pt-4">
              <BaskanlikOzet />
            </TabsContent>
            </>
          )}

          <TabsContent value="bekleyen20" className="space-y-4 pt-4">
            <EskiBasvuruTablo />
          </TabsContent>

          <TabsContent value="notlar" className="space-y-4 pt-4">
            <Notlar />
          </TabsContent>

          <TabsContent value="linkler" className="space-y-4 ">
            <div className="bg-slate-50 p-4 rounded-lg mt-1">
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-300"></div>

                <div className="relative pl-12 pb-8">
                  <div className="absolute left-0 top-0 h-8 w-8 rounded-full bg-blue-100 border-2 border-blue-600 flex items-center justify-center text-sm font-medium text-blue-600">
                    *
                  </div>
                  <div className="absolute left-0 top-0 h-8 w-8 rounded-full bg-green-100 border-2 border-green-600 flex items-center justify-center text-sm font-medium text-green-600">
                    *
                  </div>
                  <h4 className="font-medium text-base mb-1">Kurum İçi</h4>
                  <p className="text-sm text-slate-700 mb-2">
                    Bakanlık içi kaynaklar, portallar ve iletişim araçları.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 text-xs">
                    <div className="bg-white p-3 rounded border">
                      <span className="font-medium block mb-1">UİGM</span>
                      <ul className="space-y-1 list-disc pl-4 text-slate-600">
                        <li>
                          <Link
                            href="https://www.csgb.gov.tr/uigm/tr"
                            target="_blank"
                          >
                            Genel Müdürlük Web Sayfası
                          </Link>{" "}
                        </li>
                        <li>
                          <Link
                            href="https://uigmportal.csgb.gov.tr"
                            target="_blank"
                          >
                            UİGM Portal
                          </Link>{" "}
                        </li>
                        <li>
                          <Link
                            href="https://warehouseapp.csgb.gov.tr/"
                            target="_blank"
                          >
                            Warehouse
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-white p-3 rounded border">
                      <span className="font-medium block mb-1">BTGM</span>
                      <ul className="space-y-1 list-disc pl-4 text-slate-600">
                        <li>Çalışma Tv</li>
                        <li>E-Kütüphane</li>
                      </ul>
                    </div>
                    <div className="bg-white p-3 rounded border">
                      <span className="font-medium block mb-1">
                        Çalışma Genel Müdürlüğü
                      </span>
                      <ul className="space-y-1 list-disc pl-4 text-slate-600">
                        <li>Çalışma İstatistikleri Bilgi Sistemi</li>
                        <li>İstatistiki Bilgi Yönetim Sistemi</li>
                        <li>Çalışma Hayatı İstatistikleri</li>
                      </ul>
                    </div>
                    <div className="bg-white p-3 rounded border">
                      <span className="font-medium block mb-1">
                        Personel Genel Müdürlüğü
                      </span>
                      <ul className="space-y-1 list-disc pl-4 text-slate-600">
                        <li>
                          <Link href="#">Personel Portal</Link>{" "}
                        </li>
                        <li>
                          <Link href="#">Telefon Rehberi</Link>{" "}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="relative pl-12 pb-8">
                  <div className="absolute left-0 top-0 h-8 w-8 rounded-full bg-blue-100 border-2 border-blue-600 flex items-center justify-center text-sm font-medium text-blue-600">
                    *
                  </div>
                  <h4 className="font-medium text-base mb-1">Kurum Dışı</h4>
                  <p className="text-sm text-slate-700 mb-2">
                    Çalışma ve Sosyal Güvenlik Bakanlığı ile ilgili dış
                    kaynaklar.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                    <div className="bg-white p-3 rounded border">
                      <span className="font-medium block mb-1">
                        Resmi Gazete
                      </span>
                      <ul className="space-y-1 list-disc pl-4 text-slate-600">
                        <li>6735 Sayılı Uluslararası İşgücü Kanunu</li>
                        <li>Uluslararası İşgücü Kanunu Uygulama Yönetmeliği</li>
                      </ul>
                    </div>
                    <div className="bg-white p-3 rounded border">
                      <span className="font-medium block mb-1">TÜİK</span>
                      <ul className="space-y-1 list-disc pl-4 text-slate-600">
                        <li>İstatistik Veri Portalı</li>
                        <li>Nüfus ve Demografi</li>
                        <li>Enflasyon ve Fiyat</li>
                      </ul>
                    </div>
                    <div className="bg-white p-3 rounded border">
                      <span className="font-medium block mb-1">
                        GÖÇ İdaresi Başkanlığı
                      </span>
                      <ul className="space-y-1 list-disc pl-4 text-slate-600">
                        <li>İstatistikler</li>
                        <li>Raporlar</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}

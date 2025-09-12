"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import DuyuruPopup from "./duyuru-popup";
import { Mails } from "lucide-react";

const duyurus = [
  {
    id: "1",
    title:
      "14'üncü ve 15'inci Göç Kurulu kararlarının iç kullanıcı ekranlarında gösterilmesi hususunda yapılan düzenlemeler",
    description: `14'üncü ve 15'inci Göç Kurulu kararlarının iç kullanıcı ekranlarında gösterilmesi hususunda aşağıdaki düzenlemeler yapılmıştır.

1.     Göç’ten gelen web servis bilgilerinde kısa dönem turistik ikamet ile insani ikamet düzenlenen yabancılardan düzenlenen ikametin "çalışma iznine başvuru amaçlı" olduğu bilgisi geliyorsa bu kişinin 14. veya 15. Göç Kurulu kapsamında olduğunu bildirmektedir.

a.      Kısa dönem turistik ikamet izni düzenlenen yabancılardan çalışma amacı olduğu bildirip Turizm İkamet Sebebi ise Kefaletle Evde Bakım olanlar 15. Göç Kurulu kapsamında; ikamet sebebi farklıysa veya boş ise 14. Göç Kurulu kapsamında;

b.     İnsani ikamet izni düzenlenen yabancılardan çalışmaya yönlendirme sebebi Kefaletle Evde Bakım veya Hayvancılık Sektörü olarak bildirilenler 15. Göç Kurulu kapsamında değerlendirilmek üzere sistemde geliştirmeler yapılarak tamamlanmıştır.

2.     Göç Kurulu kararı kapsamında ikamet izni düzenlenen yabancıların başvuruları Bakanlığımıza gelmesi halinde, söz konusu başvurularla ilgili üstte bilgilendirici metinler çıkmakta olup bu bilgilendirmeler yabancıya düzenlenen son ikameti Göç Kurulu kapsamındaysa ve ikamet izni hala aktifse (izin bitiş tarihi geçmemiş veya iptal edilmemişse) görünmeye devam edecektir. 14’üncü Göç kurulu kararı kapsamında çalışmaya yönlendirilenler PEMBE renkte; 15’inci Göç Kurulu kapsamındakiler içinse SARI renkte uyarı gösterilecektir.

3.     İlaveten, İkamet/Statü Sorgulama ekranında, İkamet İzni Bilgileri kısmında yer alan “Veriliş amacı” sütununda kısa dönem ikamet ve insani ikametin veriliş amaçları ile 14. ve 15. Göç Kurulu kapsamında olanların bilgisi ilaveten gösterilmeye başlanmıştır. (Kısa Dönem İkamet Veriliş Amaçları= 1-Gelir taahhüttü ve yükümlülük / 2-Kefaletle ev hizmetleri / 3-Yeterli ve düzenli gelir / 4-Aile Bağı / 5-Seyahat Planı / 6-Yat turizmi / 7-Dijital Göçebe)

Bilgilerinize sunulur.`,
    status: "general",
    date:"17.07.2025"
  },
  {
    id: "2",
    title:
      "Çoban ve Hayvan Bakıcıları İçin Çalışma İzni Başvuruları İç Kullanıcı Ekranları Geliştirmeleri.",
    description: `Tarım ve Orman Bakanlığı işbirliğinde hayvancılık sektöründe büyükbaş veya küçükbaş hayvanı bulunan ve Hayvan Bilgi Sistemine kayıtlı hayvancılık işletmelerinde istihdam edilecek çobanlara ve hayvan bakıcılarına ilişkin çalışma izni başvurularının değerlendirilmesinde belirlenen kriterler kapsamında yurt içinden ve yurt dışından çalışma izni başvuruları 12.06.2025 tarihi itibarıyla alınmaya başlanmıştır.

Bu kapsamda hayvancılığa ilişkin belirlenmiş NACE koduna sahip işletmeler yeni işyeri kaydı oluştururken HAYBİS işletme numarasını girebilmektedir.

Başvuruların incelenebilmesi için iç kullanıcı ekranlarında ise aşağıdaki geliştirmeler yapılmıştır:

1. Başvuru içerisindeki “Sorgulamalar” sekmesine (Üst Menü) Tarım ve Orman Bakanlığı sorgulaması eklendi. Bu sorgulama ile NACE Kodu: '0141', '0142', '0145', '0162' olup HAYBİS (Hayvancılık Bilgi Sistemi) numarası girilmek suretiyle “Hayvancılık İşyeri” olarak kaydı yapılan firmaların başvurularında hayvan sayıları sorgulanabilmektedir.

2.  Ayrıca HAYBİS no olmadan işyeri kaydı açmış işletmeler için kullanılmak üzere sol taraftaki “Sorgular” menüsüne “Hayvancılık İşletmesi Sorgula” sekmesi eklenmiştir. Bu sekmeden başvurudan bağımsız olarak TCKN veya VKN ile işletmenin hayvan sayıları sorgulanabilmektedir. (Not: Hayvancılık işletme belgesinde TCKN ile kayıtlıysa TCKN üzerinden, VKN üzerinden kayıtlıysa VKN bilgisiyle sorgu yapılmalıdır. Aksi halde sonuç boş dönecektir.)

3.  Dış Kurum Görüş İstek ekranında, web servis ile görüş sorulan kurumlara “Tarım Orman Bakanlığı Hayvancılık Genel Müdürlüğü” eklenerek çalıştırılacak çoban/hayvan bakıcısı için online görüş sorgulanabilmesi sağlanmıştır.

Bilgilerinize sunulur.  `,
    status: "general",
    date:"17.07.2025"
  },
  {
    id: "3",
    title:
      "Hayvancılık İşletmelerinde İstihdam Edilecek Çoban ve Hayvan Bakıcıları İçin Çalışma İzni Başvuruları hk.",
    description: `Tarım ve Orman Bakanlığı işbirliğinde hayvancılık sektöründe büyükbaş veya küçükbaş hayvanı bulunan ve Hayvan Bilgi Sistemine kayıtlı hayvancılık işletmelerinde istihdam edilecek çobanlara ve hayvan bakıcılarına ilişkin çalışma izni başvurularının değerlendirilmesinde belirlenen kriterler kapsamında yurt içinden ve yurt dışından çalışma izni başvuruları 12.06.2025 tarihi itibarıyla alınmaya başlanmıştır.
        
    Ayrıntılı Bilgi İçin: https://www.csgb.gov.tr/uigm/duyurular/12062025/`,
    status: "general",
    date:"17.07.2025"
  },
  {
    id: "4",
    title: "12.02.2025- İşçi Sayısı Sorgulama Ekranı hk.",
    description: `Sendika Bilgi Sistemi projesi kapsamında 13 Şubat 2025 saat 18:00 itibariyle canlı veri tabanının kapatılacak olması nedeniyle İşçi Sayısı Sorgulama servisine 16 Şubat 2025 saat 23:59’a kadar erişim sağlanamayacaktır. `,
    status: "general",
    date:"17.07.2025"
  },
  {
    id: "5",
    title:
      "İşçi Sayısı Sorgulama Ekranının, İstihdam Muafiyeti Sağlayan Kriterlerin de Takip Edilebilmesine Olanak Tanıyacak Şekilde Güncellenmesi.",
    description: `Kullanıcılara daha etkili bir değerlendirme ve izleme imkanı sunmak amacıyla İşçi sayısı sorgulama ekranı, istihdam muafiyeti sağlayan kriterlerin de takip edilebilmesine olanak tanıyacak şekilde geliştirilmiş olup DEMO SÜRÜMÜ olarak devreye alınmıştır. (Uygulamada alınacak dönüşlere ve kullanıcı tavsiyelerine göre geliştirilmeye devam edilecektir.)

 

Bu güncellemeyle birlikte, firmalar bazında istihdam muafiyeti sağlayan statü ve kriter sayıları ile kriterler kullanılan başvuruların görüntülenmesi mümkün olacaktır.

Ayrıca, uzman onay kriterleri ekranı da güncellenmiş olup, bu ekran üzerinden seçilen değerlendirme kriterlerine göre işyeri bazında kullanılan ve değerlendirmesi devam eden başvuru sayıları görüntülenebilecektir.`,
    status: "general",
    date:"17.07.2025"
  },
  {
    id: "6",
    title: "e-İzin ve e-Muafiyet Uygulamalarına e-Devlet üzerinden Girişler İçin İki Faktörlü Doğrulama Politikası Aktif Hale Getirilmiştir.",
    description:
      `e-İzin ve e-Muafiyet Uygulamalarına e-Devlet üzerinden Girişler İçin İki Faktörlü Doğrulama Politikası Aktif Hale Getirilmiştir. 

Bilgilerinize sunulur.`,
    status: "system",
    date:"17.12.2024"
  },
  {
    id: "7",
    title: "Bellek hatası giderilmiştir.",
    description:
      `Şube Müdürü güncelleme işlemi ve Daire Başkanı e-imza ekranında başvuru çekme işlemlerinde üst üste birden fazla işlem yapılmasında yaşanan ön bellek (cache) sorunu giderilmiştir.`,
    status: "system",
    date:"11.12.2024"
  },
 
];

const Duyurular = () => {
  const [opened, setOpened] = useState(false);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const popupAc = (baslik: string, desc: string) => {
    setTitle(baslik);
    setDesc(desc);
    setOpened((prev) => !prev);
  };

  return (
    <div id="duyurular" className="w-full">
      <div className="grid grid-cols-2 gap-1  ">
        <Card className="col-span-2 h-[400px] gap-2 pb-0 ">
          <CardHeader>
            <CardTitle>Duyurular</CardTitle>
            <CardDescription>
              
            </CardDescription>
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
                        <th className="text-left py-3 px-4 text-xs font-medium text-muted-foreground">
                          Duyuru
                        </th>
                        <th className="text-center py-3 px-4 text-xs font-medium text-muted-foreground w-24 ">
                          Tip
                        </th>
                        <th className="text-center py-3 px-4 text-xs font-medium text-muted-foreground w-20">
                          Oku
                        </th>
                      </tr>
                    </thead>
                    <tbody className="">
                      {duyurus.map((feature, index) => (
                        <tr
                          key={feature.id}
                          className="border-b border-border hover:bg-muted/30 transition-colors "
                        >
                          <td className="py-3 px-4 text-xs text-muted-foreground">
                            {index + 1}
                          </td>
                          <td className="py-3 px-4">
                            <div className="min-w-0">
                              <div className="text-sm font-medium text-foreground leading-tight">
                                {feature.title}
                              </div>
                              <div className="text-xs text-muted-foreground leading-tight mt-1 line-clamp-2">
                                {feature.date}
                              </div>
                            </div>
                          </td>
                          <td className="py-3 px-4 text-center">
                            {feature.status === "general" && (
                              <Badge
                                variant="secondary"
                                className="bg-green-100 text-green-700"
                              >
                                Genel
                              </Badge>
                            )}{" "}
                            {feature.status === "system" && (
                              <Badge
                                variant="secondary"
                                className="bg-blue-100 text-blue-700 "
                              >
                                Sistem
                              </Badge>
                            )}
                          </td>
                          <td className="py-3 px-4 text-center">
                            <Button
                              className="bg-indigo-400 hover:bg-indigo-700"
                              onClick={() =>
                                popupAc(feature.title, feature.description)
                              }
                            >
                              <Mails />
                            </Button>
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
      <DuyuruPopup
        baslik={title}
        desc={desc}
        trigger={opened}
        setTrigger={setOpened}
      />
    </div>
  );
};

export default Duyurular;

"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import React, { useState, useEffect, useRef } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { zoom } from "d3-zoom";
import { select } from "d3-selection";
const izinVerileriTurkiye: Record<string, number> = {
  Adana: 15000,
  Adıyaman: 17000,
  Afyon: 12500,
  Ağrı: 9300,
  Aksaray: 13000,
  Amasya: 9800,
  Ankara: 25000,
  Antalya: 27000,
  Ardahan: 71000,
  Artvin: 6200,
  Aydın: 14500,
  Batman: 47000,
  Bayburt: 30,
  Balıkesir: 14200,
  Bilecik: 8300,
  Bingöl: 7100,
  Bitlis: 6800,
  Bolu: 9100,
  Burdur: 7600,
  Bursa: 29000,
  Çanakkale: 8700,
  Çankırı: 5900,
  Çorum: 10100,
  Denizli: 14300,
  Diyarbakır: 19900,
  Düzce: 8200,
  Edirne: 9500,
  Elazığ: 11200,
  Erzincan: 7700,
  Erzurum: 13400,
  Eskişehir: 16800,
  Gaziantep: 21300,
  Giresun: 8800,
  Gümüşhane: 4900,
  Hakkari: 6100,
  Hatay: 17900,
  Iğdır: 5200,
  Isparta: 9300,
  İstanbul: 75000,
  İzmir: 40000,
  Kahramanmaraş: 15700,
  Karabük: 6900,
  Karaman: 6300,
  Kars: 7200,
  Kastamonu: 9700,
  Kayseri: 20100,
  Kırıkkale: 6700,
  Kırklareli: 8200,
  Kırşehir: 7100,
  Kilis: 4800,
  Kocaeli: 31000,
  Konya: 22500,
  Kütahya: 9800,
  Malatya: 14100,
  Manisa: 15300,
  Mardin: 12800,
  Mersin: 19400,
  Muğla: 16200,
  Muş: 7700,
  Nevşehir: 6900,
  Niğde: 7300,
  Ordu: 10100,
  Osmaniye: 8700,
  Rize: 7600,
  Sakarya: 13400,
  Samsun: 14800,
  Siirt: 6700,
  Sinop: 6200,
  Sivas: 11900,
  Şanlıurfa: 18800,
  Şırnak: 6100,
  Tekirdağ: 14300,
  Tokat: 9700,
  Trabzon: 12900,
  Tunceli: 4200,
  Uşak: 7600,
  Van: 15800,
  Yalova: 6800,
  Yozgat: 8300,
  Zonguldak: 10200,
};

// Dünya izin verileri (örnek: bazı ülkeler için)
const izinVerileriDunya: Record<string, number> = {
  "Costa Rica": 151953,
  Nicaragua: 230502,
  Haiti: 215464,
  "Dominican Republic": 102904,
  "El Salvador": 51555,
  Guatemala: 141174,
  Cuba: 152271,
  Honduras: 184825,
  "United States of America": 230407,
  Canada: 275703,
  Mexico: 187743,
  Belize: 77215,
  Panama: 189166,
  Denmark: 111046,
  "The Bahamas": 248437,
  "Trinidad and Tobago": 281697,
  Jamaica: 103942,
  Indonesia: 180703,
  Malaysia: 14551,
  Cyprus: 182538,
  India: 163793,
  China: 154279,
  Israel: 254587,
  Lebanon: 117029,
  Syria: 220971,
  "South Korea": 150990,
  "North Korea": 123097,
  Bhutan: 186923,
  Oman: 47556,
  Uzbekistan: 232387,
  Kazakhstan: 131324,
  Tajikistan: 134757,
  Mongolia: 107438,
  Vietnam: 135798,
  Cambodia: 27669,
  "United Arab Emirates": 30242,
  Georgia: 175686,
  Azerbaijan: 277768,
  Turkey: 23487,
  Laos: 76545,
  Kyrgyzstan: 114480,
  Armenia: 83550,
  Iraq: 98920,
  Iran: 112255,
  Qatar: 180054,
  "Saudi Arabia": 135193,
  Pakistan: 82844,
  Thailand: 21515,
  Kuwait: 92506,
  "East Timor": 155894,
  Brunei: 151607,
  Myanmar: 268612,
  Bangladesh: 23076,
  Afghanistan: 141841,
  Turkmenistan: 58413,
  Jordan: 209669,
  Nepal: 184887,
  Yemen: 57710,
  "Northern Cyprus": 232899,
  Philippines: 104250,
  "Sri Lanka": 118172,
  Taiwan: 256545,
  Japan: 19443,
  Chile: 175875,
  Bolivia: 79282,
  Peru: 82118,
  Argentina: 139747,
  Suriname: 126134,
  Guyana: 124781,
  Brazil: 74580,
  Uruguay: 62470,
  Ecuador: 190890,
  Colombia: 222782,
  Paraguay: 192043,
  Venezuela: 32566,
  "United Kingdom": 229538,
  Ethiopia: 100716,
  "South Sudan": 270709,
  Somalia: 296303,
  Kenya: 224027,
  Malawi: 275283,
  "United Republic of Tanzania": 70229,
  Somaliland: 86860,
  Morocco: 10079,
  "Western Sahara": 210892,
  "Republic of the Congo": 156767,
  "Democratic Republic of the Congo": 184542,
  Namibia: 193962,
  "South Africa": 99201,
  Libya: 236130,
  Tunisia: 280403,
  Zambia: 137577,
  "Sierra Leone": 216913,
  Guinea: 15950,
  Liberia: 169493,
  "Central African Republic": 119055,
  Sudan: 214710,
  Djibouti: 228155,
  Eritrea: 154509,
  "Ivory Coast": 26872,
  Mali: 278905,
  Senegal: 263960,
  Nigeria: 125299,
  Benin: 246484,
  Angola: 61020,
  Botswana: 140918,
  Zimbabwe: 204692,
  Chad: 198800,
  Algeria: 109813,
  Mozambique: 145018,
  eSwatini: 129012,
  Burundi: 142725,
  Rwanda: 193808,
  Uganda: 111634,
  Lesotho: 14143,
  Cameroon: 16354,
  Gabon: 189873,
  Niger: 178048,
  "Burkina Faso": 175208,
  Togo: 198677,
  Ghana: 194339,
  "Guinea-Bissau": 124222,
  Egypt: 127370,
  Mauritania: 261355,
  "Equatorial Guinea": 186127,
  Gambia: 94028,
  Madagascar: 66813,
  France: 252207,
  Ukraine: 96019,
  Belarus: 109186,
  Lithuania: 106784,
  Russia: 53992,
  Czechia: 233862,
  Germany: 152912,
  Estonia: 279897,
  Latvia: 102024,
  Norway: 252356,
  Sweden: 114771,
  Finland: 58446,
  Luxembourg: 231178,
  Belgium: 176601,
  "North Macedonia": 272335,
  Albania: 40251,
  Kosovo: 257818,
  Spain: 99047,
  Romania: 39218,
  Hungary: 212683,
  Slovakia: 28477,
  Poland: 32400,
  Ireland: 204173,
  Greenland: 267873,
  Greece: 145409,
  Austria: 36900,
  Italy: 187294,
  Switzerland: 103016,
  Netherlands: 113606,
  "Republic of Serbia": 265930,
  "Tanzania": 70229,
  Croatia: 147987,
  Slovenia: 140411,
  Bulgaria: 75874,
  Montenegro: 157636,
  "Bosnia and Herzegovina": 176875,
  Portugal: 129300,
  Moldova: 276885,
  Iceland: 242577,
  "Papua New Guinea": 266777,
  Australia: 238560,
  Fiji: 263953,
  "New Zealand": 237015,
  "Solomon Islands": 256679,
  Vanuatu: 174292,
  Antarctica: 56804,
};

const Harita = () => {
  const [mode, setMode] = useState<"turkiye" | "dunya">("turkiye");
  const [mapData, setMapData] = useState<any>(undefined);
  const [tooltip, setTooltip] = useState("");
  const [tooltipPosition, setTooltipPosition] = useState<{
    x: number;
    y: number;
  } | null>(null);
  const [hoveredFeatureName, setHoveredFeatureName] = useState<string | null>(
    null
  );

  // Zoom için refs
  const svgRef = useRef<SVGSVGElement | null>(null);
  const gRef = useRef<SVGGElement | null>(null);

  useEffect(() => {
    const fetchMap = async () => {
      try {
        let url = "";
        if (mode === "turkiye") {
          url = "/data/turkey_cities.geojson";
        } else {
          url = "data/countries.json";
        }
        const res = await fetch(url);
        const geo = await res.json();
        setMapData(geo);
      } catch (err) {
        console.error("Harita verisi alınırken hata oluştu:", err);
      }
    };
    fetchMap();
  }, [mode]);

  const projectionConfigTurkey = {
    scale: 1400,
    center: [35, 38] as [number, number],
  };
  const projectionConfigWorld = {
    scale: 57,
    center: [0, 13] as [number, number],
  };

  // Zoom behavior
  useEffect(() => {
    if (!svgRef.current || !gRef.current) return;

    const svg = select(svgRef.current);
    const g = select(gRef.current);

    const zoomBehavior = zoom()
      .scaleExtent([1, 8]) // 1x'den 8x'e zoom aralığı
      .on("zoom", (event) => {
        g.attr("transform", event.transform.toString());
      });

    svg.call(zoomBehavior);

    return () => {
      svg.on(".zoom", null);
    };
  }, [mapData, mode]);

  return (
    <div id="harita" className="w-full bg-white">
      <div className="grid grid-cols-1 gap-1  ">
        <Card className="col-span-1 h-[400px] xl:h-[500px] gap-2 pb-0 ">
          <CardHeader>
            <CardTitle>Verilen İzinler Ve Başvuru Haritası</CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent className="pl-2 pb-0  ">
            <div className="flex-1 overflow-hidden ">
              <div className="max-w-4xl xl:max-w-7xl mx-auto px-3 ">
                <div className=" rounded-lg  bg-background max-h-[300px] xl:max-h-[400px] relative">
                  <button
                    className="absolute cursor-pointer top-4 right-4 z-20 px-4 py-2 text-blue-500 rounded hover:text-blue-900"
                    onClick={() =>
                      setMode((prev) =>
                        prev === "turkiye" ? "dunya" : "turkiye"
                      )
                    }
                  >
                    {mode === "turkiye" ? "Dünya Haritası" : "Türkiye Haritası"}
                  </button>

                  <div
                  className="h-[320px] xl:h-[420px]"
                    style={{
                      width: "100%",
                      
                      maxWidth: 1000,
                      margin: "0 auto",
                    }}
                  >
                    <ComposableMap
                      ref={svgRef}
                      height={320}
                      projection="geoMercator"
                      projectionConfig={
                        mode === "turkiye"
                          ? projectionConfigTurkey
                          : projectionConfigWorld
                      }
                    >
                      <g ref={gRef}>
                        {mapData && (
                          <Geographies geography={mapData}>
                            {({ geographies }) =>
                              geographies.map((geo) => {
                                const name =
                                  mode === "turkiye"
                                    ? geo.properties.name
                                    : geo.properties.name ||
                                      geo.properties.admin ||
                                      geo.properties.country;

                                // İzin sayısı burada undefined olabilir, ona göre tooltip göster
                                const izinSayisi =
                                  mode === "turkiye"
                                    ? izinVerileriTurkiye[name]
                                    : izinVerileriDunya[name];

                                const isHovered = hoveredFeatureName === name;

                                return (
                                  <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    onMouseEnter={() => {
                                      setHoveredFeatureName(name);
                                      if (izinSayisi !== undefined) {
                                        setTooltip(
                                          `${name}\nBaşvuru Sayısı: ${izinSayisi.toLocaleString(
                                            "tr-TR"
                                          )}`
                                        );
                                      } else {
                                        setTooltip(`${name} - Veri bulunamadı`);
                                      }
                                    }}
                                    onMouseMove={(event) => {
                                      setTooltipPosition({
                                        x: event.clientX,
                                        y: event.clientY,
                                      });
                                    }}
                                    onMouseLeave={() => {
                                      setHoveredFeatureName(null);
                                      setTooltip("");
                                      setTooltipPosition(null);
                                    }}
                                    style={{
                                      default: {
                                        fill: isHovered ? "#FF6347" : "#EEE",
                                        stroke: "#555",
                                        strokeWidth: 0.5,
                                        outline: "none",
                                      },
                                      hover: {
                                        fill: "#FF6347",
                                        stroke: "#000",
                                        strokeWidth: 1,
                                        outline: "none",
                                      },
                                      pressed: {
                                        fill: "#E5533D",
                                        stroke: "#000",
                                        strokeWidth: 1,
                                        outline: "none",
                                      },
                                    }}
                                  />
                                );
                              })
                            }
                          </Geographies>
                        )}
                      </g>
                    </ComposableMap>

                    {tooltip && tooltipPosition && (
                      <div
                        style={{
                          position: "fixed",
                          top: tooltipPosition.y + 10,
                          left: tooltipPosition.x + 10,
                          background: "rgba(255,255,255,0.9)",
                          padding: "8px 12px",
                          border: "1px solid #000",
                          borderRadius: "4px",
                          fontSize: "14px",
                          whiteSpace: "pre-line",
                          pointerEvents: "none",
                          zIndex: 1000,
                          boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
                        }}
                      >
                        {tooltip}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Harita;

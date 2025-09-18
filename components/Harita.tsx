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
  /* ...senin verilerin... */
};

const izinVerileriDunya: Record<string, number> = {
  /* ...senin verilerin... */
};

const Harita = () => {
  const [mode, setMode] = useState<"turkiye" | "dunya">("turkiye");
  const [mapData, setMapData] = useState<any>(undefined);
  const [tooltip, setTooltip] = useState("");
  const [tooltipPosition, setTooltipPosition] = useState<{ x: number; y: number; } | null>(null);
  const [hoveredFeatureName, setHoveredFeatureName] = useState<string | null>(null);

  // Zoom için refs
  // Tipi SVGSVGElement|null tutuyorum, ama JSX'de 'ref' eklerken cast yapacağız.
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
    // svgRef.current burada ya null ya da gerçek <svg>
    if (!svgRef.current || !gRef.current) return;

    // d3 select için herhangi bir tip problemi olmasın diye 'as any'
    const svg = select(svgRef.current as any);
    const g = select(gRef.current as any);

    const zoomBehavior = zoom()
      .scaleExtent([1, 8])
      .on("zoom", (event: any) => {
        g.attr("transform", event.transform.toString());
      });

    // 'svg' DOM elementine zoom behavior'u uygula
    (svg as any).call(zoomBehavior);

    return () => {
      // cleanup
      try {
        (svg as any).on(".zoom", null);
      } catch (e) {
        /* ignore */
      }
    };
  }, [mapData, mode]);

  return (
    <div id="harita" className="w-full bg-white">
      <div className="grid grid-cols-1 gap-1">
        <Card className="col-span-1 h-[400px] xl:h-[500px] gap-2 pb-0">
          <CardHeader>
            <CardTitle>Verilen İzinler Ve Başvuru Haritası</CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent className="pl-2 pb-0">
            <div className="flex-1 overflow-hidden ">
              <div className="max-w-4xl xl:max-w-7xl mx-auto px-3 ">
                <div className="rounded-lg bg-background max-h-[300px] xl:max-h-[400px] relative">
                  <button
                    className="absolute cursor-pointer top-4 right-4 z-20 px-4 py-2 text-blue-500 rounded hover:text-blue-900"
                    onClick={() =>
                      setMode((prev) => (prev === "turkiye" ? "dunya" : "turkiye"))
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
                    {/* Burada ref tip uyuşmazlığı olduğu için cast uyguluyoruz */}
                    <ComposableMap
                      /* ref tipini TypeScript'e zorlayarak veriyoruz */
                      // @ts-expect-error
                      ref={svgRef as unknown as React.Ref<SVGSVGElement>}
                      height={320}
                      projection="geoMercator"
                      projectionConfig={
                        mode === "turkiye"
                          ? projectionConfigTurkey
                          : projectionConfigWorld
                      }
                    >
                      {/* gRef doğrudan SVG <g> elementine bağlanır */}
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

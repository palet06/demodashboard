// components/HaritaMinimal.tsx
"use client";

import React, { useState, useEffect } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

const Harita = () => {
  const [tooltip, setTooltip] = useState("");

  return (
    <div style={{ width: "100%", height: "500px", position: "relative" }}>
      <ComposableMap projectionConfig={{ scale: 120 }}>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                onMouseEnter={() => {
                  setTooltip(geo.properties.NAME || "");
                }}
                onMouseLeave={() => {
                  setTooltip("");
                }}
                style={{
                  default: { fill: "#EEE", outline: "none" },
                  hover: { fill: "#F00", outline: "none" },
                }}
              />
            ))
          }
        </Geographies>
      </ComposableMap>
      {tooltip && (
        <div style={{
          position: "absolute",
          top: 10, left: 10, background: "white", padding: "4px", border: "1px solid #000"
        }}>
          {tooltip}
        </div>
      )}
    </div>
  );
};

export default Harita;

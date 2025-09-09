import Duyurular from "@/components/duyurular";
import MinicikKartlar from "@/components/minicik-kart";

import React from "react";

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <div>
    <h1 className="w-full text-center text-3xl font-bold">

        Uzman Dashboard - V1
    </h1>
        </div>
        <div className="gridgap-4 lg:grid-cols-4">
          <MinicikKartlar />
        </div>
        <div className="aspect-video rounded-xl">
          <Duyurular />
        </div>
        <div className="bg-muted/50 aspect-video rounded-xl" />
        <div className="bg-muted/50 aspect-video rounded-xl" />
      </div>
      <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
    </>
  );
};

export default HomePage;

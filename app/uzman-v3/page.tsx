import Kutucuklar from "@/components/kutucuklar";

import OzetBilgileriParent from "@/components/ozet-bilgileri-parent";

import React from "react";

const page = () => {
  return (
    <div id="uzman-v3" className="flex min-h-screen flex-col">
      <main className="flex-1 space-y-6 p-1  bg-gray-50 ">
        
        <Kutucuklar />
        <OzetBilgileriParent />
      </main>
    </div>
  );
};

export default page;

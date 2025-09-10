import React from 'react'
import { Card } from "@/components/ui/card";
import { AlertTriangle, Plus } from "lucide-react";

const MinicikKartV2 = () => {
  return (
  
          <div className="mb-8">
            

            {/* Quick Action Cards */}
            <div className="grid grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
              <Card className="p-6 hover:shadow-md transition-shadow cursor-pointer border-gray-200">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <h1 className="w-6 h-6 text-green-600 font-bold flex items-center justify-center" >190</h1>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">İş Listesinde Bekleyen</h3>
                   
                  </div>
                </div>
              </Card>
              <Card className="p-6 hover:shadow-md transition-shadow cursor-pointer border-gray-200">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <h1 className="w-6 h-6 text-indigo-600 font-bold flex items-center justify-center" >3</h1>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">GİGM Güncelleme Bekleyen</h3>
                    
                  </div>
                </div>
              </Card>
              <Card className="p-6 hover:shadow-md transition-shadow cursor-pointer border-gray-200">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                    <h1 className="w-6 h-6 text-amber-600 font-bold flex items-center justify-center" >86</h1>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Güncelleme Bekleyen Başvurular</h3>
                    
                  </div>
                </div>
              </Card>
              <Card className="p-6 hover:shadow-md transition-shadow cursor-pointer border-gray-200">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center">
                    <h1 className="w-6 h-6 text-sky-600 font-bold flex items-center justify-center" >4</h1>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Güncelleme Gelen Başvurular</h3>
                    
                  </div>
                </div>
              </Card>
              <Card className="p-6 hover:shadow-md transition-shadow cursor-pointer border-gray-200">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-violet-100 rounded-lg flex items-center justify-center">
                    <h1 className="w-6 h-6 text-violet-600 font-bold flex items-center justify-center" >5</h1>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Yurt Dışı Harç Bekleyen</h3>
                    
                  </div>
                </div>
              </Card>
              <Card className="p-6 hover:shadow-md transition-shadow cursor-pointer border-gray-200">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center">
                    <h1 className="w-6 h-6 text-rose-600 font-bold flex items-center justify-center" >7</h1>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Yasal Süresi Geçen Başvurular</h3>
                    
                  </div>
                </div>
              </Card>
            
             

              
            </div>
          </div>
  )
}

export default MinicikKartV2
"use client"

import {  Folder, Recycle, ClockAlert, ClockArrowDown, Maximize2, Hourglass, RefreshCcwDot } from "lucide-react"

import { Card, CardContent,CardHeader, CardTitle } from "@/components/ui/card"






export default function MinicikKartlar() {
  

  return (
  
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              <Card className="flex flex-col justify-between bg-gradient-to-r from-indigo-500 to-blue-500">
                <CardHeader className="flex flex-col items-center justify-between space-y-0 pb-2">
                    <Folder className="text-amber-300 size-10" />
                  <CardTitle className=" font-medium text-center">İş Listesinde Bekleyen Başvurular</CardTitle>
                  
                </CardHeader>
                <CardContent>

                  <div className="text-2xl font-semibold text-center text-white">190</div>
                  
                </CardContent>
              </Card>
              <Card className="flex flex-col justify-between bg-gradient-to-r from-emerald-400 to-cyan-400">
                <CardHeader className="flex flex-col items-center justify-between space-y-0 pb-2 w-full">
                    <RefreshCcwDot className="text-amber-600 size-10" />
                  <CardTitle className=" font-medium text-center w-full whitespace-nowrap">G.İ. Başkanlığı Güncelleme Bekleyen </CardTitle>
                  
                </CardHeader>
                <CardContent>

                  <div className="text-2xl font-semibold text-center text-white">3</div>
                  
                </CardContent>
              </Card>
              <Card className="flex flex-col justify-between bg-gradient-to-r from-pink-500 to-rose-500">
                <CardHeader className="flex flex-col items-center justify-between space-y-0 pb-2">
                    <ClockAlert className="text-blue-500 size-10" />
                  <CardTitle className=" font-medium text-center w-full whitespace-nowrap">Güncelleme Bekleyen Başvuru Sayısı</CardTitle>
                  
                </CardHeader>
                <CardContent>

                  <div className="text-2xl font-semibold text-center text-white">86</div>
                  
                </CardContent>
              </Card>
              <Card className="flex flex-col justify-between bg-gradient-to-r from-fuchsia-600 to-pink-600">
                <CardHeader className="flex flex-col items-center justify-between space-y-0 pb-2">
                    <ClockArrowDown className="text-fuchsia-500 size-10" />
                  <CardTitle className=" font-medium text-center">Güncelleme Gelen Başvuru Sayısı</CardTitle>
                  
                </CardHeader>
                <CardContent>

                  <div className="text-2xl font-semibold text-center text-white">4</div>
                  
                </CardContent>
              </Card>
              <Card className="flex flex-col justify-between bg-gradient-to-r from-blue-800 to-indigo-900">
                <CardHeader className="flex flex-col items-center justify-between space-y-0 pb-2">
                    <Maximize2 className="text-cyan-500 size-10" />
                  <CardTitle className=" font-medium text-center">Yurt Dışı Harç Bekleyen</CardTitle>
                  
                </CardHeader>
                <CardContent>

                  <div className="text-2xl font-semibold text-center text-white">5</div>
                  
                </CardContent>
              </Card>
              <Card className="flex flex-col justify-between bg-gradient-to-r from-slate-300 to-slate-500">
                <CardHeader className="flex flex-col items-center justify-between space-y-0 pb-2">
                    <Hourglass className="text-red-500 size-10" />
                  <CardTitle className=" font-medium text-center">Yasal Süresi Geçen Başvurular</CardTitle>
                  
                </CardHeader>
                <CardContent>

                  <div className="text-2xl font-semibold text-center text-white">5</div>
                  
                </CardContent>
              </Card>
              {/* Burası örnek olarak kalsın diğer versionlarda kullanırsn  <Card className="flex flex-col justify-between">
                <CardHeader className="flex flex-col items-center justify-between space-y-0 pb-2">
                    <Hourglass className="text-red-500 size-10" />
                  <CardTitle className="text-lg font-medium text-center">Yasal Süresi Geçen Başvurular</CardTitle>
                  
                </CardHeader>
                <CardContent>

                  <div className="text-2xl font-semibold text-center text-slate-500">5</div>
                  
                </CardContent>
              </Card> */}

            
            </div>
    
  )
}

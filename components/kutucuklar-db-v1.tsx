import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {  Users,  Clock,  WatchIcon, Recycle, DollarSign, X } from "lucide-react"

export default function KutucuklarDbV1() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-6">
      <Card className="cursor-pointer hover:shadow-xl transition-shadow ">
        <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Onay Bekleyen Başvuru Sayısı</CardTitle>
          <WatchIcon className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent className="flex flex-col justify-end items-center h-full gap-0">
          
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <h1 className="w-6 h-6 text-green-600 font-bold flex items-center justify-center">
                88
                </h1>
            </div>
          
          
        </CardContent>
      </Card>
      <Card className="cursor-pointer hover:shadow-xl transition-shadow">
        <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Ret Bekleyen Başvuru Sayısı</CardTitle>
          <Recycle className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent className="flex flex-col justify-end items-center h-full">
          <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
              <h1 className="w-6 h-6 text-amber-600 font-bold flex items-center justify-center">
                290
              </h1>
            </div>
        </CardContent>
      </Card>
      <Card className="cursor-pointer hover:shadow-xl transition-shadow">
        <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Harçtan Ret Bekleyen Başvuru Sayısı</CardTitle>
          <DollarSign className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent className="flex flex-col justify-end items-center h-full">
         <div className="w-12 h-12 bg-violet-100 rounded-lg flex items-center justify-center">
              <h1 className="w-6 h-6 text-violet-600 font-bold flex items-center justify-center">
                32
              </h1>
            </div>
        </CardContent>
      </Card>
      <Card className="cursor-pointer hover:shadow-xl transition-shadow">
        <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">E-imza Ret Listesi</CardTitle>
          <X className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent className="flex flex-col justify-end items-center h-full">
          <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center">
              <h1 className="w-6 h-6 text-rose-600 font-bold flex items-center justify-center">
                51
              </h1>
            </div>
        </CardContent>
      </Card>
      <Card className="cursor-pointer hover:shadow-xl transition-shadow">
        <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Başkanlıkta İşlem Görmeyen Dosya Sayısı</CardTitle>
          <X className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent className="flex flex-col justify-end items-center h-full">
          <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
              <h1 className="w-6 h-6 text-slate-600 font-bold flex items-center justify-center">
                1151
              </h1>
            </div>
        </CardContent>
      </Card>
      <Card className="cursor-pointer hover:shadow-xl transition-shadow">
        <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Uzmandaki İşlem Görmeyen Dosya Sayısı</CardTitle>
          <X className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent className="flex flex-col justify-end items-center h-full">
          <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
              <h1 className="w-6 h-6 text-gray-600 font-bold flex items-center justify-center">
                710
              </h1>
            </div>
        </CardContent>
      </Card>
     
    </div>
  )
}

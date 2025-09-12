import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {  Users,  Clock,  WatchIcon } from "lucide-react"

export default function Kutucuklar() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card className="cursor-pointer hover:shadow-xl transition-shadow">
        <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">İş Listesinde Bekleyen</CardTitle>
          <WatchIcon className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent className="flex flex-col justify-end items-center h-full">
          
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <h1 className="w-6 h-6 text-green-600 font-bold flex items-center justify-center">
                190
                </h1>
            </div>
          
          
        </CardContent>
      </Card>
      <Card className="cursor-pointer hover:shadow-xl transition-shadow">
        <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Güncelleme Bekleyen Başvurular</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent className="flex flex-col justify-end items-center h-full">
          <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
              <h1 className="w-6 h-6 text-amber-600 font-bold flex items-center justify-center">
                86
              </h1>
            </div>
        </CardContent>
      </Card>
      <Card className="cursor-pointer hover:shadow-xl transition-shadow">
        <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Yurt Dışı Harç Bekleyen</CardTitle>
          <Clock className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent className="flex flex-col justify-end items-center h-full">
         <div className="w-12 h-12 bg-violet-100 rounded-lg flex items-center justify-center">
              <h1 className="w-6 h-6 text-violet-600 font-bold flex items-center justify-center">
                5
              </h1>
            </div>
        </CardContent>
      </Card>
      <Card className="cursor-pointer hover:shadow-xl transition-shadow">
        <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Yasal Süresi Geçen Başvurular</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent className="flex flex-col justify-end items-center h-full">
          <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center">
              <h1 className="w-6 h-6 text-rose-600 font-bold flex items-center justify-center">
                7
              </h1>
            </div>
        </CardContent>
      </Card>
     
    </div>
  )
}

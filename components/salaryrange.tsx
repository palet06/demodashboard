"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from "recharts"

// Mock data for BPO salary ranges in Cagayan de Oro
const entryLevelData = [
  { position: "Customer Service", salary: 18000 },
  { position: "Technical Support", salary: 20000 },
  { position: "Data Entry", salary: 16500 },
  { position: "Sales Representative", salary: 19000 },
  { position: "Back Office", salary: 17500 },
]

const midLevelData = [
  { position: "Team Leader", salary: 32000 },
  { position: "Quality Analyst", salary: 28000 },
  { position: "Subject Matter Expert", salary: 30000 },
  { position: "Technical Specialist", salary: 35000 },
  { position: "Process Trainer", salary: 27000 },
]

const seniorLevelData = [
  { position: "Operations Manager", salary: 65000 },
  { position: "Account Manager", salary: 55000 },
  { position: "IT Manager", salary: 70000 },
  { position: "HR Manager", salary: 60000 },
  { position: "Finance Manager", salary: 62000 },
]

export default function SalaryRangeAnalytics() {
  return (
    <Card className="col-span-1">
      <CardHeader>
        <CardTitle>BPO Salary Ranges (2025)</CardTitle>
        <CardDescription>Monthly salary ranges by position level in Cagayan de Oro BPOs</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="entry">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="entry">Entry Level</TabsTrigger>
            <TabsTrigger value="mid">Mid Level</TabsTrigger>
            <TabsTrigger value="senior">Senior Level</TabsTrigger>
          </TabsList>
          <TabsContent value="entry" className="space-y-4">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={entryLevelData} layout="vertical" margin={{ left: 120 }}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                  <XAxis type="number" />
                  <YAxis dataKey="position" type="category" width={100} />
                  <Bar dataKey="salary" name="Salary (PHP)" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
          <TabsContent value="mid" className="space-y-4">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={midLevelData} layout="vertical" margin={{ left: 120 }}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                  <XAxis type="number" />
                  <YAxis dataKey="position" type="category" width={100} />
                  <Bar dataKey="salary" name="Salary (PHP)" fill="#4f46e5" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
          <TabsContent value="senior" className="space-y-4">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={seniorLevelData} layout="vertical" margin={{ left: 120 }}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                  <XAxis type="number" />
                  <YAxis dataKey="position" type="category" width={100} />
                  <Bar dataKey="salary" name="Salary (PHP)" fill="#10b981" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

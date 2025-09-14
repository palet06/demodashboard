"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Line, LineChart, CartesianGrid, Legend, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Mock data for retention and turnover rates in 2025 (quarterly)
const quarterlyData = [
  { quarter: "Q1 2025", retention: 75.2, turnover: 24.8 },
  { quarter: "Q2 2025", retention: 76.1, turnover: 23.9 },
  { quarter: "Q3 2025", retention: 76.8, turnover: 23.2 },
  { quarter: "Q4 2025", retention: 77.1, turnover: 22.9 },
]

// Mock data for retention and turnover by experience level
const experienceData = [
  { experience: "<1 year", retention: 65.3, turnover: 34.7 },
  { experience: "1-2 years", retention: 72.8, turnover: 27.2 },
  { experience: "2-3 years", retention: 78.5, turnover: 21.5 },
  { experience: "3-5 years", retention: 83.2, turnover: 16.8 },
  { experience: ">5 years", retention: 89.7, turnover: 10.3 },
]

export default function RetentionTurnoverAnalytics() {
  return (
    <Card className="col-span-1">
      <CardHeader>
        <CardTitle>Retention & Turnover Rates (2025)</CardTitle>
        <CardDescription>Employee retention and turnover trends in Cagayan de Oro BPOs</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="quarterly">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="quarterly">Quarterly Trends</TabsTrigger>
            <TabsTrigger value="experience">By Experience</TabsTrigger>
          </TabsList>
          <TabsContent value="quarterly" className="space-y-4">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={quarterlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="quarter" />
                  <YAxis domain={[0, 100]} />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="retention"
                    name="Retention Rate"
                    stroke="#4f46e5"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="turnover"
                    name="Turnover Rate"
                    stroke="#ef4444"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
          <TabsContent value="experience" className="space-y-4">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={experienceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="experience" />
                  <YAxis domain={[0, 100]} />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="retention"
                    name="Retention Rate"
                    stroke="#4f46e5"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="turnover"
                    name="Turnover Rate"
                    stroke="#ef4444"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

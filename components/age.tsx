"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Mock data for age distribution in BPO companies
const ageDistributionData = [
  { ageGroup: "18-22", percentage: 28 },
  { ageGroup: "23-27", percentage: 35 },
  { ageGroup: "28-32", percentage: 22 },
  { ageGroup: "33-37", percentage: 10 },
  { ageGroup: "38+", percentage: 5 },
]

// Mock data for hiring preferences by age
const hiringPreferenceData = [
  { ageGroup: "18-22", preference: "High", score: 85 },
  { ageGroup: "23-27", preference: "Very High", score: 95 },
  { ageGroup: "28-32", preference: "High", score: 80 },
  { ageGroup: "33-37", preference: "Medium", score: 65 },
  { ageGroup: "38-45", preference: "Low", score: 45 },
  { ageGroup: "46+", preference: "Very Low", score: 25 },
]

// Mock data for age qualification by role type
const roleQualificationData = [
  { role: "Customer Service", minAge: 18, maxAge: 45, preferredMin: 20, preferredMax: 35 },
  { role: "Technical Support", minAge: 18, maxAge: 50, preferredMin: 22, preferredMax: 40 },
  { role: "Sales", minAge: 20, maxAge: 45, preferredMin: 23, preferredMax: 38 },
  { role: "Back Office", minAge: 18, maxAge: 55, preferredMin: 21, preferredMax: 45 },
  { role: "Management", minAge: 25, maxAge: 55, preferredMin: 28, preferredMax: 45 },
]

export default function AgeRangeAnalytics() {
  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>Age Range Qualification for BPO Roles (2025)</CardTitle>
        <CardDescription>Age distribution and hiring preferences in Cagayan de Oro BPO companies</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="distribution">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="distribution">Current Distribution</TabsTrigger>
            <TabsTrigger value="preference">Hiring Preference</TabsTrigger>
            <TabsTrigger value="qualification">Role Qualification</TabsTrigger>
          </TabsList>

          <TabsContent value="distribution" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Age Distribution in BPO Workforce</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Current age distribution of employees in Cagayan de Oro BPO companies
                </p>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={ageDistributionData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="ageGroup" />
                      <YAxis tickFormatter={(value) => `${value}%`} />
                      <Bar dataKey="percentage" name="Percentage" fill="#8884d8" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Key Findings</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="h-2 w-2 rounded-full bg-[#0088FE] mt-1.5 mr-2"></span>
                    <span>
                      The 18-22 age group represents 28% of the BPO workforce, primarily in entry-level positions.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-2 w-2 rounded-full bg-[#00C49F] mt-1.5 mr-2"></span>
                    <span>
                      The largest segment is the 23-27 age group at 35%, dominating both entry and mid-level positions.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-2 w-2 rounded-full bg-[#FFBB28] mt-1.5 mr-2"></span>
                    <span>The 28-32 age group (22%) typically holds team lead and supervisory roles.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-2 w-2 rounded-full bg-[#FF8042] mt-1.5 mr-2"></span>
                    <span>Only 15% of the workforce is above 33 years old, primarily in management positions.</span>
                  </li>
                  <li className="flex items-start mt-4">
                    <span>
                      The average age of BPO employees in Cagayan de Oro is 26.3 years, slightly lower than the national
                      average of 27.8 years.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="preference" className="space-y-4">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={hiringPreferenceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="ageGroup" />
                  <YAxis domain={[0, 100]} />
                  <Bar dataKey="score" name="Hiring Preference Score" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-muted/50 p-4 rounded-lg">
              <h3 className="text-lg font-medium mb-2">BPO Hiring Age Preferences</h3>
              <p className="text-sm mb-4">
                Most BPO companies in Cagayan de Oro have specific age preferences for different roles, though the legal
                hiring age range is 18-65 years.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm font-medium mb-2">Preferred Age Ranges:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Customer Service: 20-35 years</li>
                    <li>• Technical Support: 22-40 years</li>
                    <li>• Sales Positions: 23-38 years</li>
                    <li>• Back Office: 21-45 years</li>
                    <li>• Management: 28-45 years</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-2">Key Insights:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Peak hiring preference is for the 23-27 age group</li>
                    <li>• Fresh graduates (21-23) are highly sought after</li>
                    <li>• Candidates over 40 face more challenges in entry-level positions</li>
                    <li>• Management roles favor candidates with 5+ years experience (typically 28-45)</li>
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="qualification" className="space-y-4">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="border px-4 py-2 text-left">Role Type</th>
                    <th className="border px-4 py-2 text-left">Legal Age Range</th>
                    <th className="border px-4 py-2 text-left">Preferred Age Range</th>
                    <th className="border px-4 py-2 text-left">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {roleQualificationData.map((role, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-background" : "bg-muted/20"}>
                      <td className="border px-4 py-2 font-medium">{role.role}</td>
                      <td className="border px-4 py-2">
                        {role.minAge}-{role.maxAge} years
                      </td>
                      <td className="border px-4 py-2">
                        {role.preferredMin}-{role.preferredMax} years
                      </td>
                      <td className="border px-4 py-2 text-sm">
                        {role.role === "Customer Service" &&
                          "High demand for younger candidates with good communication skills"}
                        {role.role === "Technical Support" &&
                          "Wider age range accepted due to technical skill requirements"}
                        {role.role === "Sales" && "Preference for candidates with some work experience"}
                        {role.role === "Back Office" && "Most flexible age requirements among all roles"}
                        {role.role === "Management" &&
                          "Experience prioritized over age, but typically requires 5+ years in the industry"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-muted/50 p-4 rounded-lg mt-4">
              <h3 className="text-sm font-medium">Age Qualification Trends (2025)</h3>
              <p className="text-xs text-muted-foreground mt-1">
                Recent trends show BPO companies in Cagayan de Oro are gradually expanding their age range preferences,
                particularly for specialized roles requiring specific skills or experience. Companies are increasingly
                implementing age-diverse hiring practices, though the core workforce remains predominantly in the 20-35
                age range.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

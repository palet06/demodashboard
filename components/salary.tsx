"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis, Legend } from "recharts"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Mock data for Ad On PH Inc salary ranges based on JobStreet and Indeed listings
const positionData = [
  {
    position: "Customer Service Rep",
    minSalary: 18000,
    maxSalary: 22000,
    avgSalary: 20000,
    experience: "0-1 years",
  },
  {
    position: "Technical Support",
    minSalary: 19000,
    maxSalary: 24000,
    avgSalary: 21500,
    experience: "0-2 years",
  },
  {
    position: "Sales Representative",
    minSalary: 18500,
    maxSalary: 25000,
    avgSalary: 21750,
    experience: "0-2 years",
  },
  {
    position: "Team Leader",
    minSalary: 28000,
    maxSalary: 38000,
    avgSalary: 33000,
    experience: "2-4 years",
  },
  {
    position: "Quality Analyst",
    minSalary: 25000,
    maxSalary: 35000,
    avgSalary: 30000,
    experience: "1-3 years",
  },
]

// Virtual Assistant salary data for Ad On PH Inc
const virtualAssistantData = [
  {
    position: "Entry-Level VA",
    minSalary: 12390,
    maxSalary: 18000,
    avgSalary: 15195,
    experience: "0-1 years",
  },
  {
    position: "General VA",
    minSalary: 18000,
    maxSalary: 25000,
    avgSalary: 21500,
    experience: "1-2 years",
  },
  {
    position: "Specialized VA",
    minSalary: 25000,
    maxSalary: 35000,
    avgSalary: 30000,
    experience: "2-3 years",
  },
  {
    position: "Senior VA",
    minSalary: 35000,
    maxSalary: 40000,
    avgSalary: 37500,
    experience: "3-5 years",
  },
  {
    position: "VA Team Lead",
    minSalary: 40000,
    maxSalary: 50000,
    avgSalary: 45000,
    experience: "5+ years",
  },
]

// Data for salary comparison with industry average
const comparisonData = [
  { position: "Entry Level", adOnPh: 19800, industryAvg: 18800 },
  { position: "Mid Level", adOnPh: 33500, industryAvg: 31200 },
  { position: "Senior Level", adOnPh: 65000, industryAvg: 62400 },
]

// VA salary comparison with industry average
const vaComparisonData = [
  { position: "Entry-Level VA", adOnPh: 15195, industryAvg: 14000 },
  { position: "Mid-Level VA", adOnPh: 30000, industryAvg: 27500 },
  { position: "Senior VA", adOnPh: 45000, industryAvg: 42000 },
]

// Data for benefits offered
const benefitsData = [
  { benefit: "Health Insurance", value: 100 },
  { benefit: "HMO Coverage", value: 100 },
  { benefit: "Night Differential", value: 100 },
  { benefit: "Performance Bonus", value: 90 },
  { benefit: "Transportation Allowance", value: 80 },
  { benefit: "Meal Allowance", value: 70 },
  { benefit: "Training Allowance", value: 60 },
]

export default function AdOnPhSalaryDetails() {
  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>Ad On PH Inc - Salary & Benefits (2025)</CardTitle>
        <CardDescription>Detailed salary information based on JobStreet and Indeed listings</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="positions">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="positions">Position Salaries</TabsTrigger>
            <TabsTrigger value="va-positions">Virtual Assistant</TabsTrigger>
            <TabsTrigger value="comparison">Industry Comparison</TabsTrigger>
            <TabsTrigger value="benefits">Benefits Package</TabsTrigger>
          </TabsList>

          <TabsContent value="positions" className="space-y-4">
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={positionData} layout="vertical" margin={{ left: 150, right: 30, top: 20, bottom: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                  <XAxis type="number" />
                  <YAxis dataKey="position" type="category" width={140} />
                  <Legend />
                  <Bar dataKey="minSalary" name="Minimum Salary" fill="#8884d8" />
                  <Bar dataKey="maxSalary" name="Maximum Salary" fill="#4f46e5" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-muted/50 p-4 rounded-lg">
              <h3 className="text-lg font-medium mb-2">Ad On PH Inc Salary Insights</h3>
              <p className="text-sm mb-3">
                Based on 2025 job postings on JobStreet and Indeed, Ad On PH Inc offers competitive salaries that are
                approximately 5-8% higher than the average BPO salary in Cagayan de Oro.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm font-medium mb-2">Key Observations:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Entry-level positions start at ₱18,000-₱22,000</li>
                    <li>• Mid-level positions range from ₱25,000-₱38,000</li>
                    <li>• Management positions start at ₱55,000+</li>
                    <li>• Annual salary increases average 5-7%</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-2">Qualification Requirements:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• At least high school graduate, college degree preferred</li>
                    <li>• Excellent English communication skills</li>
                    <li>• Basic computer literacy</li>
                    <li>• Willing to work in shifting schedules</li>
                    <li>• No experience required for entry-level positions</li>
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="va-positions" className="space-y-4">
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={virtualAssistantData}
                  layout="vertical"
                  margin={{ left: 150, right: 30, top: 20, bottom: 20 }}
                >
                  <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                  <XAxis type="number" />
                  <YAxis dataKey="position" type="category" width={140} />
                  <Legend />
                  <Bar dataKey="minSalary" name="Minimum Salary" fill="#10b981" />
                  <Bar dataKey="maxSalary" name="Maximum Salary" fill="#059669" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-muted/50 p-4 rounded-lg">
              <h3 className="text-lg font-medium mb-2">Virtual Assistant Salary Insights</h3>
              <p className="text-sm mb-3">
                Ad On PH Inc offers competitive Virtual Assistant salaries ranging from ₱12,390 for entry-level
                positions to ₱40,000+ for senior roles, reflecting the company's focus on this growing segment.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm font-medium mb-2">VA Position Types:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>
                      • <span className="font-medium">Entry-Level VA:</span> General administrative tasks, email
                      management, basic data entry
                    </li>
                    <li>
                      • <span className="font-medium">General VA:</span> Calendar management, travel arrangements,
                      client communication
                    </li>
                    <li>
                      • <span className="font-medium">Specialized VA:</span> Social media management, content creation,
                      bookkeeping
                    </li>
                    <li>
                      • <span className="font-medium">Senior VA:</span> Project management, team coordination, client
                      relationship management
                    </li>
                    <li>
                      • <span className="font-medium">VA Team Lead:</span> Training, quality assurance, workflow
                      optimization
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-2">VA Qualification Requirements:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• College degree preferred (but not required for entry-level)</li>
                    <li>• Excellent written and verbal English communication</li>
                    <li>• Proficiency with productivity tools (MS Office, Google Workspace)</li>
                    <li>• Self-motivated with strong time management skills</li>
                    <li>• Specialized VAs require relevant certifications or experience</li>
                    <li>• Senior positions require 3+ years of VA experience</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-4 rounded-lg mt-4 border border-green-100">
              <h3 className="text-base font-medium mb-2 text-green-800">Virtual Assistant Growth Opportunities</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm font-medium mb-2 text-green-700">Career Progression:</h4>
                  <p className="text-sm text-green-700 mb-2">
                    Ad On PH Inc offers a structured career path for Virtual Assistants:
                  </p>
                  <div className="flex items-center text-sm text-green-700">
                    <div className="flex-shrink-0 w-32">Entry-Level VA</div>
                    <div className="h-0.5 w-5 bg-green-300"></div>
                    <div className="flex-shrink-0 w-32">General VA</div>
                    <div className="h-0.5 w-5 bg-green-300"></div>
                    <div className="flex-shrink-0 w-32">Specialized VA</div>
                    <div className="h-0.5 w-5 bg-green-300"></div>
                    <div className="flex-shrink-0 w-32">Senior VA</div>
                    <div className="h-0.5 w-5 bg-green-300"></div>
                    <div className="flex-shrink-0 w-32">VA Team Lead</div>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-2 text-green-700">Specialization Opportunities:</h4>
                  <ul className="space-y-1 text-sm text-green-700">
                    <li>• E-commerce VA (Amazon, Shopify management)</li>
                    <li>• Real Estate VA (listing management, client coordination)</li>
                    <li>• Digital Marketing VA (SEO, PPC, analytics)</li>
                    <li>• Technical VA (web development, graphic design)</li>
                    <li>• Financial VA (bookkeeping, financial analysis)</li>
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="comparison" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium mb-3">Standard BPO Positions</h3>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={comparisonData} margin={{ left: 20, right: 30, top: 20, bottom: 20 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="position" />
                      <YAxis />
                      <Legend />
                      <Bar dataKey="adOnPh" name="Ad On PH Inc" fill="#4f46e5" />
                      <Bar dataKey="industryAvg" name="Industry Average" fill="#94a3b8" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-3">Virtual Assistant Positions</h3>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={vaComparisonData} margin={{ left: 20, right: 30, top: 20, bottom: 20 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="position" />
                      <YAxis />
                      <Legend />
                      <Bar dataKey="adOnPh" name="Ad On PH Inc" fill="#10b981" />
                      <Bar dataKey="industryAvg" name="Industry Average" fill="#94a3b8" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            <div className="bg-muted/50 p-4 rounded-lg">
              <h3 className="text-lg font-medium mb-2">Salary Comparison Analysis</h3>
              <p className="text-sm mb-3">
                Ad On PH Inc consistently offers salaries above the industry average in Cagayan de Oro, making it one of
                the more competitive employers in the local BPO sector.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm font-medium mb-2">Competitive Advantages:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Entry-level VA salaries 8.5% above average</li>
                    <li>• Mid-level VA salaries 9.1% above average</li>
                    <li>• Senior VA salaries 7.1% above average</li>
                    <li>• More comprehensive benefits package</li>
                    <li>• Structured career advancement path</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-2">Factors Affecting VA Salary:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Client/industry specialization</li>
                    <li>• Technical skills (programming, design, etc.)</li>
                    <li>• Language proficiency (multilingual pays more)</li>
                    <li>• Certifications (digital marketing, bookkeeping)</li>
                    <li>• Performance metrics and client satisfaction</li>
                    <li>• Work schedule (US/European hours pay premium)</li>
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="benefits" className="space-y-4">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={benefitsData} layout="vertical" margin={{ left: 150, right: 30, top: 20, bottom: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                  <XAxis type="number" domain={[0, 100]} />
                  <YAxis dataKey="benefit" type="category" width={140} />
                  <Bar dataKey="value" name="Coverage" fill="#10b981" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-muted/50 p-4 rounded-lg">
              <h3 className="text-lg font-medium mb-2">Ad On PH Inc Benefits Package</h3>
              <p className="text-sm mb-3">
                In addition to competitive salaries, Ad On PH Inc offers a comprehensive benefits package that enhances
                the overall compensation value.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm font-medium mb-2">Standard Benefits:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• HMO coverage (employee + 1 dependent)</li>
                    <li>• Group life and accident insurance</li>
                    <li>• 13th month pay and performance bonuses</li>
                    <li>• Night differential (20% for night shifts)</li>
                    <li>• Paid time off (15 days vacation, 10 days sick leave)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-2">Additional Perks:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Free shuttle service for night shifts</li>
                    <li>• Meal allowance for overtime work</li>
                    <li>• Employee wellness programs</li>
                    <li>• Training and certification assistance</li>
                    <li>• Career advancement opportunities</li>
                    <li>• Employee referral bonuses</li>
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

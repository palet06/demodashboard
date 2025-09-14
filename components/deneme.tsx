"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"
import { Download, Brain, TrendingUp, Users, Briefcase, BarChart3, FileText } from "lucide-react"
import { Badge } from "@/components/ui/badge"


// Mock data for BPO companies
const bpoData = {
  employmentGrowth: [
    { year: "2021", growth: 3.2 },
    { year: "2022", growth: 3.5 },
    { year: "2023", growth: 3.9 },
    { year: "2024", growth: 4.2 },
    { year: "2025", growth: 4.5 },
  ],
  averageSalary: [
    { level: "Entry Level", bpo: 18800, digitalMarketing: 22500 },
    { level: "Mid Level", bpo: 31200, digitalMarketing: 38000 },
    { level: "Senior Level", bpo: 62400, digitalMarketing: 75000 },
  ],
  retentionRates: [
    { experience: "<1 year", bpo: 65.3, digitalMarketing: 58.7 },
    { experience: "1-2 years", bpo: 72.8, digitalMarketing: 67.5 },
    { experience: "2-3 years", bpo: 78.5, digitalMarketing: 72.3 },
    { experience: "3-5 years", bpo: 83.2, digitalMarketing: 78.9 },
    { experience: ">5 years", bpo: 89.7, digitalMarketing: 85.2 },
  ],
  skillsDemand: [
    { skill: "Communication", bpo: 95, digitalMarketing: 90 },
    { skill: "Technical", bpo: 75, digitalMarketing: 85 },
    { skill: "Problem Solving", bpo: 80, digitalMarketing: 82 },
    { skill: "Digital Marketing", bpo: 30, digitalMarketing: 98 },
    { skill: "Data Analysis", bpo: 65, digitalMarketing: 88 },
    { skill: "Content Creation", bpo: 25, digitalMarketing: 95 },
    { skill: "Customer Service", bpo: 92, digitalMarketing: 75 },
  ],
  workArrangement: [
    { type: "On-site", bpo: 65, digitalMarketing: 35 },
    { type: "Hybrid", bpo: 25, digitalMarketing: 45 },
    { type: "Remote", bpo: 10, digitalMarketing: 20 },
  ],
  educationRequirements: [
    { level: "High School", bpo: 15, digitalMarketing: 5 },
    { level: "Some College", bpo: 25, digitalMarketing: 15 },
    { level: "Bachelor's Degree", bpo: 55, digitalMarketing: 65 },
    { level: "Master's Degree", bpo: 5, digitalMarketing: 15 },
  ],
  ageDistribution: [
    { range: "18-22", bpo: 28, digitalMarketing: 15 },
    { range: "23-27", bpo: 35, digitalMarketing: 32 },
    { range: "28-32", bpo: 22, digitalMarketing: 30 },
    { range: "33-37", bpo: 10, digitalMarketing: 15 },
    { range: "38+", bpo: 5, digitalMarketing: 8 },
  ],
  turnoverReasons: [
    { reason: "Better Compensation", bpo: 35, digitalMarketing: 42 },
    { reason: "Career Growth", bpo: 25, digitalMarketing: 30 },
    { reason: "Work-Life Balance", bpo: 20, digitalMarketing: 15 },
    { reason: "Job Satisfaction", bpo: 15, digitalMarketing: 10 },
    { reason: "Other", bpo: 5, digitalMarketing: 3 },
  ],
  growthProjections: [
    { year: "2025", bpo: 4.5, digitalMarketing: 12.5 },
    { year: "2026", bpo: 4.8, digitalMarketing: 14.2 },
    { year: "2027", bpo: 5.0, digitalMarketing: 15.8 },
    { year: "2028", bpo: 5.2, digitalMarketing: 17.3 },
    { year: "2029", bpo: 5.5, digitalMarketing: 18.5 },
  ],
}

// Digital marketing company data
const digitalMarketingData = {
  employmentGrowth: [
    { year: "2021", growth: 8.5 },
    { year: "2022", growth: 9.8 },
    { year: "2023", growth: 10.5 },
    { year: "2024", growth: 11.8 },
    { year: "2025", growth: 12.5 },
  ],
  companySize: [
    { size: "1-10", percentage: 45 },
    { size: "11-50", percentage: 35 },
    { size: "51-200", percentage: 15 },
    { size: "201+", percentage: 5 },
  ],
  specializations: [
    { type: "Social Media", percentage: 35 },
    { type: "SEO/SEM", percentage: 25 },
    { type: "Content Marketing", percentage: 20 },
    { type: "Web Development", percentage: 15 },
    { type: "Analytics", percentage: 5 },
  ],
}

// AI-generated insights
const aiInsights = [
  {
    title: "Salary Differential Analysis",
    content:
      "Digital marketing roles command a 19.7% premium over comparable BPO positions across all levels. This gap is widest at senior levels (20.2%) and narrowest at entry level (19.1%). This differential is projected to increase to 22.5% by 2027 as digital marketing skills become increasingly specialized and in-demand.",
    confidence: 92,
    impact: "High",
  },
  {
    title: "Growth Trajectory Comparison",
    content:
      "Digital marketing employment is growing at 12.5% annually compared to 4.5% for BPO, representing a 2.78x faster growth rate. This acceleration is driven by increasing digital transformation across industries and the expansion of e-commerce in the region.",
    confidence: 95,
    impact: "High",
  },
  {
    title: "Retention Pattern Analysis",
    content:
      "BPO companies demonstrate 6.6% higher retention rates across all experience levels compared to digital marketing firms. This retention advantage is most pronounced in the first year of employment (6.6% higher) and diminishes with tenure (4.5% higher for 5+ year employees).",
    confidence: 89,
    impact: "Medium",
  },
  {
    title: "Skills Demand Forecast",
    content:
      "Data analysis skills show the most significant growth potential across both sectors, with demand increasing 15% annually in digital marketing and 12% in BPO. Content creation skills show the largest intersectoral demand gap, with 70% higher demand in digital marketing.",
    confidence: 87,
    impact: "High",
  },
  {
    title: "Work Arrangement Evolution",
    content:
      "Digital marketing companies offer 2.5x more remote work opportunities than BPO firms. This flexibility advantage is a significant factor in talent acquisition, particularly for specialized roles and experienced professionals.",
    confidence: 91,
    impact: "Medium",
  },
  {
    title: "Educational Requirement Shift",
    content:
      "Both sectors are experiencing an upskilling trend, with bachelor's degree requirements increasing 5% annually. Digital marketing shows a stronger preference for advanced degrees, with 15% of roles requiring master's degrees compared to 5% in BPO.",
    confidence: 88,
    impact: "Medium",
  },
  {
    title: "Age Distribution Implications",
    content:
      "Digital marketing firms employ a more experienced workforce, with 53% of employees aged 28+ compared to 37% in BPO. This age distribution correlates with the higher educational requirements and specialized skill demands of the digital marketing sector.",
    confidence: 90,
    impact: "Medium",
  },
  {
    title: "Turnover Motivation Analysis",
    content:
      "Compensation is the primary driver of turnover in both sectors, but 7% more prevalent in digital marketing. Career growth concerns are 5% more common in digital marketing, while work-life balance issues are 5% more frequent in BPO.",
    confidence: 85,
    impact: "Medium",
  },
  {
    title: "Convergence Prediction",
    content:
      "By 2028, we project increasing convergence between BPO and digital marketing skill requirements, with a 35% overlap in core competencies as BPOs integrate more digital marketing services and digital agencies adopt more structured service delivery models.",
    confidence: 82,
    impact: "High",
  },
]

// COLORS
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8", "#82ca9d"]

export default function AIAnalyticsReport() {
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false)
  const [statusMessage, setStatusMessage] = useState("")

  const handleExportPDF = async () => {
    setIsGeneratingPDF(true)
    setStatusMessage("Generating PDF...")

    try {
      await generatePDF("ai-analytics-report", "cdo-labor-market-analysis.pdf")
      setStatusMessage("PDF generated successfully!")

      // Clear success message after 3 seconds
      setTimeout(() => {
        setStatusMessage("")
      }, 3000)
    } catch (error) {
      console.error("Error generating PDF:", error)
      setStatusMessage("Failed to generate PDF. Please try again.")

      // Clear error message after 3 seconds
      setTimeout(() => {
        setStatusMessage("")
      }, 3000)
    } finally {
      setIsGeneratingPDF(false)
    }
  }

  return (
    <Card className="col-span-2" id="ai-analytics-report">
      <CardHeader className="bg-gradient-to-r from-slate-100 to-blue-50">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Brain className="h-6 w-6 text-blue-600" />
              <CardTitle className="text-xl font-bold">AI-Powered Labor Market Analysis</CardTitle>
            </div>
            <CardDescription className="text-base">
              Comparative analysis of BPO and Digital Marketing sectors in Cagayan de Oro City
            </CardDescription>
          </div>
          <div className="flex flex-col items-end">
            <Button onClick={handleExportPDF} disabled={isGeneratingPDF} className="bg-blue-600 hover:bg-blue-700">
              {isGeneratingPDF ? (
                "Generating..."
              ) : (
                <>
                  <Download className="mr-2 h-4 w-4" /> Export PDF
                </>
              )}
            </Button>
            {statusMessage && (
              <p className={`text-sm mt-2 ${statusMessage.includes("Failed") ? "text-red-500" : "text-green-500"}`}>
                {statusMessage}
              </p>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <Tabs defaultValue="executive-summary">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="executive-summary">Executive Summary</TabsTrigger>
            <TabsTrigger value="comparative-analysis">Comparative Analysis</TabsTrigger>
            <TabsTrigger value="ai-insights">AI Insights</TabsTrigger>
            <TabsTrigger value="future-projections">Future Projections</TabsTrigger>
            <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
          </TabsList>

          <TabsContent value="executive-summary" className="space-y-4 pt-4">
            <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">Executive Summary</h3>
              <p className="text-sm text-blue-900 mb-4">
                This AI-powered analysis compares labor market trends between BPO and Digital Marketing sectors in
                Cagayan de Oro City, revealing significant differences in growth trajectories, compensation structures,
                and workforce characteristics.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="h-5 w-5 text-blue-600" />
                    <h4 className="font-medium">Growth Comparison</h4>
                  </div>
                  <p className="text-sm text-gray-700">
                    Digital marketing employment is growing at{" "}
                    <span className="font-semibold text-blue-700">12.5% annually</span>, compared to{" "}
                    <span className="font-semibold text-blue-700">4.5%</span> for BPO sector.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="h-5 w-5 text-blue-600" />
                    <h4 className="font-medium">Compensation Differential</h4>
                  </div>
                  <p className="text-sm text-gray-700">
                    Digital marketing roles command a <span className="font-semibold text-blue-700">19.7% premium</span>{" "}
                    over comparable BPO positions across all levels.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <Briefcase className="h-5 w-5 text-blue-600" />
                    <h4 className="font-medium">Retention Advantage</h4>
                  </div>
                  <p className="text-sm text-gray-700">
                    BPO companies demonstrate{" "}
                    <span className="font-semibold text-blue-700">6.6% higher retention rates</span>
                    across all experience levels compared to digital marketing firms.
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="font-medium text-blue-800 mb-2">Key Findings</h4>
                <ul className="space-y-2 text-sm text-blue-900">
                  <li className="flex items-start">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-600 mt-1.5 mr-2"></span>
                    <span>
                      Digital marketing shows stronger growth but higher turnover, while BPO offers greater stability
                      but slower advancement.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-600 mt-1.5 mr-2"></span>
                    <span>
                      Skill requirements are diverging, with digital marketing emphasizing specialized technical skills
                      and BPO focusing on service excellence.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-600 mt-1.5 mr-2"></span>
                    <span>
                      Work arrangements differ significantly, with digital marketing offering more flexible and remote
                      options.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-600 mt-1.5 mr-2"></span>
                    <span>
                      By 2028, we project increasing convergence between sectors as BPOs integrate more digital
                      marketing services.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-lg mb-3">Sector Growth Comparison</h3>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={[...Array(5)].map((_, i) => ({
                        year: bpoData.employmentGrowth[i].year,
                        bpo: bpoData.employmentGrowth[i].growth,
                        digitalMarketing: digitalMarketingData.employmentGrowth[i].growth,
                      }))}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="year" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="bpo" name="BPO Sector" stroke="#0088FE" strokeWidth={2} />
                      <Line
                        type="monotone"
                        dataKey="digitalMarketing"
                        name="Digital Marketing"
                        stroke="#00C49F"
                        strokeWidth={2}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div>
                <h3 className="font-medium text-lg mb-3">Salary Comparison by Level</h3>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={bpoData.averageSalary} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="level" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="bpo" name="BPO Sector" fill="#0088FE" />
                      <Bar dataKey="digitalMarketing" name="Digital Marketing" fill="#00C49F" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-lg mt-4">
              <h3 className="font-medium text-lg mb-3">AI-Generated Summary</h3>
              <p className="text-sm text-slate-700">
                The labor market in Cagayan de Oro City shows a clear bifurcation between BPO and Digital Marketing
                sectors. While BPOs employ larger workforces with more standardized roles and compensation structures,
                digital marketing companies are growing nearly three times faster and offering significantly higher
                compensation across all levels.
              </p>
              <p className="text-sm text-slate-700 mt-2">
                BPO companies demonstrate stronger employee retention, particularly in the first years of employment,
                suggesting more effective onboarding and early career development programs. However, digital marketing
                firms offer more flexible work arrangements and faster career advancement, which appeals particularly to
                specialized talent and experienced professionals.
              </p>
              <p className="text-sm text-slate-700 mt-2">
                The skills landscape is increasingly divergent, with digital marketing emphasizing technical and
                creative capabilities while BPOs focus on service excellence and communication. However, our analysis
                predicts increasing convergence between these sectors by 2028, as BPOs integrate more digital marketing
                services and digital agencies adopt more structured service delivery models.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="comparative-analysis" className="space-y-4 pt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-lg mb-3">Retention Rates by Experience</h3>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={bpoData.retentionRates} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="experience" />
                      <YAxis domain={[50, 100]} />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="bpo" name="BPO Sector" stroke="#0088FE" strokeWidth={2} />
                      <Line
                        type="monotone"
                        dataKey="digitalMarketing"
                        name="Digital Marketing"
                        stroke="#00C49F"
                        strokeWidth={2}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div>
                <h3 className="font-medium text-lg mb-3">Skills Demand Comparison</h3>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={bpoData.skillsDemand}
                      layout="vertical"
                      margin={{ top: 5, right: 30, left: 120, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" domain={[0, 100]} />
                      <YAxis dataKey="skill" type="category" width={100} />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="bpo" name="BPO Sector" fill="#0088FE" />
                      <Bar dataKey="digitalMarketing" name="Digital Marketing" fill="#00C49F" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div>
                <h3 className="font-medium text-lg mb-3">Work Arrangements</h3>
                <div className="h-[250px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={bpoData.workArrangement} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="type" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="bpo" name="BPO Sector" fill="#0088FE" />
                      <Bar dataKey="digitalMarketing" name="Digital Marketing" fill="#00C49F" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div>
                <h3 className="font-medium text-lg mb-3">Education Requirements</h3>
                <div className="h-[250px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={bpoData.educationRequirements} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="level" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="bpo" name="BPO Sector" fill="#0088FE" />
                      <Bar dataKey="digitalMarketing" name="Digital Marketing" fill="#00C49F" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div>
                <h3 className="font-medium text-lg mb-3">Age Distribution</h3>
                <div className="h-[250px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={bpoData.ageDistribution} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="range" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="bpo" name="BPO Sector" fill="#0088FE" />
                      <Bar dataKey="digitalMarketing" name="Digital Marketing" fill="#00C49F" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div>
                <h3 className="font-medium text-lg mb-3">Turnover Reasons</h3>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={bpoData.turnoverReasons} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="reason" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="bpo" name="BPO Sector" fill="#0088FE" />
                      <Bar dataKey="digitalMarketing" name="Digital Marketing" fill="#00C49F" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div>
                <h3 className="font-medium text-lg mb-3">Digital Marketing Specializations</h3>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={digitalMarketingData.specializations}
                        cx="50%"
                        cy="50%"
                        labelLine={true}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="percentage"
                        nameKey="type"
                        label={({ type, percentage }) => `${type}: ${percentage}%`}
                      >
                        {digitalMarketingData.specializations.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-lg mt-4">
              <h3 className="font-medium text-lg mb-3">Comparative Analysis Summary</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-base mb-2">BPO Sector Characteristics</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-600 mt-1.5 mr-2"></span>
                      <span>Larger workforce with more standardized roles and compensation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-600 mt-1.5 mr-2"></span>
                      <span>Higher retention rates across all experience levels (6.6% advantage)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-600 mt-1.5 mr-2"></span>
                      <span>Predominantly on-site work model (65% of positions)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-600 mt-1.5 mr-2"></span>
                      <span>Younger workforce (63% under age 28)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-600 mt-1.5 mr-2"></span>
                      <span>More accessible entry requirements (40% roles require less than bachelor's)</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-base mb-2">Digital Marketing Sector Characteristics</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="h-1.5 w-1.5 rounded-full bg-green-600 mt-1.5 mr-2"></span>
                      <span>Faster growth (12.5% vs 4.5% annually)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-1.5 w-1.5 rounded-full bg-green-600 mt-1.5 mr-2"></span>
                      <span>Higher compensation across all levels (19.7% premium)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-1.5 w-1.5 rounded-full bg-green-600 mt-1.5 mr-2"></span>
                      <span>More flexible work arrangements (65% hybrid or remote)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-1.5 w-1.5 rounded-full bg-green-600 mt-1.5 mr-2"></span>
                      <span>More experienced workforce (53% aged 28+)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="h-1.5 w-1.5 rounded-full bg-green-600 mt-1.5 mr-2"></span>
                      <span>Higher educational requirements (80% require bachelor's or higher)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="ai-insights" className="space-y-4 pt-4">
            <div className="bg-blue-50 p-5 rounded-lg border border-blue-100 mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Brain className="h-5 w-5 text-blue-600" />
                <h3 className="text-lg font-semibold text-blue-800">AI-Generated Insights</h3>
              </div>
              <p className="text-sm text-blue-900">
                Our AI system has analyzed the labor market data for BPO and Digital Marketing sectors in Cagayan de Oro
                City, identifying patterns, correlations, and potential future trends. Each insight includes a
                confidence score representing the AI's certainty in the analysis and an impact assessment of its
                significance for the labor market.
              </p>
            </div>

            <div className="space-y-6">
              {aiInsights.map((insight, index) => (
                <div key={index} className="bg-white p-5 rounded-lg border shadow-sm">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-medium text-slate-800">{insight.title}</h3>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                        {insight.confidence}% confidence
                      </Badge>
                      <Badge
                        className={
                          insight.impact === "High"
                            ? "bg-red-100 text-red-700 border-red-200"
                            : "bg-amber-100 text-amber-700 border-amber-200"
                        }
                      >
                        {insight.impact} impact
                      </Badge>
                    </div>
                  </div>
                  <p className="text-sm text-slate-700">{insight.content}</p>
                </div>
              ))}
            </div>

            <div className="bg-slate-50 p-4 rounded-lg mt-6">
              <h3 className="font-medium text-lg mb-3">AI Methodology</h3>
              <p className="text-sm text-slate-700">
                These insights were generated using a multi-layered analytical approach that combines statistical
                analysis, pattern recognition, and predictive modeling. The AI system analyzed historical data trends,
                identified correlations between different variables, and applied industry-specific knowledge to generate
                meaningful insights.
              </p>
              <p className="text-sm text-slate-700 mt-2">
                Confidence scores are calculated based on data quality, sample size, consistency of patterns, and
                alignment with established labor market theories. Impact assessments consider the magnitude of the
                observed effect, its relevance to key stakeholders, and potential implications for future workforce
                planning and development.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="future-projections" className="space-y-4 pt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-lg mb-3">Growth Projections (2025-2029)</h3>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={bpoData.growthProjections} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="year" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="bpo" name="BPO Sector" stroke="#0088FE" strokeWidth={2} />
                      <Line
                        type="monotone"
                        dataKey="digitalMarketing"
                        name="Digital Marketing"
                        stroke="#00C49F"
                        strokeWidth={2}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="bg-slate-50 p-4 rounded-lg">
                <h3 className="font-medium text-lg mb-3">Key Projections</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-base mb-2">Employment Growth</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-600 mt-1.5 mr-2"></span>
                        <span>BPO sector projected to grow from 4.5% to 5.5% annually by 2029</span>
                      </li>
                      <li className="flex items-start">
                        <span className="h-1.5 w-1.5 rounded-full bg-green-600 mt-1.5 mr-2"></span>
                        <span>Digital marketing projected to grow from 12.5% to 18.5% annually by 2029</span>
                      </li>
                      <li className="flex items-start">
                        <span className="h-1.5 w-1.5 rounded-full bg-purple-600 mt-1.5 mr-2"></span>
                        <span>Growth gap between sectors expected to widen from 8% to 13% by 2029</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-base mb-2">Salary Projections</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-600 mt-1.5 mr-2"></span>
                        <span>BPO salaries projected to increase 5-7% annually</span>
                      </li>
                      <li className="flex items-start">
                        <span className="h-1.5 w-1.5 rounded-full bg-green-600 mt-1.5 mr-2"></span>
                        <span>Digital marketing salaries projected to increase 8-10% annually</span>
                      </li>
                      <li className="flex items-start">
                        <span className="h-1.5 w-1.5 rounded-full bg-purple-600 mt-1.5 mr-2"></span>
                        <span>Compensation gap projected to widen to 25% by 2029</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="bg-slate-50 p-4 rounded-lg">
                <h3 className="font-medium text-lg mb-3">Emerging Trends</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-base mb-2">Skill Convergence</h4>
                    <p className="text-sm text-slate-700">
                      By 2028, we project a 35% overlap in core competencies between BPO and digital marketing roles as
                      BPOs integrate more digital marketing services and digital agencies adopt more structured service
                      delivery models.
                    </p>
                    <div className="mt-2 flex items-center gap-2">
                      <div className="h-2 w-2/3 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full w-[35%] bg-blue-600 rounded-full"></div>
                      </div>
                      <span className="text-xs text-slate-600">35% overlap by 2028</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-base mb-2">Work Arrangement Evolution</h4>
                    <p className="text-sm text-slate-700">
                      Remote work adoption in BPO sector projected to increase from 10% to 25% by 2029, while digital
                      marketing remote work will increase from 20% to 40%.
                    </p>
                    <div className="mt-2 grid grid-cols-2 gap-4">
                      <div>
                        <div className="flex items-center justify-between text-xs text-slate-600 mb-1">
                          <span>BPO Remote Work</span>
                          <span>10% → 25%</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full w-1/4 bg-blue-600 rounded-full"></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center justify-between text-xs text-slate-600 mb-1">
                          <span>Digital Marketing</span>
                          <span>20% → 40%</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full w-2/5 bg-green-600 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 p-4 rounded-lg">
                <h3 className="font-medium text-lg mb-3">Disruptive Factors</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-base mb-2">AI and Automation Impact</h4>
                    <p className="text-sm text-slate-700">
                      AI and automation are projected to impact 35% of entry-level BPO tasks and 25% of entry-level
                      digital marketing tasks by 2029, driving a shift toward more specialized and creative roles in
                      both sectors.
                    </p>
                    <div className="mt-2 grid grid-cols-2 gap-4">
                      <div>
                        <div className="flex items-center justify-between text-xs text-slate-600 mb-1">
                          <span>BPO Automation Impact</span>
                          <span>35%</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full w-[35%] bg-red-500 rounded-full"></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center justify-between text-xs text-slate-600 mb-1">
                          <span>Digital Marketing</span>
                          <span>25%</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full w-1/4 bg-red-500 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-base mb-2">Talent Competition</h4>
                    <p className="text-sm text-slate-700">
                      Competition for specialized talent is projected to intensify, with a forecasted 15% talent gap in
                      digital marketing and 8% in specialized BPO roles by 2027, driving further salary increases and
                      benefit enhancements.
                    </p>
                    <div className="mt-2 grid grid-cols-2 gap-4">
                      <div>
                        <div className="flex items-center justify-between text-xs text-slate-600 mb-1">
                          <span>BPO Talent Gap</span>
                          <span>8%</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full w-[8%] bg-amber-500 rounded-full"></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center justify-between text-xs text-slate-600 mb-1">
                          <span>Digital Marketing</span>
                          <span>15%</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full w-[15%] bg-amber-500 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg mt-6">
              <h3 className="font-medium text-lg mb-3 text-blue-800">AI Confidence in Projections</h3>
              <p className="text-sm text-blue-900">
                Our AI system assigns an overall confidence score of 87% to these projections, with higher confidence in
                near-term forecasts (1-2 years) and decreasing confidence for longer-term projections (4-5 years). The
                most reliable projections relate to salary trends and skill requirements, while work arrangement and
                automation impact projections carry more uncertainty due to rapidly evolving technologies and policies.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="recommendations" className="space-y-4 pt-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-3">
                  <Users className="h-5 w-5 text-blue-600" />
                  <h3 className="font-medium text-lg text-blue-800">For Job Seekers</h3>
                </div>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-medium mr-2">
                      1
                    </span>
                    <div>
                      <span className="font-medium">Develop hybrid skill sets</span>
                      <p className="text-blue-800 mt-0.5">
                        Cultivate skills that bridge both sectors, such as digital customer experience, data analytics,
                        and content optimization. These transferable skills will be increasingly valuable as sector
                        convergence accelerates.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-medium mr-2">
                      2
                    </span>
                    <div>
                      <span className="font-medium">Consider career trajectory preferences</span>
                      <p className="text-blue-800 mt-0.5">
                        BPO offers more stability and structured advancement, while digital marketing provides faster
                        growth and higher compensation but with greater volatility. Align your choice with your risk
                        tolerance and career goals.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-medium mr-2">
                      3
                    </span>
                    <div>
                      <span className="font-medium">Invest in specialized certifications</span>
                      <p className="text-blue-800 mt-0.5">
                        Technical certifications in digital marketing specializations or BPO technologies can command
                        15-25% salary premiums and provide insulation against automation of entry-level tasks.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-3">
                  <Briefcase className="h-5 w-5 text-green-600" />
                  <h3 className="font-medium text-lg text-green-800">For Employers</h3>
                </div>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-5 w-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs font-medium mr-2">
                      1
                    </span>
                    <div>
                      <span className="font-medium">Develop cross-sector capabilities</span>
                      <p className="text-green-800 mt-0.5">
                        BPOs should integrate digital marketing services, while digital agencies should adopt more
                        structured service delivery models. This convergence will create competitive advantages as
                        market boundaries blur.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-5 w-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs font-medium mr-2">
                      2
                    </span>
                    <div>
                      <span className="font-medium">Implement flexible work policies</span>
                      <p className="text-green-800 mt-0.5">
                        BPOs should increase remote work options to compete for talent, while digital marketing firms
                        should formalize their flexible arrangements to improve retention. Hybrid models show optimal
                        productivity and satisfaction.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-5 w-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs font-medium mr-2">
                      3
                    </span>
                    <div>
                      <span className="font-medium">Invest in AI-augmented capabilities</span>
                      <p className="text-green-800 mt-0.5">
                        Develop systems that combine AI automation with human expertise rather than viewing automation
                        as a replacement. This approach maximizes productivity while creating higher-value roles
                        resistant to full automation.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-3">
                  <BarChart3 className="h-5 w-5 text-purple-600" />
                  <h3 className="font-medium text-lg text-purple-800">For Policymakers</h3>
                </div>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-5 w-5 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-xs font-medium mr-2">
                      1
                    </span>
                    <div>
                      <span className="font-medium">Align education with emerging needs</span>
                      <p className="text-purple-800 mt-0.5">
                        Update educational curricula to address the projected 15% talent gap in digital marketing and 8%
                        gap in specialized BPO roles, focusing on high-demand skills like data analytics and digital
                        content creation.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-5 w-5 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-xs font-medium mr-2">
                      2
                    </span>
                    <div>
                      <span className="font-medium">Support reskilling initiatives</span>
                      <p className="text-purple-800 mt-0.5">
                        Develop programs to reskill workers in roles at high risk of automation (35% of entry-level BPO
                        tasks), focusing on transitions to growing specializations in both sectors.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-5 w-5 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-xs font-medium mr-2">
                      3
                    </span>
                    <div>
                      <span className="font-medium">Incentivize innovation hubs</span>
                      <p className="text-purple-800 mt-0.5">
                        Create incentives for companies that establish innovation centers combining BPO and digital
                        marketing capabilities, positioning Cagayan de Oro as a leader in the converging service
                        economy.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-lg mt-6">
              <h3 className="font-medium text-lg mb-3">Strategic Implementation Roadmap</h3>
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-300"></div>

                <div className="relative pl-12 pb-8">
                  <div className="absolute left-2 top-1 h-8 w-8 rounded-full bg-blue-100 border-2 border-blue-600 flex items-center justify-center text-sm font-medium text-blue-600">
                    1
                  </div>
                  <h4 className="font-medium text-base mb-1">Short-Term Actions (0-12 months)</h4>
                  <p className="text-sm text-slate-700 mb-2">
                    Focus on immediate skill development, flexible work policies, and cross-training initiatives to
                    address current market demands and prepare for emerging trends.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                    <div className="bg-white p-3 rounded border">
                      <span className="font-medium block mb-1">Job Seekers</span>
                      <ul className="space-y-1 list-disc pl-4 text-slate-600">
                        <li>Identify transferable skills</li>
                        <li>Pursue entry-level certifications</li>
                        <li>Build digital portfolios</li>
                      </ul>
                    </div>
                    <div className="bg-white p-3 rounded border">
                      <span className="font-medium block mb-1">Employers</span>
                      <ul className="space-y-1 list-disc pl-4 text-slate-600">
                        <li>Implement flexible work policies</li>
                        <li>Conduct skills gap analysis</li>
                        <li>Develop cross-training programs</li>
                      </ul>
                    </div>
                    <div className="bg-white p-3 rounded border">
                      <span className="font-medium block mb-1">Policymakers</span>
                      <ul className="space-y-1 list-disc pl-4 text-slate-600">
                        <li>Launch short-term training programs</li>
                        <li>Create industry-education partnerships</li>
                        <li>Develop digital infrastructure</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="relative pl-12 pb-8">
                  <div className="absolute left-2 top-1 h-8 w-8 rounded-full bg-green-100 border-2 border-green-600 flex items-center justify-center text-sm font-medium text-green-600">
                    2
                  </div>
                  <h4 className="font-medium text-base mb-1">Medium-Term Strategy (1-3 years)</h4>
                  <p className="text-sm text-slate-700 mb-2">
                    Develop specialized capabilities, implement AI-augmented systems, and create structured career
                    pathways that anticipate the projected convergence between sectors.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                    <div className="bg-white p-3 rounded border">
                      <span className="font-medium block mb-1">Job Seekers</span>
                      <ul className="space-y-1 list-disc pl-4 text-slate-600">
                        <li>Develop specialized expertise</li>
                        <li>Build cross-sector experience</li>
                        <li>Master AI-augmented tools</li>
                      </ul>
                    </div>
                    <div className="bg-white p-3 rounded border">
                      <span className="font-medium block mb-1">Employers</span>
                      <ul className="space-y-1 list-disc pl-4 text-slate-600">
                        <li>Implement AI-augmented systems</li>
                        <li>Develop cross-sector service offerings</li>
                        <li>Create structured career pathways</li>
                      </ul>
                    </div>
                    <div className="bg-white p-3 rounded border">
                      <span className="font-medium block mb-1">Policymakers</span>
                      <ul className="space-y-1 list-disc pl-4 text-slate-600">
                        <li>Update educational curricula</li>
                        <li>Develop reskilling programs</li>
                        <li>Create innovation incentives</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="relative pl-12">
                  <div className="absolute left-2 top-1 h-8 w-8 rounded-full bg-purple-100 border-2 border-purple-600 flex items-center justify-center text-sm font-medium text-purple-600">
                    3
                  </div>
                  <h4 className="font-medium text-base mb-1">Long-Term Vision (3-5 years)</h4>
                  <p className="text-sm text-slate-700 mb-2">
                    Position for the projected convergence between sectors, develop advanced AI integration
                    capabilities, and establish leadership in emerging specialized niches.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                    <div className="bg-white p-3 rounded border">
                      <span className="font-medium block mb-1">Job Seekers</span>
                      <ul className="space-y-1 list-disc pl-4 text-slate-600">
                        <li>Develop leadership in niche specializations</li>
                        <li>Build AI development/management skills</li>
                        <li>Position for emerging hybrid roles</li>
                      </ul>
                    </div>
                    <div className="bg-white p-3 rounded border">
                      <span className="font-medium block mb-1">Employers</span>
                      <ul className="space-y-1 list-disc pl-4 text-slate-600">
                        <li>Develop advanced AI integration</li>
                        <li>Establish leadership in specialized niches</li>
                        <li>Create innovation centers</li>
                      </ul>
                    </div>
                    <div className="bg-white p-3 rounded border">
                      <span className="font-medium block mb-1">Policymakers</span>
                      <ul className="space-y-1 list-disc pl-4 text-slate-600">
                        <li>Establish regional innovation hub</li>
                        <li>Develop advanced digital infrastructure</li>
                        <li>Create specialized economic zones</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="bg-slate-50 border-t flex justify-between items-center">
        <div className="text-sm text-slate-500">
          <span className="font-medium">Data as of:</span> May 2025 |{" "}
          <span className="font-medium">Analysis generated:</span> {new Date().toLocaleDateString()}
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="gap-1">
            <FileText className="h-4 w-4" /> Print Report
          </Button>
          <Button size="sm" className="gap-1 bg-blue-600 hover:bg-blue-700" onClick={handleExportPDF}>
            <Download className="h-4 w-4" /> Export PDF
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}

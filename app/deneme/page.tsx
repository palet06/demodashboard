import type { Metadata } from "next"

import AIAnalyticsReport from "@/components/deneme"
import AgeRangeAnalytics from "@/components/age"
import AdOnPhSalaryDetails from "@/components/salary"
import SalaryRangeAnalytics from "@/components/salaryrange"
import RetentionTurnoverAnalytics from "@/components/trends"

export const metadata: Metadata = {
  title: "Cagayan de Oro BPO Labor Market Analytics",
  description: "Analytics dashboard for labor market trends in Cagayan de Oro city's BPO sector",
}

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col">
    
      <main className="flex-1 space-y-6 p-6 pt-4 md:p-8 md:pt-6">
        
        <AIAnalyticsReport />
          <AgeRangeAnalytics />
          <AdOnPhSalaryDetails />7
          <SalaryRangeAnalytics />
           <RetentionTurnoverAnalytics />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          
        </div>
        
      </main>
    </div>
  )
}

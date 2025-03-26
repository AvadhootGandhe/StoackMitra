import { ArrowDown, ArrowUp, type LucideIcon } from "lucide-react"
import { formatNumber, formatPercentage, getChangeIndicator } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"

interface StatCardProps {
  title: string
  value: number
  change: number
  icon: LucideIcon
  iconColor?: string
}

export function StatCard({ title, value, change, icon: Icon, iconColor = "text-primary" }: StatCardProps) {
  const changeIndicator = getChangeIndicator(change)

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6">
        <div className="flex items-center gap-2">
          <div className={`rounded-full p-2 ${iconColor} bg-primary/10`}>
            <Icon className="h-5 w-5" />
          </div>
          <div className={`ml-auto text-sm font-medium ${changeIndicator} flex items-center`}>
            {change > 0 ? <ArrowUp className="mr-1 h-4 w-4" /> : <ArrowDown className="mr-1 h-4 w-4" />}
            {formatPercentage(change)}
          </div>
        </div>
        <div className="mt-3">
          <p className="text-sm text-muted-foreground">{title}</p>
          <h2 className="text-3xl font-bold">{formatNumber(value)}</h2>
        </div>
      </CardContent>
    </Card>
  )
}


"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "@/components/ui/chart"

interface InventoryChartProps {
  data: {
    day: string
    inventoryLevel: number
    reorderThreshold: number
  }[]
}

export function InventoryChart({ data }: InventoryChartProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Inventory Status</CardTitle>
        <p className="text-sm text-muted-foreground">Current stock levels overview</p>
      </CardHeader>
      <CardContent className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 10,
              left: 10,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={false}
              padding={{ left: 10, right: 10 }}
              tick={{ fontSize: 12 }}
            />
            <YAxis tickLine={false} axisLine={false} tick={{ fontSize: 12 }} width={40} />
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="rounded-lg border bg-background p-2 shadow-sm">
                      <div className="grid grid-cols-2 gap-2">
                        <div className="flex flex-col">
                          <span className="text-[0.70rem] uppercase text-muted-foreground">Day</span>
                          <span className="font-bold text-muted-foreground">{payload[0].payload.day}</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[0.70rem] uppercase text-muted-foreground">Inventory</span>
                          <span className="font-bold">{payload[0].value}</span>
                        </div>
                      </div>
                    </div>
                  )
                }
                return null
              }}
            />
            <Line
              type="monotone"
              dataKey="inventoryLevel"
              stroke="#8b5cf6"
              strokeWidth={2}
              activeDot={{
                r: 6,
                style: { fill: "#8b5cf6", opacity: 0.8 },
              }}
            />
            <Line
              type="monotone"
              dataKey="reorderThreshold"
              stroke="#ef4444"
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}


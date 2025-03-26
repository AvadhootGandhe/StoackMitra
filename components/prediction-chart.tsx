"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "@/components/ui/chart"

interface PredictionChartProps {
  data: {
    month: string
    actual: number
    predicted: number
  }[]
}

export function PredictionChart({ data }: PredictionChartProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sales Prediction</CardTitle>
        <p className="text-sm text-muted-foreground">Actual vs predicted sales</p>
      </CardHeader>
      <CardContent className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 5,
              right: 10,
              left: 10,
              bottom: 20,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="month"
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
                          <span className="text-[0.70rem] uppercase text-muted-foreground">Month</span>
                          <span className="font-bold text-muted-foreground">{payload[0].payload.month}</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[0.70rem] uppercase text-muted-foreground">Actual</span>
                          <span className="font-bold">{payload[0].value}</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[0.70rem] uppercase text-muted-foreground">Predicted</span>
                          <span className="font-bold">{payload[1].value}</span>
                        </div>
                      </div>
                    </div>
                  )
                }
                return null
              }}
            />
            <Legend />
            <Bar dataKey="actual" fill="#8b5cf6" radius={[4, 4, 0, 0]} name="Actual" />
            <Bar dataKey="predicted" fill="#a78bfa" radius={[4, 4, 0, 0]} name="Predicted" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}


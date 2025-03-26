import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "@/components/ui/chart"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Predictions - Stock Mitra",
  description: "AI-powered inventory predictions",
}

export default function PredictionsPage() {
  // Mock data for predictions
  const salesPredictionData = [
    { month: "Jan", actual: 120, predicted: 110 },
    { month: "Feb", actual: 140, predicted: 145 },
    { month: "Mar", actual: 160, predicted: 155 },
    { month: "Apr", actual: 180, predicted: 185 },
    { month: "May", actual: 200, predicted: 195 },
    { month: "Jun", actual: 220, predicted: 225 },
  ]

  const demandForecastData = [
    { date: "Week 1", demand: 120, forecast: 125 },
    { date: "Week 2", demand: 132, forecast: 130 },
    { date: "Week 3", demand: 145, forecast: 140 },
    { date: "Week 4", demand: 140, forecast: 145 },
    { date: "Week 5", demand: 158, forecast: 155 },
    { date: "Week 6", demand: 165, forecast: 170 },
    { date: "Week 7", demand: 172, forecast: 175 },
    { date: "Week 8", demand: 180, forecast: 185 },
  ]

  const seasonalityData = [
    { month: "Jan", value: 100 },
    { month: "Feb", value: 110 },
    { month: "Mar", value: 130 },
    { month: "Apr", value: 150 },
    { month: "May", value: 180 },
    { month: "Jun", value: 220 },
    { month: "Jul", value: 250 },
    { month: "Aug", value: 280 },
    { month: "Sep", value: 250 },
    { month: "Oct", value: 210 },
    { month: "Nov", value: 180 },
    { month: "Dec", value: 150 },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">AI Predictions</h2>
        <p className="text-muted-foreground">AI-powered forecasts to optimize your inventory</p>
      </div>

      <Tabs defaultValue="sales">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="sales">Sales Prediction</TabsTrigger>
          <TabsTrigger value="demand">Demand Forecast</TabsTrigger>
          <TabsTrigger value="seasonality">Seasonality Analysis</TabsTrigger>
        </TabsList>
        <TabsContent value="sales" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Sales Prediction</CardTitle>
              <CardDescription>Actual vs predicted sales over the last 6 months</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={salesPredictionData}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 20,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="month" tickLine={false} axisLine={false} />
                  <YAxis tickLine={false} axisLine={false} width={40} />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="actual"
                    name="Actual Sales"
                    stroke="#8b5cf6"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="predicted"
                    name="Predicted Sales"
                    stroke="#a78bfa"
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    dot={{ r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Prediction Accuracy</CardTitle>
                <CardDescription>Our AI model's prediction accuracy over time</CardDescription>
              </CardHeader>
              <CardContent className="h-[200px]">
                <div className="flex h-full items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-primary">94.8%</div>
                    <p className="mt-2 text-sm text-muted-foreground">Average prediction accuracy</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Prediction Insights</CardTitle>
                <CardDescription>Key insights from our AI predictions</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-primary/10 p-1">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                    </div>
                    <span className="text-sm">Expected 15% increase in dairy product demand next month</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-primary/10 p-1">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                    </div>
                    <span className="text-sm">Seasonal products should be restocked by April 15th</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-primary/10 p-1">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                    </div>
                    <span className="text-sm">Recommend reducing order quantity for canned goods</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="demand" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Demand Forecast</CardTitle>
              <CardDescription>Weekly demand forecast for the next 8 weeks</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={demandForecastData}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 20,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="date" tickLine={false} axisLine={false} />
                  <YAxis tickLine={false} axisLine={false} width={40} />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="demand"
                    name="Actual Demand"
                    stroke="#8b5cf6"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="forecast"
                    name="Forecasted Demand"
                    stroke="#a78bfa"
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    dot={{ r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="seasonality" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Seasonality Analysis</CardTitle>
              <CardDescription>Monthly sales patterns showing seasonality</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={seasonalityData}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 20,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="month" tickLine={false} axisLine={false} />
                  <YAxis tickLine={false} axisLine={false} width={40} />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="value"
                    name="Sales Volume"
                    stroke="#8b5cf6"
                    fill="#8b5cf6"
                    fillOpacity={0.3}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}


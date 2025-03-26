import type { Metadata } from "next"
import { StatCard } from "@/components/stat-card"
import { InventoryChart } from "@/components/inventory-chart"
import { LowStockAlerts } from "@/components/low-stock-alerts"
import { PredictionChart } from "@/components/prediction-chart"
import { Package, AlertTriangle, TrendingUp, PackageMinus } from "lucide-react"

export const metadata: Metadata = {
  title: "Dashboard - Stock Mitra",
  description: "Inventory management dashboard",
}

export default function DashboardPage() {
  // Mock data for the dashboard
  const stats = [
    {
      title: "Total Items",
      value: 1284,
      change: 2.5,
      icon: Package,
    },
    {
      title: "Low Stock",
      value: 23,
      change: -4.3,
      icon: AlertTriangle,
      iconColor: "text-status-low",
    },
    {
      title: "Predicted Orders",
      value: 342,
      change: 12.1,
      icon: TrendingUp,
      iconColor: "text-status-healthy",
    },
    {
      title: "Excess Stock",
      value: 18,
      change: -8.4,
      icon: PackageMinus,
      iconColor: "text-status-critical",
    },
  ]

  const inventoryChartData = [
    { day: "Day 0", inventoryLevel: 180, reorderThreshold: 100 },
    { day: "Day 1", inventoryLevel: 165, reorderThreshold: 100 },
    { day: "Day 2", inventoryLevel: 150, reorderThreshold: 100 },
    { day: "Day 3", inventoryLevel: 135, reorderThreshold: 100 },
    { day: "Day 4", inventoryLevel: 120, reorderThreshold: 100 },
    { day: "Day 5", inventoryLevel: 105, reorderThreshold: 100 },
    { day: "Day 6", inventoryLevel: 90, reorderThreshold: 100 },
    { day: "Day 7", inventoryLevel: 75, reorderThreshold: 100 },
  ]

  const predictionChartData = [
    { month: "Jan", actual: 120, predicted: 110 },
    { month: "Feb", actual: 140, predicted: 145 },
    { month: "Mar", actual: 160, predicted: 155 },
    { month: "Apr", actual: 180, predicted: 185 },
    { month: "May", actual: 200, predicted: 195 },
    { month: "Jun", actual: 220, predicted: 225 },
  ]

  const lowStockItems = [
    {
      id: "1",
      name: "Fresh Milk",
      category: "Dairy",
      stock: 78,
      reorder: 80,
      status: "Low" as const,
      daysUntilEmpty: 1,
    },
    {
      id: "2",
      name: "Chicken Breast",
      category: "Meat",
      stock: 32,
      reorder: 35,
      status: "Critical" as const,
    },
    {
      id: "3",
      name: "Greek Yogurt",
      category: "Dairy",
      stock: 45,
      reorder: 50,
      status: "Low" as const,
      daysUntilEmpty: 2,
    },
    {
      id: "4",
      name: "Bananas",
      category: "Fruits",
      stock: 68,
      reorder: 70,
      status: "Low" as const,
      daysUntilEmpty: 1,
    },
  ]

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <StatCard
            key={stat.title}
            title={stat.title}
            value={stat.value}
            change={stat.change}
            icon={stat.icon}
            iconColor={stat.iconColor}
          />
        ))}
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <InventoryChart data={inventoryChartData} />
        <LowStockAlerts items={lowStockItems} />
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <PredictionChart data={predictionChartData} />
      </div>
    </div>
  )
}


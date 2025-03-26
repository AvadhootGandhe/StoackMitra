import type { Metadata } from "next"
import { InventoryTable } from "@/components/inventory-table"

export const metadata: Metadata = {
  title: "Inventory - Stock Mitra",
  description: "Manage your inventory",
}

export default function InventoryPage() {
  // Mock data for the inventory
  const inventoryItems = [
    {
      id: "1",
      name: "Organic Apples",
      category: "Fruits",
      currentStock: 245,
      reorderPoint: 100,
      predictedRestock: "3 days",
      status: "Healthy" as const,
    },
    {
      id: "2",
      name: "Fresh Milk",
      category: "Dairy",
      currentStock: 78,
      reorderPoint: 80,
      predictedRestock: "1 day",
      status: "Low" as const,
    },
    {
      id: "3",
      name: "Whole Wheat Bread",
      category: "Bakery",
      currentStock: 56,
      reorderPoint: 40,
      predictedRestock: "4 days",
      status: "Healthy" as const,
    },
    {
      id: "4",
      name: "Chicken Breast",
      category: "Meat",
      currentStock: 32,
      reorderPoint: 35,
      predictedRestock: "Today",
      status: "Critical" as const,
    },
    {
      id: "5",
      name: "Tomatoes",
      category: "Vegetables",
      currentStock: 124,
      reorderPoint: 60,
      predictedRestock: "7 days",
      status: "Healthy" as const,
    },
    {
      id: "6",
      name: "Greek Yogurt",
      category: "Dairy",
      currentStock: 45,
      reorderPoint: 50,
      predictedRestock: "2 days",
      status: "Low" as const,
    },
    {
      id: "7",
      name: "Bananas",
      category: "Fruits",
      currentStock: 68,
      reorderPoint: 70,
      predictedRestock: "1 day",
      status: "Low" as const,
    },
    {
      id: "8",
      name: "Pasta",
      category: "Dry Goods",
      currentStock: 156,
      reorderPoint: 80,
      predictedRestock: "10 days",
      status: "Healthy" as const,
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Inventory Management</h2>
        <p className="text-muted-foreground">Track and manage your warehouse inventory</p>
      </div>
      <InventoryTable items={inventoryItems} />
    </div>
  )
}


"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AlertTriangle } from "lucide-react"

interface StockItem {
  id: string
  name: string
  category: string
  stock: number
  reorder: number
  status: "Low" | "Critical"
  daysUntilEmpty?: number
}

interface LowStockAlertsProps {
  items: StockItem[]
}

export function LowStockAlerts({ items }: LowStockAlertsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Low Stock Alerts</CardTitle>
        <p className="text-sm text-muted-foreground">Items that need attention</p>
      </CardHeader>
      <CardContent className="space-y-4">
        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-6 text-center">
            <div className="rounded-full bg-primary/10 p-3">
              <AlertTriangle className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mt-4 text-lg font-semibold">No low stock items</h3>
            <p className="mt-2 text-sm text-muted-foreground">All your inventory items are at healthy levels.</p>
          </div>
        ) : (
          items.map((item) => (
            <div
              key={item.id}
              className={`rounded-lg border p-4 ${
                item.status === "Critical"
                  ? "border-status-critical/20 bg-status-critical/5"
                  : "border-status-low/20 bg-status-low/5"
              }`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <AlertTriangle
                      className={`h-4 w-4 ${item.status === "Critical" ? "text-status-critical" : "text-status-low"}`}
                    />
                    <h3 className="font-medium">{item.name}</h3>
                  </div>
                  <div className="mt-1 text-sm">
                    <span className="text-muted-foreground">{item.category} • </span>
                    <span>
                      Stock: {item.stock} • Reorder: {item.reorder}
                    </span>
                  </div>
                  {item.daysUntilEmpty && (
                    <p
                      className={`mt-2 text-sm ${
                        item.status === "Critical" ? "text-status-critical" : "text-status-low"
                      }`}
                    >
                      {item.status === "Critical"
                        ? "Critical: Restock immediately"
                        : `Low: ${item.daysUntilEmpty} day${item.daysUntilEmpty > 1 ? "s" : ""} until empty`}
                    </p>
                  )}
                </div>
                <Button size="sm" variant="secondary">
                  Restock
                </Button>
              </div>
            </div>
          ))
        )}
      </CardContent>
    </Card>
  )
}


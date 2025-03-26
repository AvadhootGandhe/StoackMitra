import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatNumber(num: number): string {
  return new Intl.NumberFormat().format(num)
}

export function getStatusColor(status: string): string {
  switch (status.toLowerCase()) {
    case "healthy":
      return "text-status-healthy bg-status-healthy/10"
    case "low":
      return "text-status-low bg-status-low/10"
    case "critical":
      return "text-status-critical bg-status-critical/10"
    default:
      return "text-muted-foreground"
  }
}

export function getStatusBadge(status: string): string {
  switch (status.toLowerCase()) {
    case "healthy":
      return "bg-status-healthy text-white"
    case "low":
      return "bg-status-low text-white"
    case "critical":
      return "bg-status-critical text-white"
    default:
      return "bg-muted text-muted-foreground"
  }
}

export function getChangeIndicator(value: number): string {
  if (value > 0) {
    return "text-status-healthy"
  } else if (value < 0) {
    return "text-status-critical"
  }
  return "text-muted-foreground"
}

export function formatPercentage(value: number): string {
  const formatted = Math.abs(value).toFixed(1)
  return value >= 0 ? `+${formatted}%` : `-${formatted}%`
}


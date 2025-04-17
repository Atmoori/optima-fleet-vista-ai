
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon?: ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
  valueClassName?: string;
  children?: ReactNode;
}

export function StatsCard({
  title,
  value,
  icon,
  trend,
  className,
  valueClassName,
  children
}: StatsCardProps) {
  return (
    <div className={cn(
      "stats-card p-5 group hover:shadow-md transition-all duration-300 animate-fade-in",
      className
    )}>
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
        {icon && (
          <div className="text-sand-gold group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <div className={cn("text-2xl font-bold", valueClassName)}>
          {value}
        </div>
        {trend && (
          <div className="flex items-center text-xs">
            <span className={`mr-1 ${trend.isPositive ? 'text-success' : 'text-danger'}`}>
              {trend.isPositive ? '↑' : '↓'} {Math.abs(trend.value)}%
            </span>
            <span className="text-muted-foreground">vs. last month</span>
          </div>
        )}
      </div>
      {children}
    </div>
  );
}

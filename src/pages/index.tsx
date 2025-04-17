
import { ArrowDownIcon, ArrowUpIcon, BarChart3, Car, Fuel, Gauge, MapPin, Shield, Timer } from "lucide-react";
import { StatsCard } from "@/components/ui/stats-card";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Mock data for the dashboard
const statsData = [
  {
    title: "Fuel Savings",
    value: "13%",
    icon: <Fuel />,
    trend: { value: 3, isPositive: true },
    className: "border-l-4 border-l-success"
  },
  {
    title: "Downtime Reduction",
    value: "30%",
    icon: <Timer />,
    trend: { value: 8, isPositive: true },
    className: "border-l-4 border-l-primary"
  },
  {
    title: "Accident Risk Reduction",
    value: "60%",
    icon: <Shield />,
    trend: { value: 12, isPositive: true },
    className: "border-l-4 border-l-deep-blue"
  },
  {
    title: "Operational Efficiency",
    value: "31%",
    icon: <BarChart3 />,
    trend: { value: 5, isPositive: true },
    className: "border-l-4 border-l-neon-blue"
  }
];

const Dashboard = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back, Ahmed. Your fleet is performing well today.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-muted-foreground">
            Fleet Performance Score:
          </span>
          <div className="flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full dark:bg-green-900 dark:text-green-100">
            <span className="font-bold mr-1">92</span>
            <span className="text-xs">/100</span>
          </div>
        </div>
      </div>

      {/* Key metrics section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {statsData.map((stat, index) => (
          <StatsCard
            key={index}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
            trend={stat.trend}
            className={stat.className}
          />
        ))}
      </div>

      {/* Map and Vehicle status section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <Card className="col-span-2 h-[400px] overflow-hidden">
          <div className="h-full relative">
            <div className="absolute inset-0 bg-deep-blue/10 flex items-center justify-center">
              {/* This would be replaced by an actual map */}
              <div className="text-center p-5">
                <MapPin className="h-12 w-12 text-deep-blue mx-auto mb-3" />
                <h3 className="text-xl font-bold">Fleet Map View</h3>
                <p className="text-muted-foreground">
                  Showing 24 active vehicles across Dubai
                </p>
                {/* Mock Dubai skyline silhouette */}
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-contain bg-bottom bg-no-repeat opacity-20"
                  style={{ backgroundImage: "url('https://i.imgur.com/ZKu0J7X.png')" }}>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Fleet status overview */}
        <Card className="p-5">
          <h3 className="font-semibold mb-4 flex items-center">
            <Car className="mr-2 h-5 w-5" />
            Fleet Status
          </h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-2 border-b">
              <span className="text-sm font-medium">Total Vehicles</span>
              <span className="font-bold">42</span>
            </div>
            
            <div className="flex items-center justify-between pb-2 border-b">
              <span className="text-sm font-medium">Active</span>
              <div className="flex items-center">
                <span className="h-2 w-2 rounded-full bg-success mr-2"></span>
                <span className="font-bold">24</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between pb-2 border-b">
              <span className="text-sm font-medium">Maintenance</span>
              <div className="flex items-center">
                <span className="h-2 w-2 rounded-full bg-warning mr-2"></span>
                <span className="font-bold">5</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between pb-2 border-b">
              <span className="text-sm font-medium">Idle</span>
              <div className="flex items-center">
                <span className="h-2 w-2 rounded-full bg-muted-foreground mr-2"></span>
                <span className="font-bold">13</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Alerts</span>
              <div className="bg-destructive/10 text-destructive px-2 py-0.5 rounded text-sm font-semibold">
                3
              </div>
            </div>

            {/* AI Assistant Button */}
            <Button className="w-full mt-4 gap-2 bg-gradient-to-r from-deep-blue to-neon-blue hover:shadow-glow-blue transition-all duration-300">
              <Gauge className="h-4 w-4" />
              <span>Launch AI Assistant</span>
            </Button>
          </div>
        </Card>
      </div>

      {/* Additional metrics section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Card className="p-5">
          <h3 className="font-semibold mb-4 flex items-center">
            <Shield className="mr-2 h-5 w-5" />
            Safety Incidents (Last 30 Days)
          </h3>
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-success"></div>
                <span className="text-sm">No incidents</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-warning"></div>
                <span className="text-sm">Minor incidents</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-destructive"></div>
                <span className="text-sm">Major incidents</span>
              </div>
            </div>
            <div className="relative w-32 h-32">
              {/* Placeholder for a pie chart */}
              <div className="absolute inset-0 rounded-full border-8 border-success"></div>
              <div className="absolute inset-[4px] rounded-full border-4 border-warning"></div>
              <div className="absolute inset-[12px] rounded-full border-2 border-destructive"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-2xl font-bold">60%</span>
                  <div className="text-xs text-muted-foreground">reduction</div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-5">
          <h3 className="font-semibold mb-4 flex items-center">
            <Fuel className="mr-2 h-5 w-5" />
            Fuel Economy (Annual Savings)
          </h3>
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-sm">Before AI Optimization</span>
              <span className="font-medium">AED 750,000</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">With AI Optimization</span>
              <span className="font-medium text-success">AED 652,500</span>
            </div>
            <div className="h-8 w-full bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-neon-blue to-deep-blue rounded-full" style={{ width: "87%" }}></div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-success font-medium flex items-center">
                <ArrowDownIcon className="h-3 w-3 mr-1" />
                AED 97,500
              </span>
              <span className="text-success font-medium">13% Savings</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;

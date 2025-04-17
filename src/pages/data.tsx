
import { BarChart, Download, Info, RefreshCcw, Timer } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";

const RealTimeData = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Real-Time Data</h1>
          <p className="text-muted-foreground">
            Live insights from your fleet operations.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground">Last updated:</span>
          <span className="text-xs font-medium">Just now</span>
          <Button size="icon" variant="ghost">
            <RefreshCcw className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Fleet Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <Card className="p-5">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-sm font-medium text-muted-foreground">Active Vehicles</h3>
            <div className="text-2xl font-bold">24</div>
          </div>
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between text-xs">
              <span>On Route</span>
              <span>18</span>
            </div>
            <Progress value={75} className="h-1" />
            
            <div className="flex items-center justify-between text-xs mt-2">
              <span>Idle</span>
              <span>6</span>
            </div>
            <Progress value={25} className="h-1" />
          </div>
        </Card>
        
        <Card className="p-5">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-sm font-medium text-muted-foreground">Fuel Efficiency</h3>
            <div className="text-2xl font-bold">87%</div>
          </div>
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between text-xs">
              <span className="flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-green-500"></span>
                Optimal
              </span>
              <span>19 vehicles</span>
            </div>
            <Progress value={79} className="h-1 bg-muted" />
            
            <div className="flex items-center justify-between text-xs mt-2">
              <span className="flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-yellow-500"></span>
                Warning
              </span>
              <span>5 vehicles</span>
            </div>
            <Progress value={21} className="h-1 bg-muted" />
          </div>
        </Card>
        
        <Card className="p-5">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-sm font-medium text-muted-foreground">Average Speed</h3>
            <div className="text-2xl font-bold">72 km/h</div>
          </div>
          <div className="flex items-center justify-between pt-2">
            <div className="text-xs text-muted-foreground flex items-center">
              <Timer className="h-3 w-3 mr-1" />
              <span>Last 24 hours</span>
            </div>
            <div className="flex items-center text-xs font-medium text-green-600">
              <span>+3%</span>
            </div>
          </div>
        </Card>
      </div>

      {/* Vehicle Detail */}
      <Card className="overflow-hidden">
        <div className="bg-deep-blue/5 p-5">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold">Vehicle Details</h2>
            <div className="flex items-center gap-3">
              <select className="text-sm bg-background border border-input rounded-md h-9 px-3">
                <option>All Vehicles</option>
                <option>Vehicle #A12-345</option>
                <option>Vehicle #B78-901</option>
                <option>Vehicle #C23-456</option>
              </select>
              <Button size="sm" variant="outline" className="flex items-center gap-1">
                <Download className="h-4 w-4" />
                <span>Export</span>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="p-5">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Vehicle Stats */}
            <div className="space-y-5">
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Vehicle ID</h3>
                <div className="flex items-center gap-2">
                  <span className="font-semibold">A12-345</span>
                  <span className="bg-green-100 text-green-800 px-2 py-0.5 text-xs rounded dark:bg-green-900 dark:text-green-100">Active</span>
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Current Location</h3>
                <div className="font-medium">Sheikh Zayed Road, Dubai</div>
                <div className="text-xs text-muted-foreground">25.209665, 55.270648</div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Current Driver</h3>
                <div className="font-medium">Mohammed Al Qasimi</div>
                <div className="text-xs text-muted-foreground">ID: DRV-1234 • On duty: 4h 12m</div>
              </div>
            </div>
            
            {/* Gauges */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col items-center justify-center">
                <div className="relative h-28 w-28">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl font-bold">67</div>
                      <div className="text-xs text-muted-foreground">km/h</div>
                    </div>
                  </div>
                  <div className="absolute inset-0 rounded-full border-8 border-green-200"></div>
                  <div className="absolute inset-0 rounded-full border-8 border-green-500" style={{ clipPath: 'polygon(50% 50%, 50% 0, 100% 0, 100% 60%, 50% 50%)' }}></div>
                </div>
                <p className="text-xs font-medium mt-2">Current Speed</p>
              </div>
              
              <div className="flex flex-col items-center justify-center">
                <div className="relative h-28 w-28">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl font-bold">68%</div>
                    </div>
                  </div>
                  <div className="absolute inset-0 rounded-full border-8 border-blue-200"></div>
                  <div className="absolute inset-0 rounded-full border-8 border-blue-500" style={{ clipPath: 'polygon(50% 50%, 50% 0, 100% 0, 100% 70%, 50% 50%)' }}></div>
                </div>
                <p className="text-xs font-medium mt-2">Fuel Level</p>
              </div>
              
              <div className="flex flex-col items-center justify-center">
                <div className="relative h-28 w-28">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl font-bold">97%</div>
                    </div>
                  </div>
                  <div className="absolute inset-0 rounded-full border-8 border-green-200"></div>
                  <div className="absolute inset-0 rounded-full border-8 border-green-500" style={{ clipPath: 'polygon(50% 50%, 50% 0, 100% 0, 100% 97%, 50% 50%)' }}></div>
                </div>
                <p className="text-xs font-medium mt-2">Engine Health</p>
              </div>
              
              <div className="flex flex-col items-center justify-center">
                <div className="relative h-28 w-28">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl font-bold">82%</div>
                    </div>
                  </div>
                  <div className="absolute inset-0 rounded-full border-8 border-yellow-200"></div>
                  <div className="absolute inset-0 rounded-full border-8 border-yellow-500" style={{ clipPath: 'polygon(50% 50%, 50% 0, 100% 0, 100% 82%, 50% 50%)' }}></div>
                </div>
                <p className="text-xs font-medium mt-2">Battery Health</p>
              </div>
            </div>
            
            {/* Additional Info */}
            <div className="space-y-4">
              <Card className="p-4 border-l-4 border-l-blue-500">
                <h4 className="text-sm font-medium mb-2 flex items-center gap-1">
                  <Info className="h-4 w-4" />
                  Next Destination
                </h4>
                <p className="text-sm">Dubai Mall, Downtown Dubai</p>
                <p className="text-xs text-muted-foreground">ETA: 23 minutes</p>
              </Card>
              
              <Card className="p-4 border-l-4 border-l-green-500">
                <h4 className="text-sm font-medium mb-2 flex items-center gap-1">
                  <BarChart className="h-4 w-4" />
                  Today's Performance
                </h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>Distance: <span className="font-medium">127 km</span></div>
                  <div>Fuel Used: <span className="font-medium">9.6 L</span></div>
                  <div>Avg Speed: <span className="font-medium">42 km/h</span></div>
                  <div>CO2: <span className="font-medium">-12%</span></div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default RealTimeData;


import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, BarChart3, Clock, Truck, Calendar, ArrowRight, RefreshCcw } from "lucide-react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const RouteOptimization = () => {
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState<string>("all");
  
  const handleOptimize = () => {
    setIsOptimizing(true);
    setTimeout(() => {
      setIsOptimizing(false);
    }, 2000);
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Route Optimization</h1>
        <p className="text-muted-foreground">
          Optimize delivery routes with AI-powered suggestions to reduce time and fuel consumption.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left sidebar with filters and stats */}
        <div className="space-y-4">
          <Card className="p-4">
            <h3 className="font-medium mb-3">Route Filters</h3>
            
            <div className="space-y-3">
              <div className="space-y-1">
                <label className="text-sm text-muted-foreground">Vehicle</label>
                <Select value={selectedVehicle} onValueChange={setSelectedVehicle}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select vehicle" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Vehicles</SelectItem>
                    <SelectItem value="truck-001">Truck 001 - Toyota</SelectItem>
                    <SelectItem value="truck-002">Truck 002 - Ford</SelectItem>
                    <SelectItem value="truck-003">Truck 003 - Mercedes</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-1">
                <label className="text-sm text-muted-foreground">Date</label>
                <Select defaultValue="today">
                  <SelectTrigger>
                    <SelectValue placeholder="Select date" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="today">Today</SelectItem>
                    <SelectItem value="tomorrow">Tomorrow</SelectItem>
                    <SelectItem value="week">Next 7 days</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-1">
                <label className="text-sm text-muted-foreground">Priority</label>
                <Select defaultValue="all">
                  <SelectTrigger>
                    <SelectValue placeholder="Select priority" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Priorities</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="low">Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <Button 
                onClick={handleOptimize}
                className="w-full mt-2 bg-gradient-to-r from-deep-blue to-neon-blue flex gap-2" 
                disabled={isOptimizing}
              >
                {isOptimizing ? (
                  <>
                    <RefreshCcw className="h-4 w-4 animate-spinner" />
                    <span>Optimizing...</span>
                  </>
                ) : (
                  <>
                    <BarChart3 className="h-4 w-4" />
                    <span>Optimize Routes</span>
                  </>
                )}
              </Button>
            </div>
          </Card>
          
          <Card className="p-4">
            <h3 className="font-medium mb-3">Optimization Stats</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">Time Saved</span>
                <span className="font-bold text-neon-blue">25%</span>
              </div>
              <div className="w-full h-2 bg-muted rounded-full">
                <div className="h-full bg-neon-blue rounded-full animate-pulse" style={{ width: "25%" }}></div>
              </div>
              
              <div className="flex justify-between items-center mt-4">
                <span className="text-sm">Fuel Saved</span>
                <span className="font-bold text-deep-blue">18%</span>
              </div>
              <div className="w-full h-2 bg-muted rounded-full">
                <div className="h-full bg-deep-blue rounded-full animate-pulse" style={{ width: "18%" }}></div>
              </div>
              
              <div className="flex justify-between items-center mt-4">
                <span className="text-sm">CO₂ Reduced</span>
                <span className="font-bold text-success">21%</span>
              </div>
              <div className="w-full h-2 bg-muted rounded-full">
                <div className="h-full bg-success rounded-full animate-pulse" style={{ width: "21%" }}></div>
              </div>
            </div>
          </Card>
        </div>
        
        {/* Main map area */}
        <div className="col-span-2">
          <Tabs defaultValue="map">
            <TabsList className="w-full mb-4">
              <TabsTrigger value="map" className="flex-1">Map View</TabsTrigger>
              <TabsTrigger value="list" className="flex-1">List View</TabsTrigger>
              <TabsTrigger value="comparison" className="flex-1">Comparison</TabsTrigger>
            </TabsList>
            
            <TabsContent value="map">
              <Card className="h-[600px] overflow-hidden relative">
                {/* Map placeholder with route animation */}
                <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    {/* This would be replaced by an actual map */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-xl shadow-xl text-center">
                      <MapPin className="h-12 w-12 text-deep-blue mx-auto mb-3" />
                      <h3 className="text-xl font-bold">Interactive Route Map</h3>
                      <p className="text-muted-foreground mb-4">
                        Showing optimized routes across Dubai
                      </p>
                      
                      {/* Animated route line */}
                      <svg width="300" height="100" className="mx-auto">
                        <path 
                          d="M20,50 C50,30 100,80 150,50 S250,30 280,50" 
                          fill="none" 
                          stroke="#003087" 
                          strokeWidth="3" 
                          strokeDasharray="1000" 
                          strokeDashoffset="1000" 
                          className="animate-route-trace" 
                        />
                        <circle cx="20" cy="50" r="6" fill="#D4A017" />
                        <circle cx="150" cy="50" r="4" fill="#00A1E4" />
                        <circle cx="280" cy="50" r="6" fill="#D4A017" />
                      </svg>
                      
                      <div className="mt-4 flex justify-between text-sm">
                        <div>
                          <div className="font-semibold">Warehouse</div>
                          <div className="text-xs text-muted-foreground">Starting Point</div>
                        </div>
                        <div>
                          <div className="font-semibold">Destination</div>
                          <div className="text-xs text-muted-foreground">Dubai Marina</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* UAE-inspired background elements */}
                    <div className="absolute bottom-0 left-0 right-0 h-20 bg-contain bg-bottom bg-no-repeat opacity-20"
                      style={{ backgroundImage: "url('https://i.imgur.com/ZKu0J7X.png')" }}>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="list">
              <Card className="p-4">
                <h3 className="font-semibold mb-4">Delivery Schedule</h3>
                <div className="space-y-3">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <div key={item} className="p-3 border rounded-lg flex items-center justify-between hover:bg-muted/50 transition-colors cursor-pointer">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 bg-deep-blue/10 rounded-full flex items-center justify-center">
                          <Truck className="h-5 w-5 text-deep-blue" />
                        </div>
                        <div>
                          <div className="font-medium">Delivery #{1000 + item}</div>
                          <div className="text-xs text-muted-foreground">Downtown Dubai</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="text-right">
                          <div className="text-sm font-medium">11:3{item} AM</div>
                          <div className="text-xs text-success">On Time</div>
                        </div>
                        <Button variant="ghost" size="icon" className="ml-2">
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>
            
            <TabsContent value="comparison">
              <Card className="p-4">
                <h3 className="font-semibold mb-4">Route Comparison</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="text-center p-3 border rounded-lg bg-muted/30">
                      <h4 className="font-medium">Standard Route</h4>
                      <div className="flex justify-center items-center gap-3 mt-3">
                        <Clock className="h-5 w-5 text-muted-foreground" />
                        <span className="font-bold">87 min</span>
                      </div>
                      <div className="mt-2 text-sm text-muted-foreground">16.4 km total distance</div>
                    </div>
                    <div className="h-40 border rounded-lg bg-gray-100 flex items-center justify-center">
                      <div className="text-center">
                        <Calendar className="h-10 w-10 text-muted-foreground mx-auto mb-2" />
                        <div className="text-sm">Standard routing</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="text-center p-3 border rounded-lg bg-neon-blue/10 border-neon-blue">
                      <h4 className="font-medium text-neon-blue">AI-Optimized Route</h4>
                      <div className="flex justify-center items-center gap-3 mt-3">
                        <Clock className="h-5 w-5 text-neon-blue" />
                        <span className="font-bold">65 min</span>
                      </div>
                      <div className="mt-2 text-sm text-success">12.3 km total distance</div>
                    </div>
                    <div className="h-40 border rounded-lg border-neon-blue bg-gray-100 flex items-center justify-center">
                      <div className="text-center">
                        <BarChart3 className="h-10 w-10 text-neon-blue mx-auto mb-2" />
                        <div className="text-sm">AI-optimized routing</div>
                        <div className="mt-2 text-xs flex items-center justify-center text-success font-medium">
                          25% faster delivery time
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default RouteOptimization;

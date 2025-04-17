
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Gauge, Calendar, AlertCircle, CheckCircle2, Wrench, Clock, Settings } from "lucide-react";

const PredictiveMaintenance = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Predictive Maintenance</h1>
        <p className="text-muted-foreground">
          AI-powered maintenance predictions with 95% accuracy to reduce vehicle downtime.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Stats cards */}
        <div className="stats-card p-5 border-l-4 border-l-success">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-medium text-muted-foreground">Accuracy Rate</h3>
            <Gauge className="text-sand-gold" />
          </div>
          <div className="text-2xl font-bold">95%</div>
          <div className="text-xs text-muted-foreground mt-1">
            Based on historical maintenance data
          </div>
        </div>

        <div className="stats-card p-5 border-l-4 border-l-neon-blue">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-medium text-muted-foreground">Annual Savings</h3>
            <Settings className="text-sand-gold" />
          </div>
          <div className="text-2xl font-bold">$134,400</div>
          <div className="text-xs text-muted-foreground mt-1">
            For fleet of 100 vehicles
          </div>
        </div>

        <div className="stats-card p-5 border-l-4 border-l-sand-gold">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-medium text-muted-foreground">Downtime Reduction</h3>
            <Clock className="text-sand-gold" />
          </div>
          <div className="text-2xl font-bold">30%</div>
          <div className="text-xs text-muted-foreground mt-1">
            Compared to reactive maintenance
          </div>
        </div>
      </div>

      {/* Maintenance alerts and schedule */}
      <Card className="p-5">
        <Tabs defaultValue="alerts">
          <TabsList className="w-full mb-4">
            <TabsTrigger value="alerts" className="flex-1">Maintenance Alerts</TabsTrigger>
            <TabsTrigger value="schedule" className="flex-1">Maintenance Schedule</TabsTrigger>
            <TabsTrigger value="history" className="flex-1">Service History</TabsTrigger>
          </TabsList>

          <TabsContent value="alerts">
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-3 bg-red-50 border border-red-200 rounded-lg dark:bg-red-900/20 dark:border-red-900/30">
                <div className="h-12 w-12 bg-red-100 rounded-full flex items-center justify-center dark:bg-red-900/30">
                  <AlertCircle className="h-6 w-6 text-red-600 dark:text-red-400" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-red-700 dark:text-red-400">Urgent: Brake System</h4>
                  <p className="text-sm text-red-600 dark:text-red-300">Truck #007 - Estimated failure in 3 days</p>
                </div>
                <Button variant="destructive">Schedule</Button>
              </div>

              <div className="flex items-center gap-4 p-3 bg-amber-50 border border-amber-200 rounded-lg dark:bg-amber-900/20 dark:border-amber-900/30">
                <div className="h-12 w-12 bg-amber-100 rounded-full flex items-center justify-center dark:bg-amber-900/30">
                  <AlertCircle className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-amber-700 dark:text-amber-400">Warning: Air Filter</h4>
                  <p className="text-sm text-amber-600 dark:text-amber-300">Truck #014 - Estimated failure in 12 days</p>
                </div>
                <Button variant="outline">Schedule</Button>
              </div>

              <div className="flex items-center gap-4 p-3 bg-amber-50 border border-amber-200 rounded-lg dark:bg-amber-900/20 dark:border-amber-900/30">
                <div className="h-12 w-12 bg-amber-100 rounded-full flex items-center justify-center dark:bg-amber-900/30">
                  <AlertCircle className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-amber-700 dark:text-amber-400">Warning: Oil Change</h4>
                  <p className="text-sm text-amber-600 dark:text-amber-300">Truck #022 - Scheduled in 15 days</p>
                </div>
                <Button variant="outline">Schedule</Button>
              </div>

              <div className="flex items-center gap-4 p-3 bg-green-50 border border-green-200 rounded-lg dark:bg-green-900/20 dark:border-green-900/30">
                <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center dark:bg-green-900/30">
                  <CheckCircle2 className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-green-700 dark:text-green-400">Healthy: All Systems</h4>
                  <p className="text-sm text-green-600 dark:text-green-300">Other vehicles - No immediate actions required</p>
                </div>
                <Button variant="outline" disabled>Schedule</Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="schedule">
            <div className="space-y-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex items-center gap-4 p-3 border rounded-lg hover:bg-muted/50 transition-all duration-200">
                  <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">Truck #{`00${i}`} - Standard Service</h4>
                    <p className="text-sm text-muted-foreground">Scheduled for {i === 1 ? 'Tomorrow' : `${i * 3} days from now`}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">Reschedule</Button>
                    <Button size="sm">Details</Button>
                  </div>
                </div>
              ))}

              <div className="mt-6 text-center">
                <Button className="bg-gradient-to-r from-deep-blue to-neon-blue hover:shadow-glow-blue gap-2">
                  <Wrench className="h-4 w-4" />
                  <span>Schedule New Maintenance</span>
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="history">
            <div className="relative">
              {/* This would be replaced by an actual chart */}
              <div className="h-80 bg-muted/30 rounded-lg flex items-center justify-center">
                <div className="text-center p-8">
                  <Gauge className="h-12 w-12 text-deep-blue mx-auto mb-3" />
                  <h3 className="text-xl font-bold">Maintenance Cost Savings</h3>
                  <p className="text-muted-foreground mb-4">
                    Before vs After AI Implementation
                  </p>
                  
                  {/* Simple animated bar chart */}
                  <div className="flex items-end h-24 gap-6 justify-center">
                    <div className="flex flex-col items-center">
                      <div className="h-full w-16 bg-muted rounded-t-md flex items-end">
                        <div className="w-full bg-muted-foreground h-[90%] rounded-t-md"></div>
                      </div>
                      <div className="mt-2 text-sm">Before</div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="h-full w-16 bg-muted rounded-t-md flex items-end">
                        <div className="w-full bg-neon-blue h-[63%] rounded-t-md animate-pulse"></div>
                      </div>
                      <div className="mt-2 text-sm">After</div>
                    </div>
                  </div>
                  <div className="mt-4 text-success font-medium">
                    30% Reduction in Maintenance Costs
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
};

export default PredictiveMaintenance;

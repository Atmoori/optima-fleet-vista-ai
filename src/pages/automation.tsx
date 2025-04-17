
import { Atom, Bot, Calendar, Settings } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Automation = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Automation</h1>
        <p className="text-muted-foreground">
          Streamline your operations with intelligent automation tools.
        </p>
      </div>

      {/* Automation Efficiency Stats */}
      <Card className="p-5 border-l-4 border-l-neon-blue">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <Atom className="h-5 w-5 text-neon-blue" />
            Efficiency Improvement
          </h2>
          <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full dark:bg-green-900 dark:text-green-100">
            <span className="font-bold">31%</span> increase
          </div>
        </div>
        <div className="h-2 w-full bg-muted rounded-full mb-6">
          <div className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full" style={{ width: "31%" }}></div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-muted-foreground text-sm">Before Automation</p>
            <p className="text-lg font-medium">167 hours/week</p>
          </div>
          <div>
            <p className="text-muted-foreground text-sm">With Automation</p>
            <p className="text-lg font-medium text-success">115 hours/week</p>
          </div>
        </div>
      </Card>

      {/* Automation Workflows */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <Card className="p-5 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium">Scheduling Automation</h3>
            <Calendar className="h-5 w-5 text-deep-blue" />
          </div>
          <p className="text-muted-foreground text-sm mb-4">
            AI-optimized scheduling for your entire fleet with 25% improved efficiency.
          </p>
          <div className="flex items-center justify-between text-sm">
            <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded dark:bg-blue-900 dark:text-blue-100">Active</span>
            <Button size="sm" variant="outline">Configure</Button>
          </div>
        </Card>

        <Card className="p-5 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium">Dispatch Assistant</h3>
            <Bot className="h-5 w-5 text-deep-blue" />
          </div>
          <p className="text-muted-foreground text-sm mb-4">
            Automated dispatching with real-time traffic and demand prediction.
          </p>
          <div className="flex items-center justify-between text-sm">
            <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded dark:bg-blue-900 dark:text-blue-100">Active</span>
            <Button size="sm" variant="outline">Configure</Button>
          </div>
        </Card>

        <Card className="p-5 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium">Maintenance Workflow</h3>
            <Settings className="h-5 w-5 text-deep-blue" />
          </div>
          <p className="text-muted-foreground text-sm mb-4">
            Automated service reminders and maintenance scheduling.
          </p>
          <div className="flex items-center justify-between text-sm">
            <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-100">Setup Required</span>
            <Button size="sm" variant="outline">Setup</Button>
          </div>
        </Card>
      </div>

      {/* Notification Log */}
      <Card className="p-5">
        <h3 className="font-semibold mb-4">Recent Automated Actions</h3>
        <div className="space-y-4 max-h-64 overflow-y-auto">
          <div className="flex items-start gap-3 pb-3 border-b">
            <div className="h-2 w-2 rounded-full bg-green-500 mt-2"></div>
            <div>
              <p className="font-medium">Vehicle #A12-345 dispatched successfully</p>
              <p className="text-xs text-muted-foreground">Today, 10:23 AM</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3 pb-3 border-b">
            <div className="h-2 w-2 rounded-full bg-green-500 mt-2"></div>
            <div>
              <p className="font-medium">Maintenance scheduled for 5 vehicles</p>
              <p className="text-xs text-muted-foreground">Yesterday, 3:45 PM</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3 pb-3 border-b">
            <div className="h-2 w-2 rounded-full bg-yellow-500 mt-2"></div>
            <div>
              <p className="font-medium">Route recalculated for Vehicle #B78-901</p>
              <p className="text-xs text-muted-foreground">Yesterday, 1:12 PM</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="h-2 w-2 rounded-full bg-green-500 mt-2"></div>
            <div>
              <p className="font-medium">Driver shift optimized for 12 vehicles</p>
              <p className="text-xs text-muted-foreground">04/15/2025, 9:30 AM</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Automation;

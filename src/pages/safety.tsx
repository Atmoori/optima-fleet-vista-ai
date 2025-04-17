
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, AlertTriangle, TrendingDown, Award } from "lucide-react";

const DriverSafety = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Driver Safety Monitoring</h1>
        <p className="text-muted-foreground">
          Monitor driver behavior with AI analysis to reduce accident risks by 60%.
        </p>
      </div>

      {/* Key safety stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="stats-card p-5 border-l-4 border-l-success">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-medium text-muted-foreground">Accident Reduction</h3>
            <TrendingDown className="text-success" />
          </div>
          <div className="text-2xl font-bold">60%</div>
          <div className="text-xs text-muted-foreground mt-1">
            Since implementing AI monitoring
          </div>
        </div>
        
        <div className="stats-card p-5 border-l-4 border-l-deep-blue">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-medium text-muted-foreground">Average Safety Score</h3>
            <Award className="text-sand-gold" />
          </div>
          <div className="text-2xl font-bold">86 / 100</div>
          <div className="text-xs text-muted-foreground mt-1">
            Fleet-wide average score
          </div>
        </div>
        
        <div className="stats-card p-5 border-l-4 border-l-warning">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-medium text-muted-foreground">Harsh Events</h3>
            <AlertTriangle className="text-warning" />
          </div>
          <div className="text-2xl font-bold">-42%</div>
          <div className="text-xs text-muted-foreground mt-1">
            Month-over-month reduction
          </div>
        </div>
        
        <div className="stats-card p-5 border-l-4 border-l-sand-gold">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-medium text-muted-foreground">Training Completion</h3>
            <Shield className="text-neon-blue" />
          </div>
          <div className="text-2xl font-bold">93%</div>
          <div className="text-xs text-muted-foreground mt-1">
            Safety training completion rate
          </div>
        </div>
      </div>
      
      {/* Driver behavior heatmap */}
      <Card className="overflow-hidden">
        <div className="p-5 border-b">
          <h2 className="text-xl font-semibold">Driver Behavior Analysis</h2>
          <p className="text-sm text-muted-foreground">
            Heatmap showing high-risk behaviors across the fleet
          </p>
        </div>
        
        <div className="p-5">
          <div className="grid grid-cols-6 gap-2 mb-4">
            <div className="text-right text-xs text-muted-foreground">Driver ID</div>
            <div className="text-center text-xs text-muted-foreground">Speeding</div>
            <div className="text-center text-xs text-muted-foreground">Harsh Braking</div>
            <div className="text-center text-xs text-muted-foreground">Harsh Accel.</div>
            <div className="text-center text-xs text-muted-foreground">Distraction</div>
            <div className="text-center text-xs text-muted-foreground">Score</div>
          </div>
          
          {/* Driver rows with behavior heatmap cells */}
          {[
            { id: "D001", name: "Ahmed K.", speeding: 1, braking: 2, acceleration: 1, distraction: 1, score: 92 },
            { id: "D002", name: "Fatima S.", speeding: 1, braking: 1, acceleration: 1, distraction: 0, score: 97 },
            { id: "D003", name: "Mohammed A.", speeding: 3, braking: 4, acceleration: 3, distraction: 2, score: 73 },
            { id: "D004", name: "Sara L.", speeding: 2, braking: 1, acceleration: 2, distraction: 0, score: 88 },
            { id: "D005", name: "Omar J.", speeding: 0, braking: 1, acceleration: 0, distraction: 1, score: 96 },
            { id: "D006", name: "Noura K.", speeding: 2, braking: 3, acceleration: 2, distraction: 2, score: 78 },
            { id: "D007", name: "Khalid M.", speeding: 1, braking: 2, acceleration: 1, distraction: 0, score: 90 },
          ].map((driver) => (
            <div key={driver.id} className="grid grid-cols-6 gap-2 py-2 border-b hover:bg-muted/50 cursor-pointer">
              <div className="text-right font-medium flex items-center justify-end gap-2">
                <span>{driver.id}</span>
                <span className="text-sm text-muted-foreground">{driver.name}</span>
              </div>
              
              <HeatmapCell value={driver.speeding} />
              <HeatmapCell value={driver.braking} />
              <HeatmapCell value={driver.acceleration} />
              <HeatmapCell value={driver.distraction} />
              
              <div className="text-center">
                <span className={`px-2 py-1 rounded text-sm font-medium ${
                  driver.score >= 90 ? 'bg-success/20 text-success' : 
                  driver.score >= 80 ? 'bg-warning/20 text-warning' : 
                  'bg-destructive/20 text-destructive'
                }`}>
                  {driver.score}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="p-5 bg-muted/30 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1">
              <div className="w-4 h-4 bg-green-100 border border-green-300"></div>
              <span className="text-xs">Low Risk</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-4 h-4 bg-amber-100 border border-amber-300"></div>
              <span className="text-xs">Medium Risk</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-4 h-4 bg-red-100 border border-red-300"></div>
              <span className="text-xs">High Risk</span>
            </div>
          </div>
          
          <Button className="gap-2">
            <Shield className="h-4 w-4" />
            <span>Driver Training</span>
          </Button>
        </div>
      </Card>
    </div>
  );
};

// Heatmap cell component
const HeatmapCell = ({ value }: { value: number }) => {
  const getBgColor = (val: number) => {
    if (val === 0) return 'bg-green-100 border-green-300 dark:bg-green-900/20 dark:border-green-900/30';
    if (val === 1) return 'bg-green-200 border-green-400 dark:bg-green-900/30 dark:border-green-900/40';
    if (val === 2) return 'bg-amber-100 border-amber-300 dark:bg-amber-900/20 dark:border-amber-900/30';
    if (val === 3) return 'bg-amber-200 border-amber-400 dark:bg-amber-900/30 dark:border-amber-900/40';
    return 'bg-red-100 border-red-300 dark:bg-red-900/20 dark:border-red-900/30';
  };
  
  return (
    <div className="flex justify-center">
      <div 
        className={`w-8 h-8 flex items-center justify-center border ${getBgColor(value)}`}
      >
        {value}
      </div>
    </div>
  );
};

export default DriverSafety;

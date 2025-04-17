
import { CheckCircle, FileCheck, Lock, Shield, ThumbsUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Compliance = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Compliance & Security</h1>
        <p className="text-muted-foreground">
          Ensure adherence to UAE regulations and maintain data security.
        </p>
      </div>

      {/* Compliance Status */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <Card className="p-5 bg-green-50 border-green-200 dark:bg-green-950 dark:border-green-800">
          <div className="flex flex-col items-center text-green-700 dark:text-green-400">
            <CheckCircle className="h-10 w-10 mb-3" />
            <h3 className="font-semibold mb-1">UAE Data Privacy</h3>
            <p className="text-xs text-center">Compliant with UAE Data Protection Law</p>
            <div className="mt-3 text-xs bg-green-100 text-green-800 px-3 py-1 rounded-full dark:bg-green-900 dark:text-green-100">
              Fully Compliant
            </div>
          </div>
        </Card>
        
        <Card className="p-5 bg-green-50 border-green-200 dark:bg-green-950 dark:border-green-800">
          <div className="flex flex-col items-center text-green-700 dark:text-green-400">
            <Shield className="h-10 w-10 mb-3" />
            <h3 className="font-semibold mb-1">Security Standards</h3>
            <p className="text-xs text-center">ISO 27001 Security Certification</p>
            <div className="mt-3 text-xs bg-green-100 text-green-800 px-3 py-1 rounded-full dark:bg-green-900 dark:text-green-100">
              Certified
            </div>
          </div>
        </Card>
        
        <Card className="p-5 bg-yellow-50 border-yellow-200 dark:bg-yellow-950 dark:border-yellow-800">
          <div className="flex flex-col items-center text-yellow-700 dark:text-yellow-400">
            <FileCheck className="h-10 w-10 mb-3" />
            <h3 className="font-semibold mb-1">Regulatory Reports</h3>
            <p className="text-xs text-center">Monthly reporting to UAE Transport Authority</p>
            <div className="mt-3 text-xs bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full dark:bg-yellow-900 dark:text-yellow-100">
              Due in 3 days
            </div>
          </div>
        </Card>
        
        <Card className="p-5 bg-green-50 border-green-200 dark:bg-green-950 dark:border-green-800">
          <div className="flex flex-col items-center text-green-700 dark:text-green-400">
            <ThumbsUp className="h-10 w-10 mb-3" />
            <h3 className="font-semibold mb-1">Driver Verification</h3>
            <p className="text-xs text-center">UAE ID Verification for all drivers</p>
            <div className="mt-3 text-xs bg-green-100 text-green-800 px-3 py-1 rounded-full dark:bg-green-900 dark:text-green-100">
              100% Verified
            </div>
          </div>
        </Card>
      </div>

      {/* Audit Trail */}
      <Card>
        <div className="p-5 border-b">
          <h2 className="font-semibold flex items-center gap-2">
            <Lock className="h-5 w-5 text-deep-blue" />
            Security Audit Trail
          </h2>
          <p className="text-sm text-muted-foreground">
            Access logs and security events for compliance monitoring
          </p>
        </div>

        <div className="p-5">
          <div className="space-y-6">
            {/* Today */}
            <div>
              <h3 className="text-sm font-medium mb-3">Today</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-blue-500 mt-2"></div>
                  <div>
                    <p className="text-sm">Data accessed by <span className="font-medium">Ahmed Al Mansoori</span></p>
                    <p className="text-xs text-muted-foreground">10:23 AM • Fleet Performance Reports</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-green-500 mt-2"></div>
                  <div>
                    <p className="text-sm">System backup completed successfully</p>
                    <p className="text-xs text-muted-foreground">09:00 AM • Automated Process</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-blue-500 mt-2"></div>
                  <div>
                    <p className="text-sm">Data accessed by <span className="font-medium">Sarah Al Khouri</span></p>
                    <p className="text-xs text-muted-foreground">08:45 AM • Driver Safety Reports</p>
                  </div>
                </div>
              </div>
            </div>
            
            <Separator />
            
            {/* Yesterday */}
            <div>
              <h3 className="text-sm font-medium mb-3">Yesterday</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-yellow-500 mt-2"></div>
                  <div>
                    <p className="text-sm">Failed login attempt from unrecognized IP</p>
                    <p className="text-xs text-muted-foreground">11:45 PM • IP: 185.76.xxx.xx</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-blue-500 mt-2"></div>
                  <div>
                    <p className="text-sm">Data exported by <span className="font-medium">Mohammed Al Hashemi</span></p>
                    <p className="text-xs text-muted-foreground">03:22 PM • Fuel Usage Reports</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-green-500 mt-2"></div>
                  <div>
                    <p className="text-sm">Security scan completed</p>
                    <p className="text-xs text-muted-foreground">10:00 AM • No issues found</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Data Privacy Notice */}
          <div className="mt-8 bg-deep-blue/5 p-4 rounded-md border border-deep-blue/10">
            <div className="flex items-start gap-3">
              <div>
                <Lock className="h-5 w-5 text-deep-blue" />
              </div>
              <div>
                <h4 className="font-medium text-sm">Secure Access Only</h4>
                <p className="text-xs text-muted-foreground mt-1">
                  All data access is logged and monitored. This system complies with UAE Federal Decree Law No. 45 of 2021 regarding personal data protection.
                  Only authorized AWR fleet managers have access to this information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Compliance;

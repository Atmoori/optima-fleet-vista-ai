import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/layout";

// Pages
import Dashboard from "./pages/Index";
import RouteOptimization from "./pages/routes";
import PredictiveMaintenance from "./pages/maintenance";
import DriverSafety from "./pages/safety";
import Automation from "./pages/automation";
import RealTimeData from "./pages/data";
import Compliance from "./pages/compliance";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <Layout>
              <Dashboard />
            </Layout>
          } />
          <Route path="/routes" element={
            <Layout>
              <RouteOptimization />
            </Layout>
          } />
          <Route path="/maintenance" element={
            <Layout>
              <PredictiveMaintenance />
            </Layout>
          } />
          <Route path="/safety" element={
            <Layout>
              <DriverSafety />
            </Layout>
          } />
          <Route path="/automation" element={
            <Layout>
              <Automation />
            </Layout>
          } />
          <Route path="/data" element={
            <Layout>
              <RealTimeData />
            </Layout>
          } />
          <Route path="/compliance" element={
            <Layout>
              <Compliance />
            </Layout>
          } />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BottomNav } from "@/components/BottomNav";
import SimulatorPage from "./pages/SimulatorPage";
import WalletPage from "./pages/WalletPage";
import ComparePage from "./pages/ComparePage";
import TimelinePage from "./pages/TimelinePage";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";

const queryClient = new QueryClient();

const AppContent = () => {
  // Apply dark mode by default (stored preference handled in hook)
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<SimulatorPage />} />
        <Route path="/wallet" element={<WalletPage />} />
        <Route path="/compare" element={<ComparePage />} />
        <Route path="/timeline" element={<TimelinePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <BottomNav />
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

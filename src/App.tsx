
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import FAQ from "./pages/FAQ";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Pricing from "./pages/Pricing";

// Feature pages
import JobDescriptions from "./pages/features/JobDescriptions";
import ResumeScreening from "./pages/features/ResumeScreening";
import SkillsAssessments from "./pages/features/SkillsAssessments";
import CandidateDashboard from "./pages/features/CandidateDashboard";

// Case study pages
import MitrWork from "./pages/case-studies/MitrWork";
import SoloFounder from "./pages/case-studies/SoloFounder";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Index />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/pricing" element={<Pricing />} />
          
          {/* Feature Pages */}
          <Route path="/features/job-descriptions" element={<JobDescriptions />} />
          <Route path="/features/resume-screening" element={<ResumeScreening />} />
          <Route path="/features/skills-assessments" element={<SkillsAssessments />} />
          <Route path="/features/candidate-dashboard" element={<CandidateDashboard />} />
          
          {/* Case Study Pages */}
          <Route path="/case-studies/mitr-work" element={<MitrWork />} />
          <Route path="/case-studies/solo-founder" element={<SoloFounder />} />
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

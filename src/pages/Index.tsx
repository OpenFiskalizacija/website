import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Phases from "@/components/Phases";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Construction } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Development Banner */}
      <div className="sticky top-0 z-50 w-full bg-amber-500/90 backdrop-blur-sm border-b border-amber-600">
        <div className="container flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-amber-950">
          <Construction className="w-4 h-4" />
          <span>Projekt je u razvoju i nije spreman za upotrebu</span>
          <Badge
            variant="outline"
            className="ml-2 border-amber-700 text-amber-900 text-xs"
          >
            Alpha
          </Badge>
        </div>
      </div>
      <Hero />
      <Features />
      <Phases />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;

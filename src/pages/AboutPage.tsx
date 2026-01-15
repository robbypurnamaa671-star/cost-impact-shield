import { PageLayout } from '@/components/PageLayout';
import { Info, Target, Users, BookOpen, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const AboutPage = () => {
  const navigate = useNavigate();
  
  return (
    <PageLayout title="About" subtitle="Crisis Impact Calculator">
      <Button 
        variant="ghost" 
        size="sm" 
        onClick={() => navigate(-1)}
        className="mb-4 -ml-2"
      >
        <ArrowLeft className="w-4 h-4 mr-1" />
        Back
      </Button>
      
      <div className="space-y-6">
        {/* App Info Card */}
        <div className="p-5 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded-lg bg-primary/20">
              <Info className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-foreground">Crisis Impact Calculator</h2>
              <p className="text-xs text-muted-foreground">Version 1.0.0</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            An educational tool designed to help users understand how global events 
            and economic crises can impact everyday living costs.
          </p>
        </div>

        {/* Mission */}
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-accent/50 mt-0.5">
              <Target className="w-5 h-5 text-accent-foreground" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">Our Mission</h3>
              <p className="text-sm text-muted-foreground">
                To provide accessible financial education through interactive simulations, 
                helping people understand economic concepts and prepare for potential 
                market changes.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-accent/50 mt-0.5">
              <Users className="w-5 h-5 text-accent-foreground" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">Who It's For</h3>
              <p className="text-sm text-muted-foreground">
                Anyone interested in understanding how global events affect personal 
                finances—students, professionals, families, and curious minds alike.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-accent/50 mt-0.5">
              <BookOpen className="w-5 h-5 text-accent-foreground" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">Educational Focus</h3>
              <p className="text-sm text-muted-foreground">
                All content is presented for educational purposes. We use historical data 
                and economic models to create realistic simulations, but these should not 
                be treated as financial predictions or advice.
              </p>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="p-4 rounded-lg bg-card border border-border">
          <h3 className="font-semibold text-foreground mb-3">Key Features</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Interactive spending impact simulator
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Personal wallet impact calculator
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Country-by-country comparisons
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Historical crisis timeline analysis
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Educational insights and key takeaways
            </li>
          </ul>
        </div>

        {/* Disclaimer */}
        <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20">
          <p className="text-xs text-destructive">
            <strong>Disclaimer:</strong> This app provides educational estimates, not financial 
            advice. All simulations are based on simplified models and historical patterns. 
            Consult qualified professionals for actual financial decisions.
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default AboutPage;

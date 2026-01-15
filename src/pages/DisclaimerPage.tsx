import { PageLayout } from '@/components/PageLayout';
import { AlertTriangle, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const DisclaimerPage = () => {
  const navigate = useNavigate();
  
  return (
    <PageLayout title="Disclaimer" subtitle="Important information">
      <Button 
        variant="ghost" 
        size="sm" 
        onClick={() => navigate(-1)}
        className="mb-4 -ml-2"
      >
        <ArrowLeft className="w-4 h-4 mr-1" />
        Back
      </Button>
      
      <div className="space-y-6 text-sm text-muted-foreground">
        <div className="flex items-center gap-3 p-4 rounded-lg bg-amber-500/10 border border-amber-500/20">
          <AlertTriangle className="w-8 h-8 text-amber-500" />
          <p className="text-foreground font-medium">
            Please read this disclaimer carefully before using the app.
          </p>
        </div>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">Educational Purpose Only</h2>
          <p>
            Crisis Impact Calculator is designed exclusively for educational and informational 
            purposes. The app uses simplified economic models and historical data to create 
            simulations that help users understand potential impacts of economic events.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">Not Financial Advice</h2>
          <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20">
            <p className="text-destructive font-medium">
              This application does NOT provide:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-destructive/80">
              <li>Financial advice or recommendations</li>
              <li>Investment guidance or strategies</li>
              <li>Tax or legal advice</li>
              <li>Predictions of future market performance</li>
              <li>Guaranteed outcomes or results</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">Simplified Models</h2>
          <p>
            The calculations and simulations in this app are based on simplified economic models. 
            Real-world economic conditions are significantly more complex and influenced by 
            countless factors that cannot be fully captured in any simulation.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">Historical Data Limitations</h2>
          <p>
            While we reference historical events and data, past performance and patterns do not 
            guarantee future results. Each economic situation is unique, and historical comparisons 
            have inherent limitations.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">No Political Agenda</h2>
          <p>
            This app is strictly educational and does not promote any political viewpoint, 
            ideology, or agenda. The information presented is intended to be neutral and 
            fact-based, focusing solely on economic education.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">Professional Consultation</h2>
          <p>
            For any financial decisions, we strongly recommend consulting with:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Licensed financial advisors</li>
            <li>Certified public accountants</li>
            <li>Qualified investment professionals</li>
            <li>Legal professionals when appropriate</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">User Responsibility</h2>
          <p>
            Users are solely responsible for any decisions made based on information from this 
            app. We accept no liability for any financial losses, damages, or consequences 
            resulting from the use of this application.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">Accuracy</h2>
          <p>
            While we strive for accuracy, we do not warrant that all information is complete, 
            current, or error-free. Economic data and conditions change frequently, and the 
            app may not reflect the most recent developments.
          </p>
        </section>

        <div className="p-4 rounded-lg bg-primary/10 border border-primary/20 mt-6">
          <p className="text-center text-foreground font-medium">
            By using this app, you acknowledge that you have read, understood, and agree 
            to this disclaimer.
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default DisclaimerPage;

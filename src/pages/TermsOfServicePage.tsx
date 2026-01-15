import { PageLayout } from '@/components/PageLayout';
import { FileText, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const TermsOfServicePage = () => {
  const navigate = useNavigate();
  
  return (
    <PageLayout title="Terms of Service" subtitle="Last updated: January 2025">
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
        <div className="flex items-center gap-3 p-4 rounded-lg bg-accent/50 border border-border">
          <FileText className="w-8 h-8 text-accent-foreground" />
          <p className="text-foreground font-medium">
            By using Crisis Impact Calculator, you agree to these terms.
          </p>
        </div>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">1. Acceptance of Terms</h2>
          <p>
            By downloading, installing, or using Crisis Impact Calculator ("the App"), you agree 
            to be bound by these Terms of Service. If you do not agree to these terms, please do 
            not use the App.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">2. Educational Purpose</h2>
          <p>
            The App is designed for educational and informational purposes only. It provides 
            simulations and estimates based on historical data and general economic principles.
          </p>
          <div className="mt-3 p-3 rounded-lg bg-destructive/10 border border-destructive/20">
            <p className="text-destructive font-medium">
              Important: This app does not provide financial, investment, or professional advice. 
              All calculations are estimates for educational purposes only.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">3. No Financial Advice</h2>
          <p>
            Nothing in this App should be construed as financial, investment, tax, or legal advice. 
            The simulations and projections are hypothetical and based on simplified models. Always 
            consult with qualified professionals for financial decisions.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">4. Accuracy of Information</h2>
          <p>
            While we strive to provide accurate and up-to-date information, we make no warranties 
            about the completeness, reliability, or accuracy of the data presented. Economic 
            conditions are complex and unpredictable.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">5. User Responsibilities</h2>
          <p>You agree to:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Use the App only for lawful purposes</li>
            <li>Not rely solely on the App for financial decisions</li>
            <li>Understand that simulations are estimates, not predictions</li>
            <li>Not redistribute or modify the App without permission</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">6. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, we shall not be liable for any indirect, 
            incidental, special, consequential, or punitive damages resulting from your use of 
            or inability to use the App.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">7. Intellectual Property</h2>
          <p>
            All content, features, and functionality of the App are owned by us and are protected 
            by international copyright, trademark, and other intellectual property laws.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">8. Updates and Changes</h2>
          <p>
            We reserve the right to modify or discontinue the App at any time. We may also update 
            these Terms of Service, and continued use of the App constitutes acceptance of any changes.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">9. Governing Law</h2>
          <p>
            These terms shall be governed by and construed in accordance with applicable laws, 
            without regard to conflict of law principles.
          </p>
        </section>
      </div>
    </PageLayout>
  );
};

export default TermsOfServicePage;

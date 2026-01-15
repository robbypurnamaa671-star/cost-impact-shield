import { PageLayout } from '@/components/PageLayout';
import { Shield, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const PrivacyPolicyPage = () => {
  const navigate = useNavigate();
  
  return (
    <PageLayout title="Privacy Policy" subtitle="Last updated: January 2025">
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
        <div className="flex items-center gap-3 p-4 rounded-lg bg-primary/10 border border-primary/20">
          <Shield className="w-8 h-8 text-primary" />
          <p className="text-foreground font-medium">
            Your privacy is important to us. This app is designed with privacy-first principles.
          </p>
        </div>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">Data Collection</h2>
          <p>
            Crisis Impact Calculator is designed to operate primarily on your device. We collect minimal data:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>No personal information is required to use the app</li>
            <li>Your simulation settings are stored locally on your device</li>
            <li>We do not track your individual calculations or results</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">Analytics</h2>
          <p>
            We may collect anonymous usage statistics to improve the app experience. This includes:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>App crashes and error reports</li>
            <li>General feature usage patterns</li>
            <li>Device type and operating system version</li>
          </ul>
          <p className="mt-2">
            This data is aggregated and cannot be used to identify individual users.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">Local Storage</h2>
          <p>
            The app stores your preferences and saved simulations locally on your device using 
            standard browser/app storage. This data never leaves your device unless you choose 
            to share it.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">Third-Party Services</h2>
          <p>
            The app may use third-party services for analytics and crash reporting. These services 
            have their own privacy policies and data handling practices.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">Data Security</h2>
          <p>
            We implement appropriate security measures to protect any data processed by the app. 
            Since most data is stored locally, you maintain control over your information.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">Children's Privacy</h2>
          <p>
            This app is intended for general audiences interested in financial education. We do not 
            knowingly collect personal information from children under 13.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">Changes to This Policy</h2>
          <p>
            We may update this privacy policy from time to time. Any changes will be reflected 
            in the "Last updated" date at the top of this page.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">Contact Us</h2>
          <p>
            If you have questions about this privacy policy, please contact us through the 
            Contact page in the app.
          </p>
        </section>
      </div>
    </PageLayout>
  );
};

export default PrivacyPolicyPage;

import { PageLayout } from '@/components/PageLayout';
import { Mail, MessageSquare, Bug, Lightbulb, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const ContactPage = () => {
  const navigate = useNavigate();
  
  return (
    <PageLayout title="Contact & Support" subtitle="We'd love to hear from you">
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
        <div className="flex items-center gap-3 p-4 rounded-lg bg-primary/10 border border-primary/20">
          <Mail className="w-8 h-8 text-primary" />
          <div>
            <p className="text-foreground font-medium">Get in Touch</p>
            <p className="text-sm text-muted-foreground">
              We welcome your feedback and questions
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="p-4 rounded-lg bg-card border border-border">
            <div className="flex items-center gap-3 mb-2">
              <MessageSquare className="w-5 h-5 text-primary" />
              <h3 className="font-semibold text-foreground">General Inquiries</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              Questions about the app, its features, or how to use it? We're here to help.
            </p>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => window.open('mailto:support@crisisimpact.app', '_blank')}
            >
              <Mail className="w-4 h-4 mr-2" />
              support@crisisimpact.app
            </Button>
          </div>

          <div className="p-4 rounded-lg bg-card border border-border">
            <div className="flex items-center gap-3 mb-2">
              <Bug className="w-5 h-5 text-destructive" />
              <h3 className="font-semibold text-foreground">Report a Bug</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              Found something that's not working correctly? Let us know so we can fix it.
            </p>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => window.open('mailto:bugs@crisisimpact.app?subject=Bug Report', '_blank')}
            >
              <Mail className="w-4 h-4 mr-2" />
              bugs@crisisimpact.app
            </Button>
          </div>

          <div className="p-4 rounded-lg bg-card border border-border">
            <div className="flex items-center gap-3 mb-2">
              <Lightbulb className="w-5 h-5 text-amber-500" />
              <h3 className="font-semibold text-foreground">Feature Requests</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              Have an idea for a new feature or improvement? We'd love to hear it!
            </p>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => window.open('mailto:ideas@crisisimpact.app?subject=Feature Request', '_blank')}
            >
              <Mail className="w-4 h-4 mr-2" />
              ideas@crisisimpact.app
            </Button>
          </div>
        </div>

        <div className="p-4 rounded-lg bg-accent/50 border border-border">
          <h3 className="font-semibold text-foreground mb-2">Response Time</h3>
          <p className="text-sm text-muted-foreground">
            We aim to respond to all inquiries within 48-72 hours during business days. 
            Thank you for your patience!
          </p>
        </div>

        <div className="p-4 rounded-lg bg-muted/50 border border-border">
          <h3 className="font-semibold text-foreground mb-2">Before Contacting</h3>
          <p className="text-sm text-muted-foreground mb-2">
            Please check these resources first:
          </p>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li 
              className="flex items-center gap-2 cursor-pointer hover:text-foreground transition-colors"
              onClick={() => navigate('/about')}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              About page for app information
            </li>
            <li 
              className="flex items-center gap-2 cursor-pointer hover:text-foreground transition-colors"
              onClick={() => navigate('/disclaimer')}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Disclaimer for usage guidelines
            </li>
            <li 
              className="flex items-center gap-2 cursor-pointer hover:text-foreground transition-colors"
              onClick={() => navigate('/privacy')}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Privacy Policy for data questions
            </li>
          </ul>
        </div>
      </div>
    </PageLayout>
  );
};

export default ContactPage;

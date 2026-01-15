import { forwardRef, ReactNode } from 'react';

interface ShareableCardProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
  className?: string;
}

export const ShareableCard = forwardRef<HTMLDivElement, ShareableCardProps>(
  ({ children, title, subtitle, className = '' }, ref) => {
    return (
      <div
        ref={ref}
        className={`p-5 rounded-2xl bg-card border border-border ${className}`}
      >
        {/* Branding header for shared image */}
        <div className="flex items-center justify-between mb-4 pb-3 border-b border-border">
          <div>
            <h3 className="font-bold text-foreground text-lg">{title}</h3>
            {subtitle && (
              <p className="text-xs text-muted-foreground">{subtitle}</p>
            )}
          </div>
          <div className="text-right">
            <div className="text-xs font-medium text-primary">Crisis Impact</div>
            <div className="text-[10px] text-muted-foreground">Calculator</div>
          </div>
        </div>
        
        {/* Content */}
        {children}
        
        {/* Footer watermark */}
        <div className="mt-4 pt-3 border-t border-border flex items-center justify-between">
          <p className="text-[10px] text-muted-foreground">
            Educational estimates only • Not financial advice
          </p>
          <p className="text-[10px] text-muted-foreground font-medium">
            crisisimpact.app
          </p>
        </div>
      </div>
    );
  }
);

ShareableCard.displayName = 'ShareableCard';

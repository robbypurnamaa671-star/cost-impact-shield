import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface PageLayoutProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export const PageLayout = ({ title, subtitle, children, className }: PageLayoutProps) => {
  return (
    <div className={cn('min-h-screen bg-background pb-24', className)}>
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="max-w-md mx-auto px-4 py-4">
          <h1 className="text-xl font-bold text-foreground">{title}</h1>
          {subtitle && (
            <p className="text-sm text-muted-foreground mt-0.5">{subtitle}</p>
          )}
        </div>
      </header>
      
      {/* Content */}
      <main className="max-w-md mx-auto px-4 py-4">
        {children}
      </main>
    </div>
  );
};

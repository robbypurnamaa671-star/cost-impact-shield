import { TimelineEvent } from '@/data/historicalCrises';
import { cn } from '@/lib/utils';
import { Fuel, Apple, DollarSign, Smartphone, AlertCircle } from 'lucide-react';

interface TimelineCardProps {
  events: TimelineEvent[];
  className?: string;
}

const categoryIcons = {
  fuel: Fuel,
  food: Apple,
  currency: DollarSign,
  electronics: Smartphone,
  general: AlertCircle,
};

const categoryColors = {
  fuel: 'bg-chart-fuel/10 text-chart-fuel border-chart-fuel/30',
  food: 'bg-chart-food/10 text-chart-food border-chart-food/30',
  currency: 'bg-chart-currency/10 text-chart-currency border-chart-currency/30',
  electronics: 'bg-chart-electronics/10 text-chart-electronics border-chart-electronics/30',
  general: 'bg-muted text-muted-foreground border-border',
};

export const TimelineCard = ({ events, className }: TimelineCardProps) => {
  return (
    <div className={cn('relative', className)}>
      {/* Timeline line */}
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />
      
      <div className="space-y-4">
        {events.map((event, index) => {
          const Icon = categoryIcons[event.category];
          const colorClass = categoryColors[event.category];
          
          return (
            <div 
              key={index} 
              className="relative flex items-start gap-4 pl-10 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Timeline dot */}
              <div className={cn(
                'absolute left-2.5 w-3 h-3 rounded-full border-2 border-background',
                event.category === 'general' ? 'bg-muted-foreground' : `bg-${categoryColors[event.category].split(' ')[1].replace('text-', '')}`
              )} 
              style={{ 
                backgroundColor: event.category === 'fuel' ? 'hsl(var(--chart-fuel))' :
                                 event.category === 'food' ? 'hsl(var(--chart-food))' :
                                 event.category === 'currency' ? 'hsl(var(--chart-currency))' :
                                 event.category === 'electronics' ? 'hsl(var(--chart-electronics))' :
                                 'hsl(var(--muted-foreground))'
              }}
              />
              
              <div className="flex-1 stat-card !p-3">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <div className="flex items-center gap-2">
                    <div className={cn('p-1.5 rounded-md border', colorClass)}>
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs font-medium text-muted-foreground">{event.time}</span>
                  </div>
                  {event.impact && (
                    <span className={cn(
                      'text-xs font-bold px-2 py-0.5 rounded-full',
                      event.impact.startsWith('+') ? 'bg-destructive/10 text-destructive' :
                      event.impact.startsWith('-') ? 'bg-impact-high/10 text-impact-high' :
                      'bg-muted text-muted-foreground'
                    )}>
                      {event.impact}
                    </span>
                  )}
                </div>
                <p className="text-sm text-foreground">{event.event}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

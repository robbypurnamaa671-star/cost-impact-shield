import { crisisTypes, CrisisType } from '@/data/crisisTypes';
import { cn } from '@/lib/utils';
import { Flame, Globe, Ban, Zap, Ship, Coins, TrendingUp, Landmark, Unplug, Pickaxe, LucideIcon } from 'lucide-react';

interface CrisisSelectorProps {
  value: string;
  onChange: (id: string) => void;
  className?: string;
}

const iconMap: Record<string, LucideIcon> = {
  Flame,
  Globe,
  Ban,
  Zap,
  Ship,
  Coins,
  TrendingUp,
  Landmark,
  Unplug,
  Pickaxe,
};

export const CrisisSelector = ({ value, onChange, className }: CrisisSelectorProps) => {
  return (
    <div className={cn('space-y-2', className)}>
      <label className="block text-sm font-medium text-muted-foreground mb-3">
        Select Crisis Type
      </label>
      
      <div className="grid grid-cols-1 gap-2">
        {crisisTypes.map(crisis => {
          const Icon = iconMap[crisis.icon] || Globe;
          const isSelected = value === crisis.id;
          
          return (
            <button
              key={crisis.id}
              onClick={() => onChange(crisis.id)}
              className={cn(
                'flex items-start gap-3 p-3 rounded-lg text-left transition-all duration-200',
                'border',
                isSelected 
                  ? 'bg-primary/10 border-primary/50 shadow-glow' 
                  : 'bg-card border-border hover:border-primary/30 hover:bg-muted/50'
              )}
            >
              <div className={cn(
                'p-2 rounded-lg shrink-0',
                isSelected ? 'bg-primary/20' : 'bg-muted'
              )}>
                <Icon className={cn('w-5 h-5', isSelected ? 'text-primary' : 'text-muted-foreground')} />
              </div>
              <div className="min-w-0">
                <div className={cn('font-medium', isSelected ? 'text-primary' : 'text-foreground')}>
                  {crisis.name}
                </div>
                <p className="text-xs text-muted-foreground line-clamp-2 mt-0.5">
                  {crisis.description}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

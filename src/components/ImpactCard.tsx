import { ImpactLevel } from '@/lib/simulation';
import { cn } from '@/lib/utils';
import { Fuel, Apple, DollarSign, Smartphone, LucideIcon } from 'lucide-react';

interface ImpactCardProps {
  category: 'fuel' | 'food' | 'currency' | 'electronics';
  level: ImpactLevel;
  minChange: number;
  maxChange: number;
  explanation: string;
  className?: string;
}

const categoryConfig: Record<string, { icon: LucideIcon; label: string; colorVar: string }> = {
  fuel: { icon: Fuel, label: 'Fuel Prices', colorVar: 'chart-fuel' },
  food: { icon: Apple, label: 'Food Prices', colorVar: 'chart-food' },
  currency: { icon: DollarSign, label: 'Currency Strength', colorVar: 'chart-currency' },
  electronics: { icon: Smartphone, label: 'Electronics & Imports', colorVar: 'chart-electronics' },
};

const levelColors: Record<ImpactLevel, string> = {
  low: 'bg-impact-low/10 border-impact-low/30 text-impact-low',
  medium: 'bg-impact-medium/10 border-impact-medium/30 text-impact-medium',
  high: 'bg-impact-high/10 border-impact-high/30 text-impact-high',
  severe: 'bg-impact-severe/10 border-impact-severe/30 text-impact-severe',
};

const levelTextColors: Record<ImpactLevel, string> = {
  low: 'text-impact-low',
  medium: 'text-impact-medium',
  high: 'text-impact-high',
  severe: 'text-impact-severe',
};

export const ImpactCard = ({ category, level, minChange, maxChange, explanation, className }: ImpactCardProps) => {
  const config = categoryConfig[category];
  const Icon = config.icon;
  
  return (
    <div className={cn('stat-card animate-fade-in', className)}>
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className={cn('p-2 rounded-lg', `bg-${config.colorVar}/10`)}>
            <Icon className={cn('w-5 h-5', `text-${config.colorVar}`)} />
          </div>
          <span className="font-medium text-foreground">{config.label}</span>
        </div>
        <span className={cn(
          'px-2.5 py-1 rounded-full text-xs font-medium border capitalize',
          levelColors[level]
        )}>
          {level}
        </span>
      </div>
      
      {/* Price change range */}
      <div className="mb-3">
        <div className="flex items-baseline gap-1">
          <span className={cn('text-2xl font-bold', levelTextColors[level])}>
            +{minChange}-{maxChange}%
          </span>
          <span className="text-sm text-muted-foreground">estimated</span>
        </div>
      </div>
      
      {/* Explanation */}
      <p className="text-sm text-muted-foreground leading-relaxed">
        {explanation}
      </p>
    </div>
  );
};

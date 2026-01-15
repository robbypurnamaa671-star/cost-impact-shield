import { ImpactLevel } from '@/lib/simulation';
import { cn } from '@/lib/utils';

interface ImpactMeterProps {
  level: ImpactLevel;
  percentage: number;
  showLabel?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const levelConfig = {
  low: { color: 'bg-impact-low', label: 'Low', position: 12.5 },
  medium: { color: 'bg-impact-medium', label: 'Medium', position: 37.5 },
  high: { color: 'bg-impact-high', label: 'High', position: 62.5 },
  severe: { color: 'bg-impact-severe', label: 'Severe', position: 87.5 },
};

const sizeConfig = {
  sm: { height: 'h-1.5', dot: 'w-3 h-3', text: 'text-xs' },
  md: { height: 'h-2', dot: 'w-4 h-4', text: 'text-sm' },
  lg: { height: 'h-3', dot: 'w-5 h-5', text: 'text-base' },
};

export const ImpactMeter = ({ level, percentage, showLabel = true, size = 'md' }: ImpactMeterProps) => {
  const config = levelConfig[level];
  const sizes = sizeConfig[size];
  
  return (
    <div className="w-full">
      {showLabel && (
        <div className="flex justify-between items-center mb-1.5">
          <span className={cn(sizes.text, 'font-medium', config.color.replace('bg-', 'text-'))}>
            {config.label} Impact
          </span>
          <span className={cn(sizes.text, 'text-muted-foreground')}>
            {Math.round(percentage)}%
          </span>
        </div>
      )}
      <div className="relative">
        {/* Background gradient track */}
        <div className={cn('impact-meter w-full', sizes.height)} />
        
        {/* Indicator dot */}
        <div 
          className={cn(
            'absolute top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full border-2 border-background shadow-md transition-all duration-500 ease-out',
            sizes.dot,
            config.color
          )}
          style={{ left: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

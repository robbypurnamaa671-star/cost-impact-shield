import { cn } from '@/lib/utils';

interface SpendSliderProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  currencySymbol: string;
  icon: React.ReactNode;
  formatValue?: (value: number) => string;
}

export const SpendSlider = ({ 
  label, 
  value, 
  onChange, 
  min = 0, 
  max = 2000, 
  step = 10,
  currencySymbol,
  icon,
  formatValue 
}: SpendSliderProps) => {
  const displayValue = formatValue ? formatValue(value) : `${currencySymbol}${value.toLocaleString()}`;
  const displayMin = formatValue ? formatValue(min) : `${currencySymbol}${min}`;
  const displayMax = formatValue ? formatValue(max) : `${currencySymbol}${max}`;
  
  return (
    <div className="stat-card">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          {icon}
          <span className="font-medium text-foreground">{label}</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-lg font-bold text-primary">{displayValue}</span>
          <span className="text-sm text-muted-foreground">/mo</span>
        </div>
      </div>
      
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className={cn(
          'w-full h-2 rounded-full appearance-none cursor-pointer',
          'bg-muted',
          '[&::-webkit-slider-thumb]:appearance-none',
          '[&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5',
          '[&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary',
          '[&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:cursor-pointer',
          '[&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:hover:scale-110',
          '[&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5',
          '[&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-primary',
          '[&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:cursor-pointer'
        )}
      />
      
      <div className="flex justify-between mt-1.5">
        <span className="text-xs text-muted-foreground">{displayMin}</span>
        <span className="text-xs text-muted-foreground">{displayMax}</span>
      </div>
    </div>
  );
};

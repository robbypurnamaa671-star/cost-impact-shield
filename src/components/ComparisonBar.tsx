import { cn } from '@/lib/utils';

interface ComparisonBarProps {
  label: string;
  value1: number;
  value2: number;
  country1: string;
  country2: string;
  icon: React.ReactNode;
}

export const ComparisonBar = ({ label, value1, value2, country1, country2, icon }: ComparisonBarProps) => {
  const maxValue = Math.max(value1, value2, 1);
  const width1 = (value1 / 100) * 100;
  const width2 = (value2 / 100) * 100;
  
  return (
    <div className="stat-card">
      <div className="flex items-center gap-2 mb-4">
        {icon}
        <span className="font-medium text-foreground">{label}</span>
      </div>
      
      <div className="space-y-3">
        {/* Country 1 */}
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-muted-foreground">{country1}</span>
            <span className="font-medium text-primary">+{Math.round(value1)}%</span>
          </div>
          <div className="h-3 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary rounded-full transition-all duration-700 ease-out"
              style={{ width: `${width1}%` }}
            />
          </div>
        </div>
        
        {/* Country 2 */}
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-muted-foreground">{country2}</span>
            <span className="font-medium text-accent">+{Math.round(value2)}%</span>
          </div>
          <div className="h-3 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-accent rounded-full transition-all duration-700 ease-out"
              style={{ width: `${width2}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

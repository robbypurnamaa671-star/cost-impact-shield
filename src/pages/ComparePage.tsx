import { PageLayout } from '@/components/PageLayout';
import { CountrySelector } from '@/components/CountrySelector';
import { ComparisonBar } from '@/components/ComparisonBar';
import { ShareButton } from '@/components/ShareButton';
import { ShareableCard } from '@/components/ShareableCard';
import { useAppState } from '@/hooks/useAppState';
import { getCountryByCode } from '@/data/countries';
import { getCrisisById } from '@/data/crisisTypes';
import { calculateImpact } from '@/lib/simulation';
import { useMemo, useRef } from 'react';
import { Fuel, Apple, DollarSign, Smartphone, ArrowLeftRight } from 'lucide-react';

const ComparePage = () => {
  const { state, updateState } = useAppState();
  const shareRef = useRef<HTMLDivElement>(null);
  
  const country1 = getCountryByCode(state.selectedCountry);
  const country2 = getCountryByCode(state.compareCountry);
  const crisis = getCrisisById(state.selectedCrisis);
  
  const simulation1 = useMemo(() => {
    if (!country1 || !crisis) return null;
    return calculateImpact(country1, crisis);
  }, [country1, crisis]);
  
  const simulation2 = useMemo(() => {
    if (!country2 || !crisis) return null;
    return calculateImpact(country2, crisis);
  }, [country2, crisis]);
  
  return (
    <PageLayout 
      title="Compare Countries"
      subtitle="Side-by-side impact comparison"
    >
      <div className="space-y-6">
        {/* Country selectors */}
        <div className="space-y-3">
          <CountrySelector
            value={state.selectedCountry}
            onChange={(code) => updateState({ selectedCountry: code })}
            label="Your Country"
          />
          
          <div className="flex justify-center">
            <div className="p-2 rounded-full bg-muted">
              <ArrowLeftRight className="w-4 h-4 text-muted-foreground" />
            </div>
          </div>
          
          <CountrySelector
            value={state.compareCountry}
            onChange={(code) => updateState({ compareCountry: code })}
            label="Compare With"
          />
        </div>
        
        {/* Crisis type indicator */}
        <div className="stat-card bg-primary/5 border-primary/20 text-center">
          <p className="text-sm text-muted-foreground">Comparing under</p>
          <p className="font-medium text-primary">{crisis?.name || 'Select crisis type'}</p>
        </div>
        
        {/* Comparison results */}
        {simulation1 && simulation2 && country1 && country2 && crisis && (
          <div className="space-y-3 animate-slide-up">
            {/* Share button */}
            <div className="flex justify-end">
              <ShareButton
                targetRef={shareRef}
                title={`${country1.name} vs ${country2.name} - Crisis Comparison`}
                description={`Compare ${crisis.name} impact between ${country1.name} and ${country2.name}`}
              />
            </div>
            
            {/* Shareable content */}
            <ShareableCard
              ref={shareRef}
              title={`${country1.name} vs ${country2.name}`}
              subtitle={crisis.name}
            >
              {/* Legend */}
              <div className="flex items-center justify-center gap-6 text-sm mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                  <span className="text-muted-foreground">{country1.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-accent" />
                  <span className="text-muted-foreground">{country2.name}</span>
                </div>
              </div>
              
              <div className="space-y-3">
                <ComparisonBar
                  label="Fuel Prices"
                  value1={(simulation1.fuel.minChange + simulation1.fuel.maxChange) / 2}
                  value2={(simulation2.fuel.minChange + simulation2.fuel.maxChange) / 2}
                  country1={country1.name}
                  country2={country2.name}
                  icon={<Fuel className="w-5 h-5 text-chart-fuel" />}
                />
                
                <ComparisonBar
                  label="Food Prices"
                  value1={(simulation1.food.minChange + simulation1.food.maxChange) / 2}
                  value2={(simulation2.food.minChange + simulation2.food.maxChange) / 2}
                  country1={country1.name}
                  country2={country2.name}
                  icon={<Apple className="w-5 h-5 text-chart-food" />}
                />
                
                <ComparisonBar
                  label="Currency Impact"
                  value1={(simulation1.currency.minChange + simulation1.currency.maxChange) / 2}
                  value2={(simulation2.currency.minChange + simulation2.currency.maxChange) / 2}
                  country1={country1.name}
                  country2={country2.name}
                  icon={<DollarSign className="w-5 h-5 text-chart-currency" />}
                />
                
                <ComparisonBar
                  label="Electronics Prices"
                  value1={(simulation1.electronics.minChange + simulation1.electronics.maxChange) / 2}
                  value2={(simulation2.electronics.minChange + simulation2.electronics.maxChange) / 2}
                  country1={country1.name}
                  country2={country2.name}
                  icon={<Smartphone className="w-5 h-5 text-chart-electronics" />}
                />
              </div>
              
              {/* Summary insight */}
              <div className="stat-card mt-4">
                <h3 className="font-medium text-foreground mb-2">Key Insight</h3>
                <p className="text-sm text-muted-foreground">
                  {simulation1.overallSeverity > simulation2.overallSeverity 
                    ? `${country1.name} would experience a ${Math.round(simulation1.overallSeverity - simulation2.overallSeverity)}% higher overall impact than ${country2.name} during this crisis scenario.`
                    : simulation1.overallSeverity < simulation2.overallSeverity
                    ? `${country2.name} would experience a ${Math.round(simulation2.overallSeverity - simulation1.overallSeverity)}% higher overall impact than ${country1.name} during this crisis scenario.`
                    : `Both countries would experience similar impact levels during this crisis scenario.`
                  }
                </p>
              </div>
            </ShareableCard>
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default ComparePage;

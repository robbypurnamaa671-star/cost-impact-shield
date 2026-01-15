import { PageLayout } from '@/components/PageLayout';
import { CountrySelector } from '@/components/CountrySelector';
import { CrisisSelector } from '@/components/CrisisSelector';
import { ImpactCard } from '@/components/ImpactCard';
import { ImpactMeter } from '@/components/ImpactMeter';
import { ShareButton } from '@/components/ShareButton';
import { ShareableCard } from '@/components/ShareableCard';
import { useAppState } from '@/hooks/useAppState';
import { getCountryByCode } from '@/data/countries';
import { getCrisisById } from '@/data/crisisTypes';
import { calculateImpact } from '@/lib/simulation';
import { useMemo, useRef } from 'react';
import { AlertTriangle } from 'lucide-react';

const SimulatorPage = () => {
  const { state, updateState } = useAppState();
  const shareRef = useRef<HTMLDivElement>(null);
  
  const country = getCountryByCode(state.selectedCountry);
  const crisis = getCrisisById(state.selectedCrisis);
  
  const simulation = useMemo(() => {
    if (!country || !crisis) return null;
    return calculateImpact(country, crisis);
  }, [country, crisis]);
  
  return (
    <PageLayout 
      title="Crisis Impact Simulator"
      subtitle="See how global events affect your costs"
    >
      <div className="space-y-6">
        {/* Disclaimer */}
        <div className="flex items-start gap-2 p-3 rounded-lg bg-accent/10 border border-accent/30">
          <AlertTriangle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
          <p className="text-xs text-muted-foreground">
            This app provides educational estimates, not financial advice. All calculations are approximate.
          </p>
        </div>
        
        {/* Country Selection */}
        <CountrySelector
          value={state.selectedCountry}
          onChange={(code) => updateState({ selectedCountry: code })}
          label="Your Country"
        />
        
        {/* Crisis Selection */}
        <CrisisSelector
          value={state.selectedCrisis}
          onChange={(id) => updateState({ selectedCrisis: id })}
        />
        
        {/* Results */}
        {simulation && country && crisis && (
          <div className="space-y-4 animate-slide-up">
            {/* Share button */}
            <div className="flex justify-end">
              <ShareButton
                targetRef={shareRef}
                title={`${crisis.name} Impact on ${country.name}`}
                description={`See how ${crisis.name} could affect costs in ${country.name}. Overall severity: ${Math.round(simulation.overallSeverity)}%`}
              />
            </div>
            
            {/* Shareable content */}
            <ShareableCard
              ref={shareRef}
              title={`${crisis.name} Impact`}
              subtitle={`${country.name} • ${country.currency}`}
            >
              {/* Overall severity */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-medium text-foreground">Overall Impact Severity</span>
                  <span className="text-2xl font-bold text-gradient">
                    {Math.round(simulation.overallSeverity)}%
                  </span>
                </div>
                <ImpactMeter 
                  level={simulation.fuel.level} 
                  percentage={simulation.overallSeverity} 
                  showLabel={false}
                  size="lg"
                />
              </div>
              
              {/* Category cards */}
              <div className="space-y-3">
                <ImpactCard
                  category="fuel"
                  level={simulation.fuel.level}
                  minChange={simulation.fuel.minChange}
                  maxChange={simulation.fuel.maxChange}
                  explanation={simulation.fuel.explanation}
                />
                <ImpactCard
                  category="food"
                  level={simulation.food.level}
                  minChange={simulation.food.minChange}
                  maxChange={simulation.food.maxChange}
                  explanation={simulation.food.explanation}
                />
                <ImpactCard
                  category="currency"
                  level={simulation.currency.level}
                  minChange={simulation.currency.minChange}
                  maxChange={simulation.currency.maxChange}
                  explanation={simulation.currency.explanation}
                />
                <ImpactCard
                  category="electronics"
                  level={simulation.electronics.level}
                  minChange={simulation.electronics.minChange}
                  maxChange={simulation.electronics.maxChange}
                  explanation={simulation.electronics.explanation}
                />
              </div>
            </ShareableCard>
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default SimulatorPage;

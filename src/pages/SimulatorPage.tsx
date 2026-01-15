import { PageLayout } from '@/components/PageLayout';
import { CountrySelector } from '@/components/CountrySelector';
import { CrisisSelector } from '@/components/CrisisSelector';
import { ImpactCard } from '@/components/ImpactCard';
import { ImpactMeter } from '@/components/ImpactMeter';
import { useAppState } from '@/hooks/useAppState';
import { getCountryByCode } from '@/data/countries';
import { getCrisisById } from '@/data/crisisTypes';
import { calculateImpact } from '@/lib/simulation';
import { useMemo } from 'react';
import { AlertTriangle } from 'lucide-react';

const SimulatorPage = () => {
  const { state, updateState } = useAppState();
  
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
        {simulation && (
          <div className="space-y-4 animate-slide-up">
            {/* Overall severity */}
            <div className="stat-card">
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
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default SimulatorPage;

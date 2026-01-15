import { PageLayout } from '@/components/PageLayout';
import { SpendSlider } from '@/components/SpendSlider';
import { useAppState } from '@/hooks/useAppState';
import { getCountryByCode, formatCurrency, getSliderMax, getSliderStep } from '@/data/countries';
import { getCrisisById } from '@/data/crisisTypes';
import { calculateImpact, calculateWalletImpact } from '@/lib/simulation';
import { useMemo } from 'react';
import { Fuel, Apple, Smartphone, TrendingUp, Calendar } from 'lucide-react';

const WalletPage = () => {
  const { state, updateState } = useAppState();
  
  const country = getCountryByCode(state.selectedCountry);
  const crisis = getCrisisById(state.selectedCrisis);
  
  const simulation = useMemo(() => {
    if (!country || !crisis) return null;
    return calculateImpact(country, crisis);
  }, [country, crisis]);
  
  const walletImpact = useMemo(() => {
    if (!simulation) return null;
    return calculateWalletImpact(
      simulation,
      state.monthlyFuelSpend,
      state.monthlyFoodSpend,
      state.monthlyElectronicsSpend
    );
  }, [simulation, state.monthlyFuelSpend, state.monthlyFoodSpend, state.monthlyElectronicsSpend]);
  
  const currencySymbol = country?.currencySymbol || '$';
  const sliderStep = country ? getSliderStep(country) : 10;
  
  // Format amount based on country
  const formatAmount = (amount: number) => {
    if (!country) return `$${amount}`;
    return formatCurrency(amount, country);
  };
  
  return (
    <PageLayout 
      title="Wallet Impact"
      subtitle="Calculate your personal cost increase"
    >
      <div className="space-y-6">
        {/* Current selection summary */}
        <div className="stat-card bg-primary/5 border-primary/20">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-2xl">{country ? getFlagEmoji(country.code) : '🌍'}</span>
            <span className="font-medium text-foreground">{country?.name || 'Select country'}</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Crisis: {crisis?.name || 'Select crisis type'} • Currency: {country?.currency}
          </p>
        </div>
        
        {/* Spending sliders */}
        <div className="space-y-3">
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Your Monthly Spending ({country?.currency})
          </h2>
          
          <SpendSlider
            label="Fuel / Transport"
            value={state.monthlyFuelSpend}
            onChange={(v) => updateState({ monthlyFuelSpend: v })}
            currencySymbol={currencySymbol}
            min={0}
            max={country ? getSliderMax(country, 'fuel') : 1000}
            step={sliderStep}
            icon={<Fuel className="w-5 h-5 text-chart-fuel" />}
            formatValue={formatAmount}
          />
          
          <SpendSlider
            label="Food & Groceries"
            value={state.monthlyFoodSpend}
            onChange={(v) => updateState({ monthlyFoodSpend: v })}
            currencySymbol={currencySymbol}
            min={0}
            max={country ? getSliderMax(country, 'food') : 2000}
            step={sliderStep}
            icon={<Apple className="w-5 h-5 text-chart-food" />}
            formatValue={formatAmount}
          />
          
          <SpendSlider
            label="Electronics / Imports"
            value={state.monthlyElectronicsSpend}
            onChange={(v) => updateState({ monthlyElectronicsSpend: v })}
            currencySymbol={currencySymbol}
            min={0}
            max={country ? getSliderMax(country, 'electronics') : 500}
            step={sliderStep}
            icon={<Smartphone className="w-5 h-5 text-chart-electronics" />}
            formatValue={formatAmount}
          />
        </div>
        
        {/* Impact results */}
        {walletImpact && country && (
          <div className="space-y-4 animate-slide-up">
            <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Estimated Extra Costs
            </h2>
            
            {/* Breakdown cards */}
            <div className="grid grid-cols-3 gap-2">
              <div className="stat-card text-center">
                <Fuel className="w-5 h-5 mx-auto mb-2 text-chart-fuel" />
                <div className="text-base font-bold text-chart-fuel">
                  +{formatAmount(Math.round(walletImpact.monthlyFuelIncrease))}
                </div>
                <div className="text-xs text-muted-foreground">Fuel/mo</div>
              </div>
              
              <div className="stat-card text-center">
                <Apple className="w-5 h-5 mx-auto mb-2 text-chart-food" />
                <div className="text-base font-bold text-chart-food">
                  +{formatAmount(Math.round(walletImpact.monthlyFoodIncrease))}
                </div>
                <div className="text-xs text-muted-foreground">Food/mo</div>
              </div>
              
              <div className="stat-card text-center">
                <Smartphone className="w-5 h-5 mx-auto mb-2 text-chart-electronics" />
                <div className="text-base font-bold text-chart-electronics">
                  +{formatAmount(Math.round(walletImpact.monthlyElectronicsIncrease))}
                </div>
                <div className="text-xs text-muted-foreground">Tech/mo</div>
              </div>
            </div>
            
            {/* Total impact */}
            <div className="stat-card bg-destructive/5 border-destructive/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-destructive/10">
                  <TrendingUp className="w-6 h-6 text-destructive" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Monthly Extra Cost</div>
                  <div className="text-2xl font-bold text-destructive">
                    +{formatAmount(Math.round(walletImpact.totalMonthlyIncrease))}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-3 rounded-lg bg-background/50">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Yearly Impact</span>
                </div>
                <span className="text-lg font-bold text-destructive">
                  +{formatAmount(Math.round(walletImpact.yearlyIncrease))}
                </span>
              </div>
            </div>
            
            {/* Disclaimer */}
            <p className="text-xs text-muted-foreground text-center">
              These are estimates based on historical crisis patterns. Actual impacts may vary.
            </p>
          </div>
        )}
      </div>
    </PageLayout>
  );
};

// Convert country code to flag emoji
function getFlagEmoji(countryCode: string): string {
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map(char => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
}

export default WalletPage;

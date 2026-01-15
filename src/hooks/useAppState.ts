import { useLocalStorage } from './useLocalStorage';
import { getCountryByCode } from '@/data/countries';
import { useEffect } from 'react';

export interface AppState {
  selectedCountry: string;
  selectedCrisis: string;
  compareCountry: string;
  monthlyFuelSpend: number;
  monthlyFoodSpend: number;
  monthlyElectronicsSpend: number;
  theme: 'light' | 'dark' | 'system';
}

const defaultState: AppState = {
  selectedCountry: 'US',
  selectedCrisis: 'regional_war',
  compareCountry: 'DE',
  monthlyFuelSpend: 200,
  monthlyFoodSpend: 500,
  monthlyElectronicsSpend: 100,
  theme: 'dark',
};

export const useAppState = () => {
  const [state, setState] = useLocalStorage<AppState>('crisis-calculator-state', defaultState);

  const updateState = (updates: Partial<AppState>) => {
    setState(prev => {
      const newState = { ...prev, ...updates };
      
      // If country changed, update spending to match typical values for that country
      if (updates.selectedCountry && updates.selectedCountry !== prev.selectedCountry) {
        const country = getCountryByCode(updates.selectedCountry);
        if (country) {
          newState.monthlyFuelSpend = country.typicalMonthlySpend.fuel;
          newState.monthlyFoodSpend = country.typicalMonthlySpend.food;
          newState.monthlyElectronicsSpend = country.typicalMonthlySpend.electronics;
        }
      }
      
      return newState;
    });
  };

  // Initialize spending values when component mounts if they don't match the country
  useEffect(() => {
    const country = getCountryByCode(state.selectedCountry);
    if (country) {
      // Check if spending values seem to be from a different currency
      const expectedFuel = country.typicalMonthlySpend.fuel;
      const ratio = state.monthlyFuelSpend / expectedFuel;
      
      // If ratio is very different (e.g., USD values in IDR country), reset
      if (ratio < 0.01 || ratio > 100) {
        updateState({
          monthlyFuelSpend: country.typicalMonthlySpend.fuel,
          monthlyFoodSpend: country.typicalMonthlySpend.food,
          monthlyElectronicsSpend: country.typicalMonthlySpend.electronics,
        });
      }
    }
  }, []);

  return { state, updateState };
};

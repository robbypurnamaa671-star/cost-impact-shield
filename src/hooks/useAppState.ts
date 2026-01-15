import { useLocalStorage } from './useLocalStorage';

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
    setState(prev => ({ ...prev, ...updates }));
  };

  return { state, updateState };
};

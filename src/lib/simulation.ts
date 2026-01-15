// Crisis Impact Simulation Engine
import { Country } from '@/data/countries';
import { CrisisType } from '@/data/crisisTypes';

export type ImpactLevel = 'low' | 'medium' | 'high' | 'severe';

export interface ImpactResult {
  level: ImpactLevel;
  percentage: number;
  minChange: number;
  maxChange: number;
  explanation: string;
}

export interface SimulationResult {
  fuel: ImpactResult;
  food: ImpactResult;
  currency: ImpactResult;
  electronics: ImpactResult;
  overallSeverity: number; // 0-100
}

// Convert raw score to impact level
const scoreToLevel = (score: number): ImpactLevel => {
  if (score < 25) return 'low';
  if (score < 50) return 'medium';
  if (score < 75) return 'high';
  return 'severe';
};

// Get percentage range based on score
const scoreToPercentageRange = (score: number): { min: number; max: number } => {
  if (score < 25) return { min: 2, max: 8 };
  if (score < 50) return { min: 8, max: 20 };
  if (score < 75) return { min: 20, max: 45 };
  return { min: 45, max: 100 };
};

// Generate explanation based on category and level
const generateExplanation = (
  category: 'fuel' | 'food' | 'currency' | 'electronics',
  level: ImpactLevel,
  country: Country,
  crisis: CrisisType
): string => {
  const explanations = {
    fuel: {
      low: `${country.name}'s relatively low energy import dependency limits fuel price impacts.`,
      medium: `Expect moderate fuel price increases as ${country.name} adjusts to supply changes.`,
      high: `Significant fuel price increases likely due to ${country.name}'s energy import reliance.`,
      severe: `Critical fuel price spikes expected. ${country.name} is highly vulnerable to energy disruptions.`,
    },
    food: {
      low: `${country.name}'s food production capacity provides good insulation from price shocks.`,
      medium: `Some food price increases expected, particularly for imported goods.`,
      high: `Notable food price increases likely as supply chains are disrupted.`,
      severe: `Substantial food price increases expected. Consider diversifying food sources.`,
    },
    currency: {
      low: `${country.name}'s ${country.currency} shows stability during this crisis type.`,
      medium: `Moderate currency fluctuations possible. Monitor exchange rates for major purchases.`,
      high: `Expect notable currency weakness. Foreign goods may become more expensive.`,
      severe: `Significant currency pressure likely. Imported goods costs may rise substantially.`,
    },
    electronics: {
      low: `Limited impact on electronics prices expected for ${country.name}.`,
      medium: `Some electronics may see price increases or delays in availability.`,
      high: `Notable increases in electronics prices and potential supply shortages.`,
      severe: `Major electronics supply disruptions likely. Expect significant price increases and delays.`,
    },
  };

  return explanations[category][level];
};

// Main simulation function
export const calculateImpact = (country: Country, crisis: CrisisType): SimulationResult => {
  // Calculate raw scores for each category
  const fuelScore = Math.min(100, country.energyImportDependency * crisis.fuelMultiplier);
  const foodScore = Math.min(100, 
    (country.foodImportDependency * 0.6 + country.energyImportDependency * 0.4) * crisis.foodMultiplier
  );
  const currencyScore = Math.min(100, 
    (country.currencySensitivity * 0.7 + country.tradeExposure * 0.3) * crisis.currencyMultiplier
  );
  const electronicsScore = Math.min(100, 
    (country.tradeExposure * 0.6 + country.energyImportDependency * 0.4) * crisis.electronicsMultiplier
  );

  // Convert to impact results
  const createImpactResult = (
    score: number, 
    category: 'fuel' | 'food' | 'currency' | 'electronics'
  ): ImpactResult => {
    const level = scoreToLevel(score);
    const range = scoreToPercentageRange(score);
    return {
      level,
      percentage: score,
      minChange: range.min,
      maxChange: range.max,
      explanation: generateExplanation(category, level, country, crisis),
    };
  };

  const overallSeverity = (fuelScore + foodScore + currencyScore + electronicsScore) / 4;

  return {
    fuel: createImpactResult(fuelScore, 'fuel'),
    food: createImpactResult(foodScore, 'food'),
    currency: createImpactResult(currencyScore, 'currency'),
    electronics: createImpactResult(electronicsScore, 'electronics'),
    overallSeverity,
  };
};

// Calculate monthly cost impact
export interface WalletImpact {
  monthlyFuelIncrease: number;
  monthlyFoodIncrease: number;
  monthlyElectronicsIncrease: number;
  totalMonthlyIncrease: number;
  yearlyIncrease: number;
}

export const calculateWalletImpact = (
  simulation: SimulationResult,
  monthlyFuelSpend: number,
  monthlyFoodSpend: number,
  monthlyElectronicsSpend: number
): WalletImpact => {
  // Use average of min/max for calculation
  const fuelPercent = (simulation.fuel.minChange + simulation.fuel.maxChange) / 2 / 100;
  const foodPercent = (simulation.food.minChange + simulation.food.maxChange) / 2 / 100;
  const electronicsPercent = (simulation.electronics.minChange + simulation.electronics.maxChange) / 2 / 100;

  const monthlyFuelIncrease = monthlyFuelSpend * fuelPercent;
  const monthlyFoodIncrease = monthlyFoodSpend * foodPercent;
  const monthlyElectronicsIncrease = monthlyElectronicsSpend * electronicsPercent;
  const totalMonthlyIncrease = monthlyFuelIncrease + monthlyFoodIncrease + monthlyElectronicsIncrease;

  return {
    monthlyFuelIncrease,
    monthlyFoodIncrease,
    monthlyElectronicsIncrease,
    totalMonthlyIncrease,
    yearlyIncrease: totalMonthlyIncrease * 12,
  };
};

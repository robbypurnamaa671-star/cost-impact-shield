// Crisis types with their impact multipliers
export interface CrisisType {
  id: string;
  name: string;
  description: string;
  icon: string;
  // Impact multipliers (1.0 = base, higher = more severe)
  fuelMultiplier: number;
  foodMultiplier: number;
  currencyMultiplier: number;
  electronicsMultiplier: number;
  // Time factors (how quickly impacts spread)
  immediateFactor: number; // First week
  shortTermFactor: number; // 1-3 months
  longTermFactor: number; // 6+ months
}

export const crisisTypes: CrisisType[] = [
  {
    id: 'regional_war',
    name: 'Regional War',
    description: 'Armed conflict in a specific geographic area affecting neighboring countries and trade routes.',
    icon: 'Flame',
    fuelMultiplier: 1.4,
    foodMultiplier: 1.25,
    currencyMultiplier: 1.15,
    electronicsMultiplier: 1.2,
    immediateFactor: 0.6,
    shortTermFactor: 1.0,
    longTermFactor: 0.8,
  },
  {
    id: 'global_war',
    name: 'Global War',
    description: 'Large-scale international conflict disrupting worldwide supply chains and markets.',
    icon: 'Globe',
    fuelMultiplier: 2.0,
    foodMultiplier: 1.8,
    currencyMultiplier: 1.5,
    electronicsMultiplier: 1.9,
    immediateFactor: 0.9,
    shortTermFactor: 1.0,
    longTermFactor: 1.2,
  },
  {
    id: 'sanctions',
    name: 'Sanctions',
    description: 'Economic restrictions imposed on specific countries affecting trade and financial flows.',
    icon: 'Ban',
    fuelMultiplier: 1.5,
    foodMultiplier: 1.3,
    currencyMultiplier: 1.4,
    electronicsMultiplier: 1.35,
    immediateFactor: 0.5,
    shortTermFactor: 0.9,
    longTermFactor: 1.0,
  },
  {
    id: 'energy_disruption',
    name: 'Energy Supply Disruption',
    description: 'Major interruption to oil, gas, or electricity supplies affecting industrial production.',
    icon: 'Zap',
    fuelMultiplier: 2.2,
    foodMultiplier: 1.4,
    currencyMultiplier: 1.25,
    electronicsMultiplier: 1.3,
    immediateFactor: 0.8,
    shortTermFactor: 1.0,
    longTermFactor: 0.7,
  },
  {
    id: 'trade_blockage',
    name: 'Trade Route Blockage',
    description: 'Disruption of major shipping lanes or ports affecting global commerce flow.',
    icon: 'Ship',
    fuelMultiplier: 1.3,
    foodMultiplier: 1.5,
    currencyMultiplier: 1.1,
    electronicsMultiplier: 1.6,
    immediateFactor: 0.4,
    shortTermFactor: 1.0,
    longTermFactor: 0.9,
  },
  {
    id: 'currency_crisis',
    name: 'Currency Crisis',
    description: 'Sudden loss of confidence in a currency causing rapid inflation and reduced purchasing power.',
    icon: 'Coins',
    fuelMultiplier: 1.6,
    foodMultiplier: 1.5,
    currencyMultiplier: 2.0,
    electronicsMultiplier: 1.8,
    immediateFactor: 0.7,
    shortTermFactor: 1.0,
    longTermFactor: 0.85,
  },
  {
    id: 'global_inflation',
    name: 'Global Inflation Shock',
    description: 'Widespread price increases across countries from supply shortages and monetary policy changes.',
    icon: 'TrendingUp',
    fuelMultiplier: 1.45,
    foodMultiplier: 1.5,
    currencyMultiplier: 1.4,
    electronicsMultiplier: 1.35,
    immediateFactor: 0.5,
    shortTermFactor: 0.9,
    longTermFactor: 1.1,
  },
  {
    id: 'financial_crisis',
    name: 'Financial System Crisis',
    description: 'Disruption in banks and credit markets restricting lending and investment globally.',
    icon: 'Landmark',
    fuelMultiplier: 1.2,
    foodMultiplier: 1.3,
    currencyMultiplier: 1.6,
    electronicsMultiplier: 1.4,
    immediateFactor: 0.6,
    shortTermFactor: 1.0,
    longTermFactor: 1.0,
  },
  {
    id: 'supply_chain_breakdown',
    name: 'Supply Chain Breakdown',
    description: 'Widespread failure in manufacturing, logistics, or distribution networks.',
    icon: 'Unplug',
    fuelMultiplier: 1.35,
    foodMultiplier: 1.45,
    currencyMultiplier: 1.2,
    electronicsMultiplier: 1.7,
    immediateFactor: 0.5,
    shortTermFactor: 1.0,
    longTermFactor: 0.8,
  },
  {
    id: 'resource_shortage',
    name: 'Strategic Resource Shortage',
    description: 'Shortage of critical resources like oil, gas, rare earth metals, or agricultural inputs.',
    icon: 'Pickaxe',
    fuelMultiplier: 1.9,
    foodMultiplier: 1.55,
    currencyMultiplier: 1.3,
    electronicsMultiplier: 1.75,
    immediateFactor: 0.6,
    shortTermFactor: 1.0,
    longTermFactor: 1.0,
  },
];

export const getCrisisById = (id: string): CrisisType | undefined => 
  crisisTypes.find(c => c.id === id);

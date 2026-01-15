// Historical crisis examples for educational timeline
export interface TimelineEvent {
  time: string;
  event: string;
  category: 'fuel' | 'food' | 'currency' | 'electronics' | 'general';
  impact: string;
}

export interface HistoricalCrisis {
  id: string;
  name: string;
  period: string;
  description: string;
  region: string;
  timeline: TimelineEvent[];
  keyTakeaway: string;
}

export const historicalCrises: HistoricalCrisis[] = [
  {
    id: 'ukraine_war',
    name: 'Ukraine Conflict (2022)',
    period: 'February 2022 - Present',
    description: 'The conflict in Ukraine disrupted global energy and grain markets, affecting countries worldwide.',
    region: 'Eastern Europe',
    timeline: [
      { time: 'Week 1', event: 'Oil prices spike 25%', category: 'fuel', impact: '+25%' },
      { time: 'Week 2', event: 'Natural gas futures surge', category: 'fuel', impact: '+40%' },
      { time: 'Month 1', event: 'Wheat prices reach record highs', category: 'food', impact: '+30%' },
      { time: 'Month 2', event: 'Fertilizer shortages reported', category: 'food', impact: '+15%' },
      { time: 'Month 3', event: 'European currencies weaken vs USD', category: 'currency', impact: '-8%' },
      { time: 'Month 4', event: 'Chip shortages intensify', category: 'electronics', impact: '+12%' },
      { time: 'Month 6', event: 'Food inflation peaks in emerging markets', category: 'food', impact: '+25%' },
    ],
    keyTakeaway: 'Energy shocks cascade to food prices within weeks, affecting currencies months later.',
  },
  {
    id: 'middle_east_conflict',
    name: 'Middle East Tensions (2023)',
    period: 'October 2023 - Present',
    description: 'Regional instability affecting oil shipping routes and regional trade.',
    region: 'Middle East',
    timeline: [
      { time: 'Week 1', event: 'Oil prices increase on uncertainty', category: 'fuel', impact: '+8%' },
      { time: 'Week 2', event: 'Shipping insurance costs rise', category: 'general', impact: '+200%' },
      { time: 'Month 1', event: 'Red Sea shipping disrupted', category: 'electronics', impact: '+5%' },
      { time: 'Month 2', event: 'Longer shipping routes increase costs', category: 'food', impact: '+4%' },
      { time: 'Month 3', event: 'Delivery times extend globally', category: 'electronics', impact: '+10%' },
    ],
    keyTakeaway: 'Trade route disruptions increase shipping costs before affecting consumer prices.',
  },
  {
    id: 'oil_crisis_1973',
    name: 'Oil Crisis (1973)',
    period: 'October 1973 - March 1974',
    description: 'OPEC oil embargo caused the first major global energy crisis.',
    region: 'Global',
    timeline: [
      { time: 'Month 1', event: 'Oil prices quadruple', category: 'fuel', impact: '+300%' },
      { time: 'Month 2', event: 'Gas rationing begins', category: 'fuel', impact: 'Shortages' },
      { time: 'Month 3', event: 'Transportation costs surge', category: 'food', impact: '+15%' },
      { time: 'Month 4', event: 'Inflation accelerates', category: 'currency', impact: '+8%' },
      { time: 'Month 6', event: 'Recession begins in major economies', category: 'general', impact: 'Severe' },
      { time: 'Year 1', event: 'New energy policies enacted', category: 'general', impact: 'Long-term' },
    ],
    keyTakeaway: 'Energy shocks can trigger long-term economic restructuring and policy changes.',
  },
];

export const getCrisisById = (id: string): HistoricalCrisis | undefined =>
  historicalCrises.find(c => c.id === id);

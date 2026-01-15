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
  {
    id: 'covid_pandemic',
    name: 'COVID-19 Pandemic (2020)',
    period: 'March 2020 - 2022',
    description: 'Global pandemic caused unprecedented supply chain disruptions and economic shutdowns.',
    region: 'Global',
    timeline: [
      { time: 'Week 1', event: 'Oil demand collapses', category: 'fuel', impact: '-30%' },
      { time: 'Month 1', event: 'Supply chains freeze', category: 'electronics', impact: 'Delays' },
      { time: 'Month 2', event: 'Panic buying causes food shortages', category: 'food', impact: '+20%' },
      { time: 'Month 3', event: 'Currencies volatile against USD', category: 'currency', impact: '±15%' },
      { time: 'Month 6', event: 'Chip shortage begins', category: 'electronics', impact: '+25%' },
      { time: 'Year 1', event: 'Container shipping costs surge 10x', category: 'general', impact: '+900%' },
      { time: 'Year 2', event: 'Global inflation accelerates', category: 'food', impact: '+15%' },
    ],
    keyTakeaway: 'Supply chain disruptions have delayed but severe effects on consumer prices.',
  },
  {
    id: 'asian_financial_crisis',
    name: 'Asian Financial Crisis (1997)',
    period: 'July 1997 - 1998',
    description: 'Currency crisis spread from Thailand across Southeast Asia, causing economic collapse.',
    region: 'Southeast Asia',
    timeline: [
      { time: 'Week 1', event: 'Thai baht collapses', category: 'currency', impact: '-50%' },
      { time: 'Month 1', event: 'Crisis spreads to Indonesia, Korea', category: 'currency', impact: '-40%' },
      { time: 'Month 2', event: 'Import prices surge locally', category: 'electronics', impact: '+80%' },
      { time: 'Month 3', event: 'Food imports become unaffordable', category: 'food', impact: '+60%' },
      { time: 'Month 4', event: 'Fuel prices spike in local currency', category: 'fuel', impact: '+100%' },
      { time: 'Year 1', event: 'IMF bailouts implemented', category: 'general', impact: 'Recovery' },
    ],
    keyTakeaway: 'Currency collapses make all imports dramatically more expensive overnight.',
  },
  {
    id: 'gulf_war',
    name: 'Gulf War (1990-1991)',
    period: 'August 1990 - February 1991',
    description: 'Iraqi invasion of Kuwait disrupted Middle East oil production.',
    region: 'Middle East',
    timeline: [
      { time: 'Week 1', event: 'Oil prices double', category: 'fuel', impact: '+100%' },
      { time: 'Month 1', event: 'Fears of prolonged conflict', category: 'fuel', impact: '+130%' },
      { time: 'Month 2', event: 'Transport costs rise globally', category: 'food', impact: '+10%' },
      { time: 'Month 3', event: 'US recession deepens', category: 'general', impact: 'Recession' },
      { time: 'Month 6', event: 'Prices normalize post-war', category: 'fuel', impact: '-40%' },
    ],
    keyTakeaway: 'Short conflicts cause temporary price spikes that often reverse quickly.',
  },
  {
    id: 'global_financial_crisis',
    name: 'Global Financial Crisis (2008)',
    period: 'September 2008 - 2010',
    description: 'Collapse of major financial institutions triggered a worldwide recession.',
    region: 'Global',
    timeline: [
      { time: 'Week 1', event: 'Lehman Brothers collapses', category: 'general', impact: 'Crisis' },
      { time: 'Month 1', event: 'Oil prices crash on demand fears', category: 'fuel', impact: '-50%' },
      { time: 'Month 2', event: 'Emerging market currencies fall', category: 'currency', impact: '-25%' },
      { time: 'Month 3', event: 'Consumer spending collapses', category: 'electronics', impact: '-30%' },
      { time: 'Month 6', event: 'Commodity prices stabilize at lows', category: 'food', impact: '-20%' },
      { time: 'Year 2', event: 'Slow recovery begins', category: 'general', impact: 'Recovery' },
    ],
    keyTakeaway: 'Financial crises can actually lower commodity prices due to demand destruction.',
  },
  {
    id: 'suez_crisis',
    name: 'Suez Canal Blockage (2021)',
    period: 'March 23-29, 2021',
    description: 'Container ship Ever Given blocked the Suez Canal for 6 days.',
    region: 'Global',
    timeline: [
      { time: 'Day 1', event: 'Canal blocked by Ever Given', category: 'general', impact: 'Blocked' },
      { time: 'Day 3', event: 'Oil tankers queue up', category: 'fuel', impact: '+4%' },
      { time: 'Day 6', event: 'Ship freed, backlog forms', category: 'general', impact: '400 ships' },
      { time: 'Week 2', event: 'Shipping delays ripple globally', category: 'electronics', impact: '+2%' },
      { time: 'Month 1', event: 'Port congestion worsens', category: 'food', impact: '+3%' },
      { time: 'Month 2', event: 'Effects compound with existing issues', category: 'electronics', impact: '+8%' },
    ],
    keyTakeaway: 'Even short disruptions to critical chokepoints cause weeks of supply chain ripples.',
  },
  {
    id: 'venezuela_crisis',
    name: 'Venezuelan Economic Crisis (2016)',
    period: '2016 - Present',
    description: 'Hyperinflation and economic collapse due to oil price crash and mismanagement.',
    region: 'South America',
    timeline: [
      { time: 'Year 1', event: 'Inflation reaches 800%', category: 'currency', impact: '-90%' },
      { time: 'Year 2', event: 'Food shortages widespread', category: 'food', impact: 'Severe' },
      { time: 'Year 3', event: 'Fuel paradox: oil nation has shortages', category: 'fuel', impact: 'Queues' },
      { time: 'Year 4', event: 'Currency virtually worthless', category: 'currency', impact: '-99.9%' },
      { time: 'Year 5', event: 'Mass emigration begins', category: 'general', impact: '5M leave' },
    ],
    keyTakeaway: 'Currency collapse makes all goods unaffordable regardless of global prices.',
  },
  {
    id: 'japan_earthquake',
    name: 'Japan Earthquake & Tsunami (2011)',
    period: 'March 2011',
    description: 'Massive earthquake and Fukushima nuclear disaster disrupted global manufacturing.',
    region: 'East Asia',
    timeline: [
      { time: 'Day 1', event: 'Earthquake and tsunami strike', category: 'general', impact: 'Disaster' },
      { time: 'Week 1', event: 'Auto parts production halts', category: 'electronics', impact: 'Shortages' },
      { time: 'Week 2', event: 'Nuclear plant crisis escalates', category: 'fuel', impact: '+15%' },
      { time: 'Month 1', event: 'Global auto production slows', category: 'electronics', impact: '+5%' },
      { time: 'Month 2', event: 'Electronics component prices rise', category: 'electronics', impact: '+12%' },
      { time: 'Month 3', event: 'Yen strengthens on repatriation', category: 'currency', impact: '+8%' },
    ],
    keyTakeaway: 'Natural disasters in manufacturing hubs affect global supply chains for months.',
  },
  {
    id: 'brexit',
    name: 'Brexit Referendum (2016)',
    period: 'June 2016 - 2020',
    description: 'UK vote to leave EU caused currency crash and trade uncertainty.',
    region: 'Europe',
    timeline: [
      { time: 'Day 1', event: 'British pound crashes 10%', category: 'currency', impact: '-10%' },
      { time: 'Week 1', event: 'Import costs rise for UK', category: 'food', impact: '+8%' },
      { time: 'Month 1', event: 'Electronics prices increase in UK', category: 'electronics', impact: '+10%' },
      { time: 'Year 1', event: 'Inflation rises to 3%', category: 'general', impact: '+3%' },
      { time: 'Year 4', event: 'New trade barriers add costs', category: 'food', impact: '+5%' },
    ],
    keyTakeaway: 'Political uncertainty causes immediate currency effects, with gradual trade impacts.',
  },
];

export const getCrisisById = (id: string): HistoricalCrisis | undefined =>
  historicalCrises.find(c => c.id === id);

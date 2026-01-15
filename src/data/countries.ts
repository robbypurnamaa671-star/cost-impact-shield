// Country data with economic dependencies for crisis simulation
export interface Country {
  code: string;
  name: string;
  currency: string;
  currencySymbol: string;
  region: string;
  // Exchange rate to USD (1 USD = X local currency)
  exchangeRate: number;
  // Typical monthly spending in local currency
  typicalMonthlySpend: {
    fuel: number;
    food: number;
    electronics: number;
  };
  // Dependency scores (0-100) - higher = more vulnerable
  energyImportDependency: number;
  foodImportDependency: number;
  tradeExposure: number;
  currencySensitivity: number;
}

export const countries: Country[] = [
  // North America
  { 
    code: 'US', name: 'United States', currency: 'USD', currencySymbol: '$', region: 'North America',
    exchangeRate: 1, typicalMonthlySpend: { fuel: 200, food: 500, electronics: 100 },
    energyImportDependency: 25, foodImportDependency: 15, tradeExposure: 30, currencySensitivity: 10 
  },
  { 
    code: 'CA', name: 'Canada', currency: 'CAD', currencySymbol: 'C$', region: 'North America',
    exchangeRate: 1.36, typicalMonthlySpend: { fuel: 270, food: 680, electronics: 135 },
    energyImportDependency: 5, foodImportDependency: 20, tradeExposure: 65, currencySensitivity: 35 
  },
  { 
    code: 'MX', name: 'Mexico', currency: 'MXN', currencySymbol: '$', region: 'North America',
    exchangeRate: 17.2, typicalMonthlySpend: { fuel: 3400, food: 8500, electronics: 1700 },
    energyImportDependency: 20, foodImportDependency: 30, tradeExposure: 75, currencySensitivity: 55 
  },

  // Europe
  { 
    code: 'GB', name: 'United Kingdom', currency: 'GBP', currencySymbol: '£', region: 'Europe',
    exchangeRate: 0.79, typicalMonthlySpend: { fuel: 160, food: 400, electronics: 80 },
    energyImportDependency: 45, foodImportDependency: 45, tradeExposure: 55, currencySensitivity: 35 
  },
  { 
    code: 'DE', name: 'Germany', currency: 'EUR', currencySymbol: '€', region: 'Europe',
    exchangeRate: 0.92, typicalMonthlySpend: { fuel: 180, food: 460, electronics: 90 },
    energyImportDependency: 65, foodImportDependency: 30, tradeExposure: 70, currencySensitivity: 25 
  },
  { 
    code: 'FR', name: 'France', currency: 'EUR', currencySymbol: '€', region: 'Europe',
    exchangeRate: 0.92, typicalMonthlySpend: { fuel: 180, food: 460, electronics: 90 },
    energyImportDependency: 40, foodImportDependency: 25, tradeExposure: 55, currencySensitivity: 25 
  },
  { 
    code: 'IT', name: 'Italy', currency: 'EUR', currencySymbol: '€', region: 'Europe',
    exchangeRate: 0.92, typicalMonthlySpend: { fuel: 170, food: 440, electronics: 85 },
    energyImportDependency: 75, foodImportDependency: 35, tradeExposure: 55, currencySensitivity: 30 
  },
  { 
    code: 'ES', name: 'Spain', currency: 'EUR', currencySymbol: '€', region: 'Europe',
    exchangeRate: 0.92, typicalMonthlySpend: { fuel: 160, food: 420, electronics: 80 },
    energyImportDependency: 70, foodImportDependency: 30, tradeExposure: 50, currencySensitivity: 28 
  },
  { 
    code: 'NL', name: 'Netherlands', currency: 'EUR', currencySymbol: '€', region: 'Europe',
    exchangeRate: 0.92, typicalMonthlySpend: { fuel: 190, food: 480, electronics: 95 },
    energyImportDependency: 60, foodImportDependency: 35, tradeExposure: 80, currencySensitivity: 25 
  },
  { 
    code: 'PL', name: 'Poland', currency: 'PLN', currencySymbol: 'zł', region: 'Europe',
    exchangeRate: 4.0, typicalMonthlySpend: { fuel: 800, food: 2000, electronics: 400 },
    energyImportDependency: 55, foodImportDependency: 25, tradeExposure: 65, currencySensitivity: 45 
  },
  { 
    code: 'TR', name: 'Turkey', currency: 'TRY', currencySymbol: '₺', region: 'Europe',
    exchangeRate: 32.5, typicalMonthlySpend: { fuel: 6500, food: 16000, electronics: 3200 },
    energyImportDependency: 75, foodImportDependency: 20, tradeExposure: 55, currencySensitivity: 75 
  },
  { 
    code: 'UA', name: 'Ukraine', currency: 'UAH', currencySymbol: '₴', region: 'Europe',
    exchangeRate: 41.5, typicalMonthlySpend: { fuel: 4150, food: 10400, electronics: 2100 },
    energyImportDependency: 35, foodImportDependency: 15, tradeExposure: 45, currencySensitivity: 70 
  },
  { 
    code: 'RO', name: 'Romania', currency: 'RON', currencySymbol: 'lei', region: 'Europe',
    exchangeRate: 4.6, typicalMonthlySpend: { fuel: 920, food: 2300, electronics: 460 },
    energyImportDependency: 25, foodImportDependency: 20, tradeExposure: 55, currencySensitivity: 40 
  },
  { 
    code: 'CZ', name: 'Czech Republic', currency: 'CZK', currencySymbol: 'Kč', region: 'Europe',
    exchangeRate: 23.5, typicalMonthlySpend: { fuel: 4700, food: 11750, electronics: 2350 },
    energyImportDependency: 45, foodImportDependency: 25, tradeExposure: 75, currencySensitivity: 35 
  },
  { 
    code: 'SE', name: 'Sweden', currency: 'SEK', currencySymbol: 'kr', region: 'Europe',
    exchangeRate: 10.8, typicalMonthlySpend: { fuel: 2160, food: 5400, electronics: 1080 },
    energyImportDependency: 30, foodImportDependency: 35, tradeExposure: 60, currencySensitivity: 35 
  },
  { 
    code: 'NO', name: 'Norway', currency: 'NOK', currencySymbol: 'kr', region: 'Europe',
    exchangeRate: 11.0, typicalMonthlySpend: { fuel: 2200, food: 5500, electronics: 1100 },
    energyImportDependency: 0, foodImportDependency: 50, tradeExposure: 45, currencySensitivity: 40 
  },
  { 
    code: 'CH', name: 'Switzerland', currency: 'CHF', currencySymbol: 'Fr.', region: 'Europe',
    exchangeRate: 0.88, typicalMonthlySpend: { fuel: 220, food: 550, electronics: 110 },
    energyImportDependency: 75, foodImportDependency: 45, tradeExposure: 65, currencySensitivity: 15 
  },
  { 
    code: 'AT', name: 'Austria', currency: 'EUR', currencySymbol: '€', region: 'Europe',
    exchangeRate: 0.92, typicalMonthlySpend: { fuel: 175, food: 450, electronics: 90 },
    energyImportDependency: 65, foodImportDependency: 30, tradeExposure: 60, currencySensitivity: 25 
  },
  { 
    code: 'BE', name: 'Belgium', currency: 'EUR', currencySymbol: '€', region: 'Europe',
    exchangeRate: 0.92, typicalMonthlySpend: { fuel: 185, food: 470, electronics: 95 },
    energyImportDependency: 80, foodImportDependency: 40, tradeExposure: 85, currencySensitivity: 25 
  },
  { 
    code: 'PT', name: 'Portugal', currency: 'EUR', currencySymbol: '€', region: 'Europe',
    exchangeRate: 0.92, typicalMonthlySpend: { fuel: 140, food: 360, electronics: 70 },
    energyImportDependency: 75, foodImportDependency: 30, tradeExposure: 50, currencySensitivity: 28 
  },
  { 
    code: 'GR', name: 'Greece', currency: 'EUR', currencySymbol: '€', region: 'Europe',
    exchangeRate: 0.92, typicalMonthlySpend: { fuel: 130, food: 340, electronics: 65 },
    energyImportDependency: 70, foodImportDependency: 35, tradeExposure: 45, currencySensitivity: 35 
  },
  { 
    code: 'HU', name: 'Hungary', currency: 'HUF', currencySymbol: 'Ft', region: 'Europe',
    exchangeRate: 375, typicalMonthlySpend: { fuel: 75000, food: 187500, electronics: 37500 },
    energyImportDependency: 60, foodImportDependency: 20, tradeExposure: 70, currencySensitivity: 50 
  },

  // Asia
  { 
    code: 'JP', name: 'Japan', currency: 'JPY', currencySymbol: '¥', region: 'Asia',
    exchangeRate: 157, typicalMonthlySpend: { fuel: 31400, food: 78500, electronics: 15700 },
    energyImportDependency: 90, foodImportDependency: 60, tradeExposure: 35, currencySensitivity: 30 
  },
  { 
    code: 'KR', name: 'South Korea', currency: 'KRW', currencySymbol: '₩', region: 'Asia',
    exchangeRate: 1380, typicalMonthlySpend: { fuel: 276000, food: 690000, electronics: 138000 },
    energyImportDependency: 95, foodImportDependency: 70, tradeExposure: 75, currencySensitivity: 40 
  },
  { 
    code: 'CN', name: 'China', currency: 'CNY', currencySymbol: '¥', region: 'Asia',
    exchangeRate: 7.25, typicalMonthlySpend: { fuel: 1450, food: 3625, electronics: 725 },
    energyImportDependency: 45, foodImportDependency: 25, tradeExposure: 35, currencySensitivity: 20 
  },
  { 
    code: 'IN', name: 'India', currency: 'INR', currencySymbol: '₹', region: 'Asia',
    exchangeRate: 83.5, typicalMonthlySpend: { fuel: 8350, food: 20875, electronics: 4175 },
    energyImportDependency: 80, foodImportDependency: 15, tradeExposure: 25, currencySensitivity: 50 
  },
  { 
    code: 'ID', name: 'Indonesia', currency: 'IDR', currencySymbol: 'Rp', region: 'Asia',
    exchangeRate: 16200, typicalMonthlySpend: { fuel: 1620000, food: 4050000, electronics: 810000 },
    energyImportDependency: 35, foodImportDependency: 20, tradeExposure: 40, currencySensitivity: 50 
  },
  { 
    code: 'SG', name: 'Singapore', currency: 'SGD', currencySymbol: 'S$', region: 'Asia',
    exchangeRate: 1.35, typicalMonthlySpend: { fuel: 270, food: 675, electronics: 135 },
    energyImportDependency: 100, foodImportDependency: 90, tradeExposure: 95, currencySensitivity: 30 
  },
  { 
    code: 'TH', name: 'Thailand', currency: 'THB', currencySymbol: '฿', region: 'Asia',
    exchangeRate: 36.5, typicalMonthlySpend: { fuel: 7300, food: 18250, electronics: 3650 },
    energyImportDependency: 60, foodImportDependency: 15, tradeExposure: 65, currencySensitivity: 45 
  },
  { 
    code: 'MY', name: 'Malaysia', currency: 'MYR', currencySymbol: 'RM', region: 'Asia',
    exchangeRate: 4.75, typicalMonthlySpend: { fuel: 950, food: 2375, electronics: 475 },
    energyImportDependency: 15, foodImportDependency: 25, tradeExposure: 70, currencySensitivity: 45 
  },
  { 
    code: 'PH', name: 'Philippines', currency: 'PHP', currencySymbol: '₱', region: 'Asia',
    exchangeRate: 58.5, typicalMonthlySpend: { fuel: 11700, food: 29250, electronics: 5850 },
    energyImportDependency: 55, foodImportDependency: 25, tradeExposure: 55, currencySensitivity: 45 
  },
  { 
    code: 'VN', name: 'Vietnam', currency: 'VND', currencySymbol: '₫', region: 'Asia',
    exchangeRate: 25400, typicalMonthlySpend: { fuel: 2540000, food: 6350000, electronics: 1270000 },
    energyImportDependency: 25, foodImportDependency: 15, tradeExposure: 75, currencySensitivity: 40 
  },
  { 
    code: 'PK', name: 'Pakistan', currency: 'PKR', currencySymbol: '₨', region: 'Asia',
    exchangeRate: 278, typicalMonthlySpend: { fuel: 27800, food: 69500, electronics: 13900 },
    energyImportDependency: 75, foodImportDependency: 20, tradeExposure: 30, currencySensitivity: 70 
  },
  { 
    code: 'BD', name: 'Bangladesh', currency: 'BDT', currencySymbol: '৳', region: 'Asia',
    exchangeRate: 110, typicalMonthlySpend: { fuel: 11000, food: 27500, electronics: 5500 },
    energyImportDependency: 70, foodImportDependency: 20, tradeExposure: 45, currencySensitivity: 55 
  },
  { 
    code: 'TW', name: 'Taiwan', currency: 'TWD', currencySymbol: 'NT$', region: 'Asia',
    exchangeRate: 32.5, typicalMonthlySpend: { fuel: 6500, food: 16250, electronics: 3250 },
    energyImportDependency: 98, foodImportDependency: 65, tradeExposure: 70, currencySensitivity: 35 
  },
  { 
    code: 'HK', name: 'Hong Kong', currency: 'HKD', currencySymbol: 'HK$', region: 'Asia',
    exchangeRate: 7.82, typicalMonthlySpend: { fuel: 1564, food: 3910, electronics: 782 },
    energyImportDependency: 100, foodImportDependency: 90, tradeExposure: 85, currencySensitivity: 10 
  },

  // Middle East
  { 
    code: 'SA', name: 'Saudi Arabia', currency: 'SAR', currencySymbol: '﷼', region: 'Middle East',
    exchangeRate: 3.75, typicalMonthlySpend: { fuel: 375, food: 1875, electronics: 375 },
    energyImportDependency: 0, foodImportDependency: 80, tradeExposure: 45, currencySensitivity: 15 
  },
  { 
    code: 'AE', name: 'United Arab Emirates', currency: 'AED', currencySymbol: 'د.إ', region: 'Middle East',
    exchangeRate: 3.67, typicalMonthlySpend: { fuel: 367, food: 1835, electronics: 367 },
    energyImportDependency: 0, foodImportDependency: 85, tradeExposure: 60, currencySensitivity: 15 
  },
  { 
    code: 'IL', name: 'Israel', currency: 'ILS', currencySymbol: '₪', region: 'Middle East',
    exchangeRate: 3.75, typicalMonthlySpend: { fuel: 750, food: 1875, electronics: 375 },
    energyImportDependency: 65, foodImportDependency: 50, tradeExposure: 50, currencySensitivity: 35 
  },
  { 
    code: 'EG', name: 'Egypt', currency: 'EGP', currencySymbol: 'E£', region: 'Middle East',
    exchangeRate: 48.5, typicalMonthlySpend: { fuel: 4850, food: 12125, electronics: 2425 },
    energyImportDependency: 30, foodImportDependency: 55, tradeExposure: 35, currencySensitivity: 65 
  },
  { 
    code: 'QA', name: 'Qatar', currency: 'QAR', currencySymbol: '﷼', region: 'Middle East',
    exchangeRate: 3.64, typicalMonthlySpend: { fuel: 364, food: 1820, electronics: 364 },
    energyImportDependency: 0, foodImportDependency: 90, tradeExposure: 55, currencySensitivity: 10 
  },
  { 
    code: 'KW', name: 'Kuwait', currency: 'KWD', currencySymbol: 'د.ك', region: 'Middle East',
    exchangeRate: 0.31, typicalMonthlySpend: { fuel: 62, food: 155, electronics: 31 },
    energyImportDependency: 0, foodImportDependency: 85, tradeExposure: 50, currencySensitivity: 15 
  },
  { 
    code: 'IR', name: 'Iran', currency: 'IRR', currencySymbol: '﷼', region: 'Middle East',
    exchangeRate: 42000, typicalMonthlySpend: { fuel: 4200000, food: 21000000, electronics: 4200000 },
    energyImportDependency: 5, foodImportDependency: 25, tradeExposure: 15, currencySensitivity: 85 
  },

  // Oceania
  { 
    code: 'AU', name: 'Australia', currency: 'AUD', currencySymbol: 'A$', region: 'Oceania',
    exchangeRate: 1.55, typicalMonthlySpend: { fuel: 310, food: 775, electronics: 155 },
    energyImportDependency: 10, foodImportDependency: 15, tradeExposure: 45, currencySensitivity: 45 
  },
  { 
    code: 'NZ', name: 'New Zealand', currency: 'NZD', currencySymbol: 'NZ$', region: 'Oceania',
    exchangeRate: 1.70, typicalMonthlySpend: { fuel: 340, food: 850, electronics: 170 },
    energyImportDependency: 25, foodImportDependency: 20, tradeExposure: 50, currencySensitivity: 50 
  },

  // South America
  { 
    code: 'BR', name: 'Brazil', currency: 'BRL', currencySymbol: 'R$', region: 'South America',
    exchangeRate: 5.05, typicalMonthlySpend: { fuel: 1010, food: 2525, electronics: 505 },
    energyImportDependency: 15, foodImportDependency: 10, tradeExposure: 25, currencySensitivity: 60 
  },
  { 
    code: 'AR', name: 'Argentina', currency: 'ARS', currencySymbol: '$', region: 'South America',
    exchangeRate: 915, typicalMonthlySpend: { fuel: 183000, food: 457500, electronics: 91500 },
    energyImportDependency: 10, foodImportDependency: 5, tradeExposure: 20, currencySensitivity: 90 
  },
  { 
    code: 'CL', name: 'Chile', currency: 'CLP', currencySymbol: '$', region: 'South America',
    exchangeRate: 980, typicalMonthlySpend: { fuel: 196000, food: 490000, electronics: 98000 },
    energyImportDependency: 70, foodImportDependency: 25, tradeExposure: 55, currencySensitivity: 50 
  },
  { 
    code: 'CO', name: 'Colombia', currency: 'COP', currencySymbol: '$', region: 'South America',
    exchangeRate: 4150, typicalMonthlySpend: { fuel: 830000, food: 2075000, electronics: 415000 },
    energyImportDependency: 10, foodImportDependency: 15, tradeExposure: 30, currencySensitivity: 55 
  },
  { 
    code: 'PE', name: 'Peru', currency: 'PEN', currencySymbol: 'S/', region: 'South America',
    exchangeRate: 3.85, typicalMonthlySpend: { fuel: 770, food: 1925, electronics: 385 },
    energyImportDependency: 25, foodImportDependency: 20, tradeExposure: 40, currencySensitivity: 45 
  },

  // Africa
  { 
    code: 'ZA', name: 'South Africa', currency: 'ZAR', currencySymbol: 'R', region: 'Africa',
    exchangeRate: 18.8, typicalMonthlySpend: { fuel: 3760, food: 9400, electronics: 1880 },
    energyImportDependency: 25, foodImportDependency: 20, tradeExposure: 55, currencySensitivity: 65 
  },
  { 
    code: 'NG', name: 'Nigeria', currency: 'NGN', currencySymbol: '₦', region: 'Africa',
    exchangeRate: 1580, typicalMonthlySpend: { fuel: 158000, food: 395000, electronics: 79000 },
    energyImportDependency: 10, foodImportDependency: 35, tradeExposure: 40, currencySensitivity: 70 
  },
  { 
    code: 'KE', name: 'Kenya', currency: 'KES', currencySymbol: 'KSh', region: 'Africa',
    exchangeRate: 153, typicalMonthlySpend: { fuel: 15300, food: 38250, electronics: 7650 },
    energyImportDependency: 70, foodImportDependency: 25, tradeExposure: 35, currencySensitivity: 55 
  },
  { 
    code: 'GH', name: 'Ghana', currency: 'GHS', currencySymbol: '₵', region: 'Africa',
    exchangeRate: 15.5, typicalMonthlySpend: { fuel: 1550, food: 3875, electronics: 775 },
    energyImportDependency: 45, foodImportDependency: 30, tradeExposure: 45, currencySensitivity: 60 
  },
  { 
    code: 'MA', name: 'Morocco', currency: 'MAD', currencySymbol: 'د.م.', region: 'Africa',
    exchangeRate: 10.1, typicalMonthlySpend: { fuel: 2020, food: 5050, electronics: 1010 },
    energyImportDependency: 90, foodImportDependency: 40, tradeExposure: 55, currencySensitivity: 35 
  },
  { 
    code: 'ET', name: 'Ethiopia', currency: 'ETB', currencySymbol: 'Br', region: 'Africa',
    exchangeRate: 57, typicalMonthlySpend: { fuel: 5700, food: 14250, electronics: 2850 },
    energyImportDependency: 100, foodImportDependency: 15, tradeExposure: 25, currencySensitivity: 65 
  },
  { 
    code: 'TZ', name: 'Tanzania', currency: 'TZS', currencySymbol: 'TSh', region: 'Africa',
    exchangeRate: 2540, typicalMonthlySpend: { fuel: 254000, food: 635000, electronics: 127000 },
    energyImportDependency: 85, foodImportDependency: 20, tradeExposure: 30, currencySensitivity: 50 
  },

  // Central America & Caribbean
  { 
    code: 'PA', name: 'Panama', currency: 'PAB', currencySymbol: 'B/.', region: 'Central America',
    exchangeRate: 1, typicalMonthlySpend: { fuel: 180, food: 450, electronics: 90 },
    energyImportDependency: 85, foodImportDependency: 60, tradeExposure: 90, currencySensitivity: 10 
  },
  { 
    code: 'CR', name: 'Costa Rica', currency: 'CRC', currencySymbol: '₡', region: 'Central America',
    exchangeRate: 520, typicalMonthlySpend: { fuel: 104000, food: 260000, electronics: 52000 },
    energyImportDependency: 55, foodImportDependency: 35, tradeExposure: 50, currencySensitivity: 40 
  },

  // Others
  { 
    code: 'RU', name: 'Russia', currency: 'RUB', currencySymbol: '₽', region: 'Europe',
    exchangeRate: 92, typicalMonthlySpend: { fuel: 9200, food: 46000, electronics: 9200 },
    energyImportDependency: 0, foodImportDependency: 20, tradeExposure: 25, currencySensitivity: 75 
  },
];

export const getCountryByCode = (code: string): Country | undefined => 
  countries.find(c => c.code === code);

// Format currency with proper locale
export const formatCurrency = (amount: number, country: Country): string => {
  // For currencies with very large values, use compact notation
  if (country.exchangeRate > 1000) {
    if (amount >= 1000000) {
      return `${country.currencySymbol}${(amount / 1000000).toFixed(1)}M`;
    }
    if (amount >= 1000) {
      return `${country.currencySymbol}${(amount / 1000).toFixed(0)}K`;
    }
  }
  
  // For normal currencies, format with locale
  return `${country.currencySymbol}${amount.toLocaleString(undefined, { 
    minimumFractionDigits: 0,
    maximumFractionDigits: amount < 100 ? 2 : 0 
  })}`;
};

// Get max slider values based on currency
export const getSliderMax = (country: Country, category: 'fuel' | 'food' | 'electronics'): number => {
  const baseMax = { fuel: 1000, food: 2000, electronics: 500 };
  return Math.round(baseMax[category] * country.exchangeRate);
};

// Get step value for slider based on currency
export const getSliderStep = (country: Country): number => {
  if (country.exchangeRate >= 10000) return 100000;
  if (country.exchangeRate >= 1000) return 10000;
  if (country.exchangeRate >= 100) return 1000;
  if (country.exchangeRate >= 10) return 100;
  return 10;
};

// Country data with economic dependencies for crisis simulation
export interface Country {
  code: string;
  name: string;
  currency: string;
  currencySymbol: string;
  region: string;
  // Dependency scores (0-100) - higher = more vulnerable
  energyImportDependency: number;
  foodImportDependency: number;
  tradeExposure: number;
  currencySensitivity: number;
}

export const countries: Country[] = [
  { code: 'US', name: 'United States', currency: 'USD', currencySymbol: '$', region: 'North America', energyImportDependency: 25, foodImportDependency: 15, tradeExposure: 30, currencySensitivity: 10 },
  { code: 'GB', name: 'United Kingdom', currency: 'GBP', currencySymbol: '£', region: 'Europe', energyImportDependency: 45, foodImportDependency: 45, tradeExposure: 55, currencySensitivity: 35 },
  { code: 'DE', name: 'Germany', currency: 'EUR', currencySymbol: '€', region: 'Europe', energyImportDependency: 65, foodImportDependency: 30, tradeExposure: 70, currencySensitivity: 25 },
  { code: 'FR', name: 'France', currency: 'EUR', currencySymbol: '€', region: 'Europe', energyImportDependency: 40, foodImportDependency: 25, tradeExposure: 55, currencySensitivity: 25 },
  { code: 'IT', name: 'Italy', currency: 'EUR', currencySymbol: '€', region: 'Europe', energyImportDependency: 75, foodImportDependency: 35, tradeExposure: 55, currencySensitivity: 30 },
  { code: 'ES', name: 'Spain', currency: 'EUR', currencySymbol: '€', region: 'Europe', energyImportDependency: 70, foodImportDependency: 30, tradeExposure: 50, currencySensitivity: 28 },
  { code: 'PL', name: 'Poland', currency: 'PLN', currencySymbol: 'zł', region: 'Europe', energyImportDependency: 55, foodImportDependency: 25, tradeExposure: 65, currencySensitivity: 45 },
  { code: 'NL', name: 'Netherlands', currency: 'EUR', currencySymbol: '€', region: 'Europe', energyImportDependency: 60, foodImportDependency: 35, tradeExposure: 80, currencySensitivity: 25 },
  { code: 'JP', name: 'Japan', currency: 'JPY', currencySymbol: '¥', region: 'Asia', energyImportDependency: 90, foodImportDependency: 60, tradeExposure: 35, currencySensitivity: 30 },
  { code: 'KR', name: 'South Korea', currency: 'KRW', currencySymbol: '₩', region: 'Asia', energyImportDependency: 95, foodImportDependency: 70, tradeExposure: 75, currencySensitivity: 40 },
  { code: 'CN', name: 'China', currency: 'CNY', currencySymbol: '¥', region: 'Asia', energyImportDependency: 45, foodImportDependency: 25, tradeExposure: 35, currencySensitivity: 20 },
  { code: 'IN', name: 'India', currency: 'INR', currencySymbol: '₹', region: 'Asia', energyImportDependency: 80, foodImportDependency: 15, tradeExposure: 25, currencySensitivity: 50 },
  { code: 'AU', name: 'Australia', currency: 'AUD', currencySymbol: 'A$', region: 'Oceania', energyImportDependency: 10, foodImportDependency: 15, tradeExposure: 45, currencySensitivity: 45 },
  { code: 'BR', name: 'Brazil', currency: 'BRL', currencySymbol: 'R$', region: 'South America', energyImportDependency: 15, foodImportDependency: 10, tradeExposure: 25, currencySensitivity: 60 },
  { code: 'MX', name: 'Mexico', currency: 'MXN', currencySymbol: '$', region: 'North America', energyImportDependency: 20, foodImportDependency: 30, tradeExposure: 75, currencySensitivity: 55 },
  { code: 'CA', name: 'Canada', currency: 'CAD', currencySymbol: 'C$', region: 'North America', energyImportDependency: 5, foodImportDependency: 20, tradeExposure: 65, currencySensitivity: 35 },
  { code: 'ZA', name: 'South Africa', currency: 'ZAR', currencySymbol: 'R', region: 'Africa', energyImportDependency: 25, foodImportDependency: 20, tradeExposure: 55, currencySensitivity: 65 },
  { code: 'NG', name: 'Nigeria', currency: 'NGN', currencySymbol: '₦', region: 'Africa', energyImportDependency: 10, foodImportDependency: 35, tradeExposure: 40, currencySensitivity: 70 },
  { code: 'EG', name: 'Egypt', currency: 'EGP', currencySymbol: 'E£', region: 'Africa', energyImportDependency: 30, foodImportDependency: 55, tradeExposure: 35, currencySensitivity: 65 },
  { code: 'TR', name: 'Turkey', currency: 'TRY', currencySymbol: '₺', region: 'Europe', energyImportDependency: 75, foodImportDependency: 20, tradeExposure: 55, currencySensitivity: 75 },
  { code: 'SA', name: 'Saudi Arabia', currency: 'SAR', currencySymbol: '﷼', region: 'Middle East', energyImportDependency: 0, foodImportDependency: 80, tradeExposure: 45, currencySensitivity: 15 },
  { code: 'AE', name: 'United Arab Emirates', currency: 'AED', currencySymbol: 'د.إ', region: 'Middle East', energyImportDependency: 0, foodImportDependency: 85, tradeExposure: 60, currencySensitivity: 15 },
  { code: 'SG', name: 'Singapore', currency: 'SGD', currencySymbol: 'S$', region: 'Asia', energyImportDependency: 100, foodImportDependency: 90, tradeExposure: 95, currencySensitivity: 30 },
  { code: 'TH', name: 'Thailand', currency: 'THB', currencySymbol: '฿', region: 'Asia', energyImportDependency: 60, foodImportDependency: 15, tradeExposure: 65, currencySensitivity: 45 },
  { code: 'ID', name: 'Indonesia', currency: 'IDR', currencySymbol: 'Rp', region: 'Asia', energyImportDependency: 35, foodImportDependency: 20, tradeExposure: 40, currencySensitivity: 50 },
];

export const getCountryByCode = (code: string): Country | undefined => 
  countries.find(c => c.code === code);

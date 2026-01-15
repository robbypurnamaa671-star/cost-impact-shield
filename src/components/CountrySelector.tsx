import { countries, Country } from '@/data/countries';
import { cn } from '@/lib/utils';
import { ChevronDown, Check } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

interface CountrySelectorProps {
  value: string;
  onChange: (code: string) => void;
  label?: string;
  className?: string;
}

export const CountrySelector = ({ value, onChange, label, className }: CountrySelectorProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const selectedCountry = countries.find(c => c.code === value);
  
  const filteredCountries = countries.filter(c => 
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.code.toLowerCase().includes(search.toLowerCase())
  );
  
  // Group by region
  const groupedCountries = filteredCountries.reduce((acc, country) => {
    if (!acc[country.region]) acc[country.region] = [];
    acc[country.region].push(country);
    return acc;
  }, {} as Record<string, Country[]>);
  
  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
        setSearch('');
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  
  return (
    <div className={cn('relative', className)} ref={dropdownRef}>
      {label && (
        <label className="block text-sm font-medium text-muted-foreground mb-1.5">
          {label}
        </label>
      )}
      
      {/* Trigger button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'w-full flex items-center justify-between gap-2 px-4 py-3 rounded-lg',
          'bg-card border border-border text-foreground',
          'hover:border-primary/50 transition-colors',
          'focus:outline-none focus:ring-2 focus:ring-primary/20'
        )}
      >
        <div className="flex items-center gap-2">
          <span className="text-xl">{getFlagEmoji(value)}</span>
          <span className="font-medium">{selectedCountry?.name || 'Select country'}</span>
        </div>
        <ChevronDown className={cn('w-5 h-5 text-muted-foreground transition-transform', isOpen && 'rotate-180')} />
      </button>
      
      {/* Dropdown */}
      {isOpen && (
        <div className={cn(
          'absolute z-50 w-full mt-2 py-2 rounded-xl',
          'bg-popover border border-border shadow-lg',
          'max-h-[300px] overflow-auto animate-scale-in'
        )}>
          {/* Search input */}
          <div className="px-3 pb-2">
            <input
              type="text"
              placeholder="Search countries..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className={cn(
                'w-full px-3 py-2 rounded-lg text-sm',
                'bg-muted border-none text-foreground',
                'placeholder:text-muted-foreground',
                'focus:outline-none focus:ring-2 focus:ring-primary/20'
              )}
              autoFocus
            />
          </div>
          
          {/* Grouped list */}
          {Object.entries(groupedCountries).map(([region, regionCountries]) => (
            <div key={region}>
              <div className="px-3 py-1.5 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                {region}
              </div>
              {regionCountries.map(country => (
                <button
                  key={country.code}
                  onClick={() => {
                    onChange(country.code);
                    setIsOpen(false);
                    setSearch('');
                  }}
                  className={cn(
                    'w-full flex items-center justify-between px-3 py-2.5',
                    'hover:bg-muted transition-colors',
                    value === country.code && 'bg-primary/10'
                  )}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{getFlagEmoji(country.code)}</span>
                    <span className="text-sm font-medium text-foreground">{country.name}</span>
                    <span className="text-xs text-muted-foreground">({country.currency})</span>
                  </div>
                  {value === country.code && (
                    <Check className="w-4 h-4 text-primary" />
                  )}
                </button>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
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

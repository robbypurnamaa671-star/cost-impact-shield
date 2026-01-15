import { cn } from '@/lib/utils';
import { Calculator, Scale, Clock, TrendingUp, LucideIcon } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

interface NavItem {
  path: string;
  label: string;
  icon: LucideIcon;
}

const navItems: NavItem[] = [
  { path: '/', label: 'Simulator', icon: Calculator },
  { path: '/wallet', label: 'Wallet', icon: TrendingUp },
  { path: '/compare', label: 'Compare', icon: Scale },
  { path: '/timeline', label: 'Timeline', icon: Clock },
];

export const BottomNav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  return (
    <nav className={cn(
      'fixed bottom-0 left-0 right-0 z-50',
      'bg-card/95 backdrop-blur-md border-t border-border',
      'px-2 pb-safe'
    )}>
      <div className="max-w-md mx-auto flex justify-around items-center">
        {navItems.map(item => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;
          
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={cn('nav-item flex-1 py-3', isActive && 'active')}
            >
              <Icon className="w-5 h-5" />
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

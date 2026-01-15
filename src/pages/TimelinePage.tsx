import { PageLayout } from '@/components/PageLayout';
import { TimelineCard } from '@/components/TimelineCard';
import { historicalCrises } from '@/data/historicalCrises';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Clock, ChevronRight, Lightbulb, MapPin } from 'lucide-react';

const TimelinePage = () => {
  const [selectedCrisis, setSelectedCrisis] = useState(historicalCrises[0].id);
  
  const currentCrisis = historicalCrises.find(c => c.id === selectedCrisis);
  
  return (
    <PageLayout 
      title="Crisis Timeline"
      subtitle="Learn from historical events"
    >
      <div className="space-y-6">
        {/* Crisis selector tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
          {historicalCrises.map(crisis => (
            <button
              key={crisis.id}
              onClick={() => setSelectedCrisis(crisis.id)}
              className={cn(
                'px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all',
                selectedCrisis === crisis.id
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              )}
            >
              {crisis.name}
            </button>
          ))}
        </div>
        
        {currentCrisis && (
          <div className="space-y-5 animate-fade-in">
            {/* Crisis info card */}
            <div className="stat-card">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="w-5 h-5 text-primary" />
                <span className="font-medium text-foreground">{currentCrisis.period}</span>
              </div>
              
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">{currentCrisis.region}</span>
              </div>
              
              <p className="text-sm text-muted-foreground leading-relaxed">
                {currentCrisis.description}
              </p>
            </div>
            
            {/* Timeline events */}
            <div>
              <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
                What Happened When
              </h2>
              <TimelineCard events={currentCrisis.timeline} />
            </div>
            
            {/* Key takeaway */}
            <div className="stat-card bg-accent/10 border-accent/30">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-accent/20">
                  <Lightbulb className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-1">Key Takeaway</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {currentCrisis.keyTakeaway}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Educational note */}
            <p className="text-xs text-muted-foreground text-center">
              Historical data presented for educational purposes only. Past patterns may not predict future outcomes.
            </p>
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default TimelinePage;

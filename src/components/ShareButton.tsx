import { Button } from '@/components/ui/button';
import { Share2, Download, Copy, Check, Loader2 } from 'lucide-react';
import { useShare } from '@/hooks/useShare';
import { useRef, useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { toast } from 'sonner';

interface ShareButtonProps {
  targetRef: React.RefObject<HTMLDivElement>;
  title?: string;
  description?: string;
}

export function ShareButton({ targetRef, title, description }: ShareButtonProps) {
  const { isCapturing, shareImage, copyToClipboard } = useShare();
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    if (!targetRef.current) return;
    
    const success = await shareImage(targetRef.current, {
      title: title || 'Crisis Impact Calculator',
      text: description || 'See how global crises affect your daily costs!',
    });
    
    if (success) {
      toast.success('Ready to share!');
    }
  };

  const handleCopy = async () => {
    if (!targetRef.current) return;
    
    const success = await copyToClipboard(targetRef.current);
    
    if (success) {
      setCopied(true);
      toast.success('Copied to clipboard!');
      setTimeout(() => setCopied(false), 2000);
    } else {
      toast.error('Failed to copy image');
    }
  };

  const handleDownload = async () => {
    if (!targetRef.current) return;
    
    // shareImage falls back to download when Web Share is unavailable
    const success = await shareImage(targetRef.current, {
      title: title || 'Crisis Impact Calculator',
      text: description || 'See how global crises affect your daily costs!',
    });
    
    if (success) {
      toast.success('Image downloaded!');
    }
  };

  const supportsNativeShare = typeof navigator !== 'undefined' && !!navigator.share;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          size="sm" 
          className="gap-2"
          disabled={isCapturing}
        >
          {isCapturing ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <Share2 className="w-4 h-4" />
          )}
          Share
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-card border-border">
        {supportsNativeShare && (
          <DropdownMenuItem onClick={handleShare} className="gap-2 cursor-pointer">
            <Share2 className="w-4 h-4" />
            Share to...
          </DropdownMenuItem>
        )}
        <DropdownMenuItem onClick={handleCopy} className="gap-2 cursor-pointer">
          {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
          Copy as Image
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleDownload} className="gap-2 cursor-pointer">
          <Download className="w-4 h-4" />
          Download Image
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

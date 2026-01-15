import html2canvas from 'html2canvas';
import { useCallback, useState } from 'react';

interface ShareOptions {
  title?: string;
  text?: string;
}

export function useShare() {
  const [isCapturing, setIsCapturing] = useState(false);

  const captureElement = useCallback(async (element: HTMLElement): Promise<Blob | null> => {
    try {
      setIsCapturing(true);
      
      const canvas = await html2canvas(element, {
        backgroundColor: '#0f1419',
        scale: 2,
        logging: false,
        useCORS: true,
        allowTaint: true,
      });

      return new Promise((resolve) => {
        canvas.toBlob((blob) => {
          resolve(blob);
        }, 'image/png', 1.0);
      });
    } catch (error) {
      console.error('Failed to capture element:', error);
      return null;
    } finally {
      setIsCapturing(false);
    }
  }, []);

  const shareImage = useCallback(async (
    element: HTMLElement,
    options: ShareOptions = {}
  ): Promise<boolean> => {
    const blob = await captureElement(element);
    if (!blob) return false;

    const file = new File([blob], 'crisis-impact.png', { type: 'image/png' });
    const { title = 'Crisis Impact Calculator', text = 'Check out my crisis impact results!' } = options;

    // Try Web Share API first
    if (navigator.share && navigator.canShare?.({ files: [file] })) {
      try {
        await navigator.share({
          title,
          text,
          files: [file],
        });
        return true;
      } catch (error) {
        if ((error as Error).name === 'AbortError') {
          return false; // User cancelled
        }
        console.error('Share failed:', error);
      }
    }

    // Fallback: Download the image
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'crisis-impact.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    return true;
  }, [captureElement]);

  const copyToClipboard = useCallback(async (element: HTMLElement): Promise<boolean> => {
    const blob = await captureElement(element);
    if (!blob) return false;

    try {
      await navigator.clipboard.write([
        new ClipboardItem({ 'image/png': blob })
      ]);
      return true;
    } catch (error) {
      console.error('Copy to clipboard failed:', error);
      return false;
    }
  }, [captureElement]);

  return {
    isCapturing,
    shareImage,
    copyToClipboard,
    captureElement,
  };
}

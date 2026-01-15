import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.d61b6cbff5324f029ab62d9af01cd199',
  appName: 'Crisis Impact Calculator',
  webDir: 'dist',
  server: {
    url: 'https://d61b6cbf-f532-4f02-9ab6-2d9af01cd199.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  android: {
    allowMixedContent: true,
    backgroundColor: '#0f1419'
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#0f1419',
      showSpinner: false,
      androidScaleType: 'CENTER_CROP'
    }
  }
};

export default config;

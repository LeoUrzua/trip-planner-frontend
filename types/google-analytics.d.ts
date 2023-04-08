declare module '@analytics/google-analytics' {
  export interface GoogleAnalyticsPluginConfig {
    trackingId: string;
    anonymizeIp?: boolean;
    cookieName?: string;
    cookieExpires?: number;
    cookieFlags?: string;
    googleAds?: boolean;
    ecommerce?: boolean;
    ecommerceOptions?: object;
    doubleClick?: boolean;
    siteSpeedSampleRate?: number;
    alwaysSendReferrer?: boolean;
    sampleRate?: number;
    siteSpeedSampleRate?: number;
    sendUserId?: boolean;
    useAmpClientId?: boolean;
    customDimensions?: object;
    transport?: string;
    beforeSendHit?: (args: any) => any;
  }

  export default function googleAnalytics(
    config: GoogleAnalyticsPluginConfig,
  ): any;
}

declare module 'use-analytics' {
  import { AnalyticsInstance } from 'analytics';

  export interface AnalyticsContextValue {
    instance: AnalyticsInstance;
    page: (properties?: object) => void;
    track: (event: string, properties?: object) => void;
    identify: (userId: string, properties?: object) => void;
    reset: () => void;
    ready: () => Promise<object>;
    // eslint-disable-next-line @typescript-eslint/ban-types
    on: (event: string, callback: Function) => void;
    // eslint-disable-next-line @typescript-eslint/ban-types
    once: (event: string, callback: Function) => void;
    // eslint-disable-next-line @typescript-eslint/ban-types
    off: (event: string, callback?: Function) => void;
    getState: () => object;
  }

  export const AnalyticsContext: React.Context<AnalyticsContextValue>;

  export function AnalyticsProvider(props: {
    instance: AnalyticsInstance;
    children: React.ReactNode;
  }): JSX.Element;

  export function useAnalytics(): AnalyticsContextValue;
}

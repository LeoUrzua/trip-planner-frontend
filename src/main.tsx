import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloProvider } from '@apollo/client';
// import { AnalyticsProvider } from 'use-analytics';
import client from './apolloClient';
import App from './App';
import { ThemeProvider } from '@mui/material';
import { theme } from './theme';
import './i18n';
// import analytics from './analytics';

import Analytics from 'analytics';
import googleAnalytics from '@analytics/google-analytics';
import { AnalyticsProvider, useAnalytics } from 'use-analytics';

/* Initialize analytics & load plugins */
const track = 'G-HSSM20M23V';

// const analytics = Analytics({
//   app: 'awesome-app',
//   plugins: [
//     googleAnalytics({
//       trackingId: track,
//     }),
//   ],
// });
console.log('this a: ', track);
// console.log(e);
// const analytics = Analytics({
//   app: 'awesome-app',
//   plugins: [
//     googleAnalytics({
//       trackingId: track,
//     }),
//   ],
// });

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        {/*<AnalyticsProvider instance={analytics}>*/}
        <App />
        {/*</AnalyticsProvider>*/}
      </ApolloProvider>
    </ThemeProvider>
  </React.StrictMode>,
);

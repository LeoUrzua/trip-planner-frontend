import TripPlanner from './TripPlanner';
import { useTranslation } from 'react-i18next';
import LanguageMenu from './LanguageMenu';
import { Paper, Typography } from '@mui/material';
import VisitorMessage from './VisitorMessage';
import React from 'react';

function App() {
  const { t } = useTranslation();

  return (
    <div className="App">
      <Paper elevation={0} sx={{ p: 4, mt: 4 }}>
        <Typography variant="h3" align="center">
          {t('welcome')}
        </Typography>
      </Paper>
      <VisitorMessage />
      <LanguageMenu />
      <TripPlanner />
    </div>
  );
}

export default App;

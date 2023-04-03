// src/TripSummary.tsx
import React from 'react';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Markdown from 'react-markdown';
import { useSpring, animated } from 'react-spring';

interface TripSummaryProps {
  response: string;
}

const TripSummary: React.FC<TripSummaryProps> = ({ response }) => {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 300,
  });

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <animated.div style={fadeIn}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h5" gutterBottom>
            Resumen del Viaje
          </Typography>
          <Markdown>{response}</Markdown>
        </Paper>
      </animated.div>
    </Container>
  );
};

export default TripSummary;

import React from 'react';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Markdown from 'react-markdown';
import { useSpring, animated } from 'react-spring';
import './markdownStyles.css';

interface TripSummaryProps {
  response: string;
}

const TripSummary: React.FC<TripSummaryProps> = ({ response }) => {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 300,
  });

  if (!response) {
    return null;
  }

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <animated.div style={fadeIn}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h5" gutterBottom>
            Resumen del Viaje
          </Typography>
          <div className="markdown-content">
            <Markdown>{response}</Markdown>
          </div>
        </Paper>
      </animated.div>
    </Container>
  );
};

export default TripSummary;

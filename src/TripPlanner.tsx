import React, { useState } from 'react';
import TripForm, { FormData } from './TripForm';
import TripSummary from './TripSummary';

const TripPlanner: React.FC = () => {
  const [response, setResponse] = useState('');

  const handleFormSubmit = (data: FormData) => {
    const formattedResponse = `
## Plan de Viaje 🌎

**Destino:** ${data.location}

**Duración:** ${data.duration}

**Actividad:** ${data.activity}
`;

    setResponse(formattedResponse);
    console.log(response);
  };

  return (
    <>
      <TripForm onSubmit={handleFormSubmit} />
      <TripSummary response={response} />
    </>
  );
};

export default TripPlanner;

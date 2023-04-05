import React, { useState } from 'react';
import TripForm, { FormData } from './TripForm';
import TripSummary from './TripSummary';
import { gql, useQuery } from '@apollo/client';
import { Container } from '@mui/material';

interface GetTripSuggestionsData {
  generateItinerary: string;
}

const GET_TRIP_SUGGESTIONS = gql`
  query GetItinerary(
    $location: String!
    $duration: String
    $activities: String
  ) {
    generateItinerary(
      location: $location
      duration: $duration
      activities: $activities
    )
  }
`;
const TripPlanner: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState('');
  const { refetch } = useQuery<GetTripSuggestionsData>(GET_TRIP_SUGGESTIONS, {
    skip: true, // skip the initial query
  });

  const handleFormSubmit = async (data: FormData) => {
    try {
      setIsLoading(true);
      const apiResponse = await refetch({
        location: data.location,
        duration: data.duration,
        activities: data.activity,
      });
      setResponse(apiResponse.data.generateItinerary);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <TripForm onSubmit={handleFormSubmit} />
      {isLoading ? (
        <Container maxWidth="sm" sx={{ mt: 4 }}>
          <p>Loading...</p>
        </Container>
      ) : (
        <TripSummary response={response} />
      )}
    </>
  );
};

export default TripPlanner;

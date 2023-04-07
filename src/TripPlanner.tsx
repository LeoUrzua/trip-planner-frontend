import React, { useEffect, useState } from 'react';
import TripForm, { FormData } from './TripForm';
import TripSummary from './TripSummary';
import { gql, useQuery } from '@apollo/client';
import { Container } from '@mui/material';
import i18next from 'i18next';
import VisitorMessage from './VisitorMessage';

interface GetTripSuggestionsData {
  generateItinerary: string;
}

const GET_TRIP_SUGGESTIONS = gql`
  query GetItinerary(
    $location: String!
    $duration: String
    $activities: String
    $language: String
  ) {
    generateItinerary(
      location: $location
      duration: $duration
      activities: $activities
      language: $language
    )
  }
`;
const TripPlanner: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [response, setResponse] = useState('');
  const [queryVariables, setQueryVariables] = useState({
    location: '',
    duration: '',
    activities: '',
    language: i18next.language,
  });

  const { data, error, loading, refetch } = useQuery(GET_TRIP_SUGGESTIONS, {
    variables: queryVariables,
    skip: true,
  });

  useEffect(() => {
    const handleLanguageChanged = async (newLanguage: string) => {
      if (response) {
        try {
          setIsLoading(true);
          setQueryVariables({
            ...queryVariables,
            language: newLanguage,
          });
          const { location, duration, activities, language } = queryVariables;
          const apiResponse = await refetch({
            location,
            duration,
            activities,
            language: newLanguage,
          });
          setResponse(apiResponse.data.generateItinerary);
        } catch (error) {
          console.error(error);
          setResponse('Please try again later');
        } finally {
          setIsLoading(false);
        }
      }
    };

    i18next.on('languageChanged', handleLanguageChanged);
    return () => {
      i18next.off('languageChanged', handleLanguageChanged);
    };
  }, [refetch, response]);

  const handleFormSubmit = async (data: FormData) => {
    try {
      setIsLoading(true);
      setIsError(false);
      setQueryVariables({
        location: data.location,
        duration: data.duration,
        activities: data.activity,
        language: i18next.language,
      });
      const apiResponse = await refetch({
        location: data.location,
        duration: data.duration,
        activities: data.activity,
        language: i18next.language,
      });
      setResponse(apiResponse.data.generateItinerary);
    } catch (error) {
      setIsError(true);
      setResponse('There is an error with the server. Please try again later.');
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

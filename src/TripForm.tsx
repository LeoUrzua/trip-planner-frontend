import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

export type FormData = {
  location: string;
  duration: string;
  activity: string;
};

interface TripFormProps {
  onSubmit: (data: FormData) => void;
}
const TripForm: React.FC<TripFormProps> = ({ onSubmit }) => {
  const { handleSubmit, control } = useForm<FormData>({
    defaultValues: {
      location: '',
      duration: '3 days',
      activity: 'Ver cosas emblemáticas',
    },
  });

  const locations = [
    'Amsterdam',
    'Antigua',
    'Athens',
    'Atlanta',
    'Auckland',
    'Austin',
    'Bali',
    'Baltimore',
    'Bangkok',
    'Barcelona',
    'Beijing',
    'Belgrade',
    'Belo Horizonte',
    'Berlin',
    'Bogotá',
    'Boston',
    'Bratislava',
    'Brisbane',
    'Bruges',
    'Brussels',
    'Bucharest',
    'Budapest',
    'Buenos Aires',
    'Cairo',
    'Cancún',
    'Cape Town',
    'Cartagena',
    'Casablanca',
    'Chengdu',
    'Chicago',
    'Chongqing',
    'Copenhagen',
    'Cusco',
    'Dallas',
    'Darwin',
    'Delhi',
    'Denver',
    'Detroit',
    'Dubai',
    'Dublin',
    'Edinburgh',
    'Fiji',
    'Florence',
    'Frankfurt',
    'Galway',
    'Geneva',
    'Glasgow',
    'Goa',
    'Granada',
    'Guadalajara',
    'Guangzhou',
    'Hamburg',
    'Havana',
    'Helsinki',
    'Ho Chi Minh City',
    'Hong Kong',
    'Honolulu',
    'Houston',
    'Ibiza',
    'Innsbruck',
    'Istanbul',
    'Jaipur',
    'Jakarta',
    'Jerusalem',
    'Johannesburg',
    'Kathmandu',
    'Kiev',
    'Kraków',
    'Kuala Lumpur',
    'Kyoto',
    'Las Vegas',
    'Lima',
    'Lisbon',
    'Liverpool',
    'London',
    'Los Angeles',
    'Luxembourg City',
    'Lyon',
    'Madrid',
    'Málaga',
    'Manila',
    'Marseille',
    'Medellin',
    'Melbourne',
    'Mexico City',
    'Miami',
    'Milan',
    'Minneapolis',
    'Montreal',
    'Moscow',
    'Mumbai',
    'Munich',
    'Nairobi',
    'Nashville',
    'New Orleans',
    'New York',
    'Nice',
    'Nuremberg',
    'Orlando',
    'Osaka',
    'Oslo',
    'Oxford',
    'Palma de Mallorca',
    'Paris',
    'Perth',
    'Philadelphia',
    'Phoenix',
    'Pisa',
    'Pittsburgh',
    'Portland',
    'Porto',
    'Prague',
    'Puerto Vallarta',
    'Queenstown',
    'Quito',
    'Rabat',
    'Reykjavik',
    'Riga',
    'Rio de Janeiro',
    'Rome',
    'Rotorua',
    'Saint Petersburg',
    'Salzburg',
    'San Diego',
    'San Francisco',
    'San Juan',
    'San Salvador',
    'Santa Fe',
    'Santiago',
    'Santorini',
    'São Paulo',
    'Seattle',
    'Seoul',
    'Seville',
    'Shanghai',
    'Siem Reap',
    'Singapore',
    'Sofia',
    'Sorrento',
    'Split',
    'Stockholm',
    'Strasbourg',
    'Sydney',
    'Taipei',
    'Tallinn',
    'Tampa',
    'Tbilisi',
    'Tequila',
    'Tokyo',
    'Toronto',
    'Toulouse',
    'Tucson',
    'Valencia',
    'Vancouver',
    'Venice',
    'Verona',
    'Vienna',
    'Vilnius',
    'Warsaw',
    'Washington, D.C.',
    'Wellington',
    'Wroclaw',
    'Yangon',
    'Zagreb',
    'Zürich',
  ];
  const durations = ['3 days', '1 week', '2 weeks'];

  const activities = [
    'Ver cosas emblemáticas',
    'Tener la mejor experiencia culinaria',
    'Lo mejor que se pueda hacer',
  ];

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Plan Your Trip
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <Box mb={3}>
            <Controller
              name="location"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Autocomplete
                  {...field}
                  options={locations}
                  getOptionLabel={(option) => option}
                  renderInput={(params) => (
                    <TextField {...params} label="Select a city or country" />
                  )}
                  onChange={(e, data) => field.onChange(data)}
                />
              )}
            />
          </Box>
          <Box mb={3}>
            <FormControl fullWidth>
              <InputLabel id="duration-label">Duration</InputLabel>
              <Controller
                name="duration"
                control={control}
                render={({ field }) => (
                  <Select labelId="duration-label" label="Duration" {...field}>
                    {durations.map((duration, index) => (
                      <MenuItem key={index} value={duration}>
                        {duration}
                      </MenuItem>
                    ))}
                  </Select>
                )}
              />
            </FormControl>
          </Box>
          <Box mb={3}>
            <FormControl fullWidth>
              <InputLabel id="activity-label">Activity</InputLabel>
              <Controller
                name="activity"
                control={control}
                render={({ field }) => (
                  <Select labelId="activity-label" label="Activity" {...field}>
                    {activities.map((activity, index) => (
                      <MenuItem key={index} value={activity}>
                        {activity}
                      </MenuItem>
                    ))}
                  </Select>
                )}
              />
            </FormControl>
          </Box>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default TripForm;

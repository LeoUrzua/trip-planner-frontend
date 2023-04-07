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
import { useTranslation } from 'react-i18next';

export type FormData = {
  location: string;
  duration: string;
  activity: string;
};

interface TripFormProps {
  onSubmit: (data: FormData) => void;
}
const TripForm: React.FC<TripFormProps> = ({ onSubmit }) => {
  const { t } = useTranslation();
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

  const durations = [
    { value: 'threeDays', label: t('trip.form.durations.threeDays') },
    { value: 'oneWeek', label: t('trip.form.durations.oneWeek') },
    { value: 'twoWeeks', label: t('trip.form.durations.twoWeeks') },
  ];

  const activities = [
    {
      value: 'landmarks',
      label: t('trip.form.activities.landmarks'),
    },
    {
      value: 'culinaryExperience',
      label: t('trip.form.activities.culinaryExperience'),
    },
    {
      value: 'bestPossible',
      label: t('trip.form.activities.bestPossible'),
    },
  ];

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          {t('trip.form.title')}
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
                    <TextField
                      {...params}
                      label={t('trip.form.locationLabel')}
                    />
                  )}
                  onChange={(e, data) => field.onChange(data)}
                />
              )}
            />
          </Box>
          <Box mb={3}>
            <FormControl fullWidth>
              <InputLabel id="duration-label">
                {t('trip.form.durationLabel')}
              </InputLabel>
              <Controller
                name="duration"
                control={control}
                defaultValue={durations[0].value}
                rules={{ required: true }}
                render={({ field }) => (
                  <Select
                    labelId="duration-label"
                    label={t('trip.form.durationLabel')}
                    {...field}
                  >
                    {durations.map((duration, index) => (
                      <MenuItem key={index} value={duration.value}>
                        {duration.label}
                      </MenuItem>
                    ))}
                  </Select>
                )}
              />
            </FormControl>
          </Box>
          <Box mb={3}>
            <FormControl fullWidth>
              <InputLabel id="activity-label">
                {t('trip.form.activityLabel')}
              </InputLabel>
              <Controller
                name="activity"
                control={control}
                defaultValue={activities[0].value}
                rules={{ required: true }}
                render={({ field }) => (
                  <Select
                    labelId="activity-label"
                    label={t('trip.form.activityLabel')}
                    {...field}
                  >
                    {activities.map((activity, index) => (
                      <MenuItem key={index} value={activity.value}>
                        {activity.label}
                      </MenuItem>
                    ))}
                  </Select>
                )}
              />
            </FormControl>
          </Box>
          <Button type="submit" variant="contained" color="primary">
            {t('trip.form.submitButton')}
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default TripForm;

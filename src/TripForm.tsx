// src/TripForm.tsx
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

type FormData = {
  location: string;
  duration: string;
  activity: string;
};

const TripForm: React.FC = () => {
  const { handleSubmit, control } = useForm<FormData>({
    defaultValues: {
      location: '',
      duration: '3 days',
      activity: 'Ver cosas emblemáticas',
    },
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  const locations = ['Ciudad A', 'Ciudad B', 'Ciudad C'];
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
        <form onSubmit={handleSubmit(onSubmit)}>
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

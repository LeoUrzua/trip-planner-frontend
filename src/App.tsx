import {Button, Typography} from '@mui/material';
import './App.css'

function App() {
  return (
      <div className="App">
          <Typography variant="h1">
              Planner
          </Typography>
          <Button variant="contained" color="primary">
              start here
          </Button>
          <Button variant="contained" color="secondary">
              or here
          </Button>
      </div>
  )
}

export default App

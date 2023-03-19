import './App.css';
import HomePage from './pages/Homepage/Homepage';

import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HomePage />
      </header>
      <div className="add-button">
        <Fab color="primary" aria-label="add">
              <AddIcon />
          </Fab>
      </div>
    </div>
  );
}

export default App;

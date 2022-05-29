import './App.css';
import {
  Route, 
  Routes
} from 'react-router-dom'

import GenreGenerator from './GenreGenerator'
import PlaylistGenerator from './PlaylistGenerator'

const App = () => {
  return (
  <div className="App">
    <Routes>
      <Route path="/" element={ <GenreGenerator/> } />
      <Route path="/playlist" element={ <PlaylistGenerator/> } />
    </Routes>
  </div>
  );
}

export default App;

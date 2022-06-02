import {
  Route, 
  Routes
} from 'react-router-dom'
import { useState, useEffect } from 'react'
import GenreGenerator from './pages/GenreGenerator'
import PlaylistGenerator from './pages/PlaylistGenerator'
import Account from './pages/Account'

const code = new URLSearchParams(window.location.search).get('code')

const App = () => {
  return (    
  <div className="App">
    {code ? <Account code={code} /> : <PlaylistGenerator />}
    <Routes>
      <Route path="/" element={ <GenreGenerator/> } />
      <Route path="/playlist" element={ <PlaylistGenerator/> } />
    </Routes>
  </div>
  );

  }
export default App;

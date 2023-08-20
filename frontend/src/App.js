// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import JokeButton from './components/JokeButton';
import SaveButton from './components/SaveButton';
import FavoritesButton from './components/FavoritesButton';
import FavoritesList from './components/FavoritesList';

function App() {
  const [joke, setJoke] = useState('');
  const [favorites, setFavorites] = useState([]);

  return (
    <div className='App'>
      <JokeButton setJoke={setJoke} />
      <p>{joke}</p>
      <SaveButton joke={joke} />
      <FavoritesButton setFavorites={setFavorites} />
      <FavoritesList favorites={favorites} />
    </div>
  )
}

export default App;

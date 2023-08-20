import React from 'react';
import axios from 'axios';

function FavoritesButton({ setFavorites }) {
    const fetchFavorites = () =>
        axios
        .get('http://localhost:8080/api/jokes')
        .then(response => setFavorites(response.data));

    return <button onClick={fetchFavorites}>Show Favorite Jokes</button>
}

export default FavoritesButton;
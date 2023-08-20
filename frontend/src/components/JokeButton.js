import React from 'react';
import axios from 'axios';

function JokeButton({ setJoke }) {
    // anonymous function aka lambda
    const fetchJoke = () => 
        axios.get('https://api.chucknorris.io/jokes/random')
        .then(response => setJoke(response.data.value));

    return <button onClick={fetchJoke}>Get Chuck Norris Joke</button>
}

export default JokeButton;
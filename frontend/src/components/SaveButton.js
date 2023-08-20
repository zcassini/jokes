import React from 'react';
import axios from 'axios';

function SaveButton({ joke }) {
    const saveJoke = () =>
        axios
        .post('http://localhost:8080/api/jokes', { text: joke})
        .then(() => alert('Joke saved as favorite!'));

    return <button onClick={saveJoke}>Save as Favorite</button>
}

export default SaveButton;

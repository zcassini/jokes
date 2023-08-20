import React, { useLayoutEffect } from 'react';

function FavoritesList({ favorites }) {
    return (
        <ul>
            {favorites.map(each => (
                <li key={each.id}>{each.text}</li>
            ))}
        </ul>
    )
}

export default FavoritesList;
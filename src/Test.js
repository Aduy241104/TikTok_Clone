import React, { useEffect } from 'react';

const SpotifyFetchTest = () => {
    useEffect(() => {
        fetch('https://spotify23.p.rapidapi.com/artist_albums/?id=6UZ0ba50XreR4TM8u322gs&offset=0&limit=100', {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'e4adc75775mshdb68c103941c1c2p1ad76ejsn57542d2f9423',
                'x-rapidapi-host': 'spotify23.p.rapidapi.com',
            },
           
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                console.log('Spotify album data:', data);
            })
            .catch((error) => {
                console.error('Fetch error:', error);
            });
    }, []);

    return <div>Check the console for Spotify API response</div>;
};

export default SpotifyFetchTest;

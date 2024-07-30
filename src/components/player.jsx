import React, { useEffect, useState } from 'react';
import DataService from './services/dataService'; // Adjusted the path

function Player() {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        loadPlayers();
    }, []);

    const loadPlayers = async () => {
        try {
            let data = await DataService.getPlayers();
            setPlayers(data);
        } catch (error) {
            console.error("Error loading players:", error);
        }
    };

    return (
        <div>
            <h1>Player List</h1>
            <ul>
                {players.map(player => (
                    <li key={player._id}>{player.name} - {player.position}</li>
                ))}
            </ul>
        </div>
    );
}

export default Player;

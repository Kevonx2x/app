import React, { useEffect, useState } from 'react';
import DataService from './services/dataService'; // Adjusted the path

function Roster() {
    const [roster, setRoster] = useState([]);

    useEffect(() => {
        loadRoster();
    }, []);

    const loadRoster = async () => {
        try {
            let data = await DataService.getRoster();
            setRoster(data);
        } catch (error) {
            console.error("Error loading roster:", error);
        }
    };

    return (
        <div>
            <h1>Team Roster</h1>
            <ul>
                {roster.map(player => (
                    <li key={player._id}>{player.name} - {player.position}</li>
                ))}
            </ul>
        </div>
    );
}

export default Roster;

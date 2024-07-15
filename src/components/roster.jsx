import './styles/roster.css';
import Player from './player';

const positions = ['Quarterback', 'Running Back', 'Wide Receiver', 'Linebacker'];

const rosterPlayers = [
    {
        name: "Derek Carr",
        position: "Quarterback",
        card: 58,
        image: "dcarr.jpg",
    },
    {
        name: "Charles Woodson",
        position: "Corner Back",
        card: 8.22,
        image: "charles.jpeg",
    },
    {
        name: "Davante Adams",
        position: "Wide Receiver",
        card: 15.22,
        image: "davanteadams.jpg",
    },
    {
        name: "Maxx Crosby",
        position: "Linebacker",
        card: 69.52,
        image: "maxxcrosby.jpg",
    },
    {
        name: "Bo Jackson",
        position: "Running Back",
        card: 69.52,
        image: "bo.jpeg",
    },

];

function Roster() {
    return (
        <div className='roster'>
            <h1>Available Cards</h1>

            <div className='filters'>
                {positions.map(pos => <button className='btn btn-sm btn-success' key={pos}>{pos}</button>)}
            </div>

            {rosterPlayers.map(player => <Player key={player.name} info={player} />)}
        </div>
    );
}

export default Roster;



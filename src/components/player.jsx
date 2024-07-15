import './styles/player.css';
import QuantityAdjuster from './quantityadjuster';
import { useState } from 'react';

function Player(props) {
    const [quantity, setQuantity] = useState(1);

    function add() {
        console.log('adding ' + props.info.title);
    }

    function handleQuantityChange(val) {
        setQuantity(val);
    }

    function getTotal() {
        let total = props.info.card * quantity;
        return total.toFixed(2);
    }


    return (
        <div className="player">

            <img src={"/images/" + props.info.image} alt=""/>

            <h5>{props.info.title}</h5>


            <label className={'total'}>${getTotal()}</label>
            <label>${props.info.card.toFixed(2)}</label>


            <QuantityAdjuster onChange={handleQuantityChange}/>

            <button onClick={add} className='btn btn-sm btn-success'>Add</button>
            
            <i class="fa-solid fa-cart-shopping"></i>


        </div>
    );
}

export default Player;
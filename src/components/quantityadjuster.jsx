import { useState } from 'react';
import './styles/quantityadjuster.css';

function QuantityAdjuster(props) {
    const [quantity, setQuantity] = useState(1);

    function decrease() {
        let dec = quantity - 1;
        if (dec < 1) return;

        setQuantity(dec);
        props.onChange(dec);
    }

    function increase() {
        let inc = quantity + 1;
        if (inc > 20) return;

        setQuantity(inc);
        props.onChange(inc);
    }

    return (
        <div className="quantityAdjuster">
            <button type="button" className="btn btn-outline-secondary" disabled={quantity === 1} onClick={decrease}>
                -
            </button>

            <label className='quantity-label'>{quantity}</label>

            <button type="button" className="btn btn-outline-secondary" disabled={quantity === 20} onClick={increase}>
                +
            </button>
        </div>
    );
}

export default QuantityAdjuster;

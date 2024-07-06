import {useEffect, useState } from 'react';
import './styles/quantityadjuster.css';

function QuantityAdjuster(){
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        console.log("The quantity is " + quantity);

        return () => 
            console.log("The quantity is being cleaned up");

    }, [quantity]);




    // function decrease() {
    //     let dec = quantity - 1;
    //     if(dec < 1) return;

    //     setQuantity(dec)
    //     }

    //     function increase(){
    //     let inc = quantity + 1;
    //     if(inc > 20) return;


    //     setQuantity(inc)
    //     }


    // return(
    //     <div className="quantityAdjuster">
    //         <button disabled={quantity==1} onClick={decrease} >-</button>

    //         <label>{quantity}</label>

    //         <button disabled={quantity==20}  onClick={increase}>+</button>
    //     </div>
    // )
    return(
        <div className="quantityAdjuster">
            <button  type="button" class="btn btn-outline-secondary"  disabled={quantity===1} onClick={() => setQuantity(quantity - 1)}>
                -
            </button>

            <label className='quantity-label'>${quantity}</label>

            <button  type="button" class="btn btn-outline-secondary"  disabled={quantity===20} onClick={() => setQuantity(quantity + 1)}>
                +
            </button>
        </div>
    )
}

export default QuantityAdjuster;
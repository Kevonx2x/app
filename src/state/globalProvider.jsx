import { useState } from "react";
import DataContext from "./dataContext";


function GlobalProvider(props) {
    const [cart, setCart] = useState([]);
    const [user, setUser] = useState({ name: "Turon"});

    function addPlayerToCart(player){
        console.log("Global");

        var copy = [...cart];
        copy.push(player);
        setCart(copy);
    }

    function resetCart(){
        setCart([]);
    }


    return (
        <DataContext.Provider value={{
            cart: cart,
            user: user,
            addPlayerToCart: addPlayerToCart,
            resetCart: resetCart
        }}>
            {props.children}
        </DataContext.Provider>
    );
}

export default GlobalProvider;

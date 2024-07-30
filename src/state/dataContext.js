import { createContext } from "react";

const DataContext = createContext({
    products: [],
    cart: [],
    user: [],
    addPlayerToCart: () => {},
    resetCart: () => {},
});

export default DataContext; 
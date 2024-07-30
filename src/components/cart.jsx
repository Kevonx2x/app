import { useContext } from "react";
import DataContext from "../state/dataContext";
import "./styles/cart.css";

function Cart() {
  const cart = useContext(DataContext).cart;

  function getTotal() {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      let prod = cart[i];
      total += prod.quantity * prod.card;
    }

    return total.toFixed(2);
  }

  return (
    <div className="cart page">
      <h1>Shopping Cart</h1>

      <div className="cart-parent">
        <section className="cart-list">
          
          {cart.map((prod) => (
            <div className="cart-prod">
              <img className="prod-image" src={"/images/" + prod.image} alt="" />
              <h5>{prod.name}</h5>
              <label>{prod.card.toFixed(2)}</label>
              <label>Quantity</label>
              <label>{prod.quantity}</label>

              <button className="btn btn-success">Remove</button>
            </div>
          ))}
        </section>

        <section className="cart-menu">
          <h3>Total</h3>
          <h3>${getTotal()}</h3>

          <hr />
          <button className="btn btn-success">Checkout</button>
        </section>
      </div>
    </div>
  );
}

export default Cart;

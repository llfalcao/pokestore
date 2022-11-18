import CartModel from "../../typings/Cart";
import CartItem from "../../components/CartItem/CartItem";
import CartSummary from "../../components/CartSummary/CartSummary";
import pokeball from "../../assets/images/pokeball.png";

interface Props {
  cart: CartModel;
}

const Checkout = ({ cart }: Props) => {
  return (
    <div className="checkout">
      <h1 className="checkout__title">Checkout</h1>
      <div className="checkout__container">
        <ul className="cart__list">
          {cart.items?.map((item) => (
            <CartItem key={item.id} pokemon={item} />
          ))}
        </ul>
        <div className="checkout__orderDetails">
          <CartSummary cart={cart} />
          <div className="checkout__shipping">
            <p>Address:</p>
            <p>Route 1, Pallet Town, Kanto</p>
          </div>
          <div className="checkout__payment">
            <p>Payment Method:</p>
            <p>
              PokéPay
              <span>
                <img src={pokeball} alt="" />
              </span>
            </p>
          </div>
          <button className="checkout__placeOrderBtn" type="button">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

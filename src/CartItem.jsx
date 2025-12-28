import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "./CartSlice";

const CartItem = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const calculateTotalAmount = () => {
    return cartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );
  };

  const calculateTotalCost = () => {
    return cartItems.reduce(
      (total, item) => total + item.cost * item.quantity,
      0
    );
  };

  return (
    <div className="cart-container">
      <h2>Your Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <div className="cart-item" key={index}>
              <img src={item.image} alt={item.name} />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>₹{item.cost}</p>

                <div className="quantity-controls">
                  <button
                    onClick={() =>
                      dispatch(
                        updateQuantity({
                          name: item.name,
                          quantity: item.quantity - 1,
                        })
                      )
                    }
                    disabled={item.quantity === 1}
                  >
                    -
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() =>
                      dispatch(
                        updateQuantity({
                          name: item.name,
                          quantity: item.quantity + 1,
                        })
                      )
                    }
                  >
                    +
                  </button>
                </div>

                <button
                  className="remove-btn"
                  onClick={() => dispatch(removeItem(item.name))}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="cart-summary">
            <h3>Total Items: {calculateTotalAmount()}</h3>
            <h3>Total Cost: ₹{calculateTotalCost()}</h3>
          </div>
        </>
      )}
    </div>
  );
};

export default CartItem;

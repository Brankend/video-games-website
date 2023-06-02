import { useSelector, useDispatch } from "react-redux";
import styles from "../styles/CartPage.module.css";
import { AuthRoute } from "@/components/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../redux/cart.slice";
import NavBar from "@/components/NavBar";

export default function CartPage(props) {
  // Extracting cart state from redux store
  const cart = useSelector((state) => state.cart);

  // Reference to the dispatch function from redux store
  const dispatch = useDispatch();

  const getTotalPrice = () => {
    return cart.reduce(
      (accumulator, item) => accumulator + item.quantity * item.price,
      0
    );
  };

  return (
    <AuthRoute>
      <ProtectedRoute>
        <NavBar />
        <div className={styles.container}>
          {cart.length === 0 ? (
            <h1>Your Cart is Empty!</h1>
          ) : (
            <>
              <div className={styles.header}>
                <div>Image</div>
                <div>Product</div>
                <div>Price</div>
                <div>Quantity</div>
                <div>Actions</div>
                <div>Total Price</div>
              </div>
              {cart.map((item) => (
                <div className={styles.body}>
                  <div className={styles.image}>
                    <img src={item.coverImage} height="90" width="65" />
                  </div>
                  <p>{item.name}</p>
                  <p>EGP {item.price}</p>
                  <p>{item.quantity}</p>
                  <div className={styles.buttons}>
                    <button
                      onClick={() => dispatch(incrementQuantity(item.name))}
                    >
                      +
                    </button>
                    <button
                      onClick={() => dispatch(decrementQuantity(item.name))}
                    >
                      -
                    </button>
                    <button onClick={() => dispatch(removeFromCart(item.name))}>
                      x
                    </button>
                  </div>

                  <p>EGP {item.quantity * item.price}</p>
                </div>
              ))}
              <h2>Grand Total: EGP {getTotalPrice()}</h2>
            </>
          )}
        </div>
      </ProtectedRoute>
    </AuthRoute>
  );
}

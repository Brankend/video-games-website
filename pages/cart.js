import { useSelector, useDispatch } from 'react-redux';
import styles from '../styles/CartPage.module.css';
import {incrementQuantity,decrementQuantity,removeFromCart} from '../redux/cart.slice';

export default function CartPage (props){

    // Extracting cart state from redux store 
    const cart = useSelector((state) => state.cart);
  
    // Reference to the dispatch function from redux store
    const dispatch = useDispatch();

    const getTotalPrice = () => {
      return cart.reduce(
        (accumulator, item) => accumulator + item.quantity * item.price,
        0
      );
    }

    return (
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
                <p>$ {item.price}</p>
                <p>{item.quantity}</p>
                <div className={styles.buttons}></div>
                <p>$ {item.quantity * item.price}</p>
              </div>
            ))}
            <h2>Grand Total: $ {getTotalPrice()}</h2>
          </>
        )}
      </div>
    );
  };
  
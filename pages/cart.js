import { useSelector, useDispatch } from "react-redux";
import styles from "../styles/CartPage.module.css";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../redux/cart.slice";
import NavBar from "@/components/NavBar";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";


export default function CartPage(props) {
  // Extracting cart state from redux store
  const cart = useSelector((state) => state.cart);
  const [orderNumber, setOrderNumber] = useState(0);
  const router = useRouter();

  const [user, setUser] = useState({ email: null, uid: null });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          email: user.email,
          uid: user.uid,
        });
      } else {
        setUser({ email: null, uid: null });
        router.push("/");
      }
    });
    return () => unsubscribe();
  }, []);

  function confirmOrder() {
    
    
  // getOrderNumber
  const getOrderNumber = async () => {
    console.log(user.email);
    const docRef = doc(db, "Orders", user.email);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      await setOrderNumber(docSnap.data().orderCount);
      makeOrder();
    } else {
      // doc.data() will be undefined in this case
      await setDoc(docRef, {
        orderCount: 0,
    });
    await setOrderNumber(0);
    makeOrder();
  };
}

  //make an order
  const makeOrder = async () => {
    const docRef = doc(db, "Orders", user.email, "orderNumber", orderNumber.toString());
    await setDoc(docRef, {
      order: cart,
    });
    const docRef2 = doc(db, "Orders", user.email);
    setOrderNumber(orderNumber + 1);
    await setDoc(docRef2, {
      orderCount: orderNumber + 1,
    });
    
    alert("Order Confirmed!");
  }
  makeOrder();

}



  // Reference to the dispatch function from redux store
  const dispatch = useDispatch();

  const getTotalPrice = () => {
    return cart.reduce(
      (accumulator, item) => accumulator + item.quantity * item.price,
      0
    );
  };

  return (
    <div>
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
              <input className="inputsign" type="submit" onClick={confirmOrder} value="Make Order"/>
            </>
          )}
        </div>
        </div>
  );
}

import React from "react"
import { useRouter } from "next/router"
import { signOut } from "firebase/auth"
import { auth } from "../firebase"
import ProtectedRoute from "@/components/ProtectedRoute"
import { useSelector } from 'react-redux';
import Link from 'next/link';

export default function NavBar(){
    const cart = useSelector((state) => state.cart);

    // Getting the count of items
    const getItemsCount = () => {
      return cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
    };

    const router = useRouter();
  const gameType = ['Game', 'Xbox', 'MoreLess'];

  function handleLogOut(e) {
    e.preventDefault();
    signOut(auth)
      .then(() => {
        console.log("Signed out");
        router.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function OnCartClick(){
    router.push({
      pathname: '/cart',
    });
  }
    return (
        <header>
                <div className="containerHome">
                <img src="logoCool.png" alt="Logo Image" className="logo"></img>
                <ul className="nav-content">
                    <li>
                    <a href="#hot-deals">Hot Deals</a>
                    </li>
                    <li>
                    <a href="#play-more-pay-less">Play More Pay Less</a>
                    </li>
                    <li>
                    <a href="#xbox">Xbox</a>
                    </li>
                    <li>
                    <a href="#contact">Contact</a>
                    </li>
                    <li>
                    <form onSubmit={handleLogOut}>
                        <input className="submit2" type="submit" value="Sing Out"/>
                    </form>
                    </li>
                    <li>
                        <Link href="/cart">
                        <p>Cart ({getItemsCount()})</p>
                        </Link>
                    </li>
                </ul>
                </div>
        </header>
    );
};
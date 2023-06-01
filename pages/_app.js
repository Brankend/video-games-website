import React from "react"
import Link from "next/link"
import "../styles/css/main.css"
import "../styles/css/global.css"

import { useRouter } from "next/router"
import { AuthContextProvider } from "../components/AuthContext";

export default function App({ Component, pageProps }) {
    const router = useRouter()
    return (
        <AuthContextProvider>
            <div>
                <h1>OurSite</h1>
                <nav className="header-nav">
                    <ul>
                        <li>
                            <Link className={router.pathname == "/" ? "active" : ""} href="/">Home</Link>
                        </li>
                        <li>
                            <Link className={router.pathname == "/about" ? "active" : ""} href="/about">About</Link>
                        </li>
                        <li>
                            <Link className={router.pathname == "/blog" ? "active" : ""} href="/blog">Blog</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <Component {...pageProps} />
        </AuthContextProvider>
        
    )
}
import React from "react"
import "../styles/css/global.css"
import "../styles/css/gameCard.css"
import "../styles/css/style.css"
import "../styles/css/main.css"

import { useRouter } from "next/router"
import { AuthContextProvider } from "../components/AuthContext";

export default function App({ Component, pageProps }) {
    return (
        <AuthContextProvider>
            <Component {...pageProps} />
        </AuthContextProvider>
        
    )
}
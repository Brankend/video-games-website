import React from "react"
import "../styles/css/global.css"
import "../styles/css/gameCard.css"
import "../styles/css/style.css"
import "../styles/css/main.css"
import "../styles/css/description.css"

import ProtectedRoute from "../components/ProtectedRoute";

export default function App({ Component, pageProps }) {
    return (
            <Component {...pageProps} />
        
    )
}
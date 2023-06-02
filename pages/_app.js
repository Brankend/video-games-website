import React from "react"
import "../styles/css/global.css"
import "../styles/css/gameCard.css"
import "../styles/css/style.css"
import "../styles/css/main.css"
import "../styles/css/description.css"
import { Provider } from 'react-redux';       // Importing Provider
import store from '../redux/store';           // Importing redux store

import ProtectedRoute from "../components/ProtectedRoute";

export default function App({ Component, pageProps }) {
    return (
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
            
        
    )
}
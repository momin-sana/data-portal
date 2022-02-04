import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Pages/Login/Login";
import Register from "./Components/Pages/Register/Register";
import Home from "./Components/Pages/Home/Home";
import Reset from "./Components/Pages/Reset/Reset";
import Forgottenpass from "./Components/Pages/Forgottenpass/Forgottenpass"
import { auth } from "./Components/firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";

function App() {
    const [user, setUser] = useState(null);
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) setUser(user);
            else setUser(null);
        });
    }, []);
    return ( <
        div className = "DataPortal-App" >
        <
        Router >
        <
        Routes >
        <
        Route path = "/"
        element = { < Login / > }
        /> <
        Route path = "/register"
        element = { < Register / > }
        /> <
        Route path = "/home"
        element = { < Home user = { user }
            />} / >
            <
            Route path = "/forgottenpass"
            element = { < Forgottenpass / > }
            /> <
            Route path = "/reset"
            element = { < Reset / > }
            /> <
            /Routes> <
            /Router> <
            /div>
        );
    }

    export default App;
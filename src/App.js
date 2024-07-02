import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Pages/Login/Login";
import Register from "./Components/Pages/Register/Register";
import Home from "./Components/Pages/Home/Home";
import Forgottenpass from "./Components/Pages/Forgottenpass/Forgottenpass"
import { auth } from "./Components/firebase/firebase";

function App() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                setUser(user.uid)
            } else {
                setUser(null)
            };
        });
    }, []);
    return ( 
        <div className = "DataPortal-App" >
            <Router >
            <Routes >
                <Route path = "/"
                element = { <Login/> } /> 
                <Route path = "/register"
                element = { <Register/> }/> 
                <Route path = "/home"
                element = { <Home user = { user }/>} />
                <Route path = "/forgottenpass"
                element = { <Forgottenpass/> }/>

            </Routes> 
            </Router> 
        </div>
        );
    }

    export default App;
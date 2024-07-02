import "./Forgottenpass.css";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase";

function Forgottenpass() {
    const [email, setEmail] = useState("");
    const [user, loading, error] = useAuthState(auth);

    useEffect(() => {
        if (loading) return;
        // if (user) navigate("/home");
    }, [user, loading]);

    // PASSWORD REST
    const sendPasswordResetEmail = async(email) => {
        try {
            await sendPasswordResetEmail(auth.currentUser, email);
            console.log(email, "email");
            console.log(auth, "auth");
            alert("Password reset link sent!");
        } catch (err) {
            console.error(err);
            alert(err.message);
        }
    };

    return ( 
        <div className = "forgottenpass" >
        <div className = "forgottenpass-container" >
            <input type = "text"
            className = "forgottenpass-textBox"
            value = { email }
            onChange = {
                (e) => setEmail(e.target.value) }
            placeholder = "E-mail Address" /
            >
            <button className = "forgottenpass-btn"
            onClick = {
                () => sendPasswordResetEmail(email) } >
            Send password reset email 
            </button> 
        <div >
        Don 't have an account? <Link to="/register">Register</Link> now. 
        </div> 
        </div> 
        </div>
    );
}
export default Forgottenpass;
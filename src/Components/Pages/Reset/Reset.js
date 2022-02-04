import "./Reset.css";
import React, { useEffect, useState } from "react";
import { sendPasswordResetEmail } from "firebase/compat/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase";

function Reset() {
    const [email, setEmail] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (loading) return;
        // if (user) navigate("/home");
    }, [user, loading]);

    // PASSWORD REST
    const sendPasswordResetEmail = async(email) => {
        try {
            await sendPasswordResetEmail(auth, email);
            console.log(email, "email")
            console.log(auth, "auth")
            alert("Password reset link sent!");
        } catch (err) {
            console.error(err);
            alert(err.message);
        }
    };

    return ( <
        div className = "reset" >
        <
        div className = "reset-container" >
        <
        input type = "text"
        className = "reset-textBox"
        value = { email }
        onChange = {
            (e) => setEmail(e.target.value) }
        placeholder = "E-mail Address" /
        >
        <
        button className = "reset-btn"
        onClick = {
            () => sendPasswordResetEmail(email) } >
        Send password reset email <
        /button> <
        div >
        Don 't have an account? <Link to="/register">Register</Link> now. <
        /div> <
        /div> <
        /div>
    );
}
export default Reset;
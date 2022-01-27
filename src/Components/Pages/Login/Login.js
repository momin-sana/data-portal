import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleSubmit = async(e) => {
        e.preventDefault();
        // console.log(email, password, "email,password");
        try {
            await auth.signInWithEmailAndPassword(email, password);
            navigate('/home')
                // console.log(result, "result");
        } catch (error) {
            alert(error);
        }
    };

    return ( <
        div className = "login" >
        <
        h3 > Please Login < /h3> <
        div className = "login-container" >

        <
        form onSubmit = {
            (e) => handleSubmit(e) } >
        <
        input type = "email"
        className = "login-textbox"
        // value={email}
        placeholder = "E-mail Address"
        onChange = {
            (e) => setEmail(e.target.value) }
        /> <
        input type = "password"
        className = "login-textbox"
        // value={password}
        placeholder = "Password"
        onChange = {
            (e) => setPassword(e.target.value) }
        /> <
        /form>

        <
        div className = "login-btn" >
        <
        button type = "submit"
        onClick = { handleSubmit } > Login < /button> <
        /div> <
        div className = "login-register" >
        <
        p >
        SignUp
        if Don 't have an account <
        Link to = "/register" > Register < /Link> now. <
        /p> <
        /div> <
        /div> <
        /div>
    );
}

export default Login;
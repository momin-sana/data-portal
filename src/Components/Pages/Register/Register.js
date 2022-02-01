import React, { useEffect, useState } from "react";
import { auth } from "../../firebase/firebase";
import { Link } from "react-router-dom";
import "./Register.css";
import { useNavigate } from "react-router-dom";

function Register() {

    // CREATE USER WITH EMAIL AND PASSWORD
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    // CREATE USER WITH EMAIL AND PASSWORD
    const handleSubmit = async(e) => {
        e.preventDefault();
        // console.log(email, password, "email,password");
        try {
            await auth.createUserWithEmailAndPassword(email, password);
            navigate('/home')
                // console.log(result, "result");
        } catch (error) {
            alert("invalid email or password");
        }
    };

    return ( <
        div className = "register" >
        <
        h3 > Please Signup < /h3> <
        div className = "register-container" >
        <
        form onSubmit = {
            (e) => handleSubmit(e) } >
        <
        input type = "email"
        className = "register-textbox"
        // value={email}
        placeholder = "E-mail Address"
        onChange = {
            (e) => setEmail(e.target.value) }
        /> <
        input type = "password"
        className = "register-textbox"
        // value={password}
        placeholder = "Password"
        onChange = {
            (e) => setPassword(e.target.value) }
        /> <
        /form> <
        div className = "register-btn" >
        <
        button type = "submit"
        onClick = { handleSubmit } > Submit < /button> { /* <Link to="/home"> Register </Link>*/ } <
        /div> <
        div className = "register-login" >
        <
        p >
        if Already have an account ? < Link to = "/" > Login < /Link> now. <
        /p> <
        /div> <
        /div> <
        /div>
    );
}

export default Register;
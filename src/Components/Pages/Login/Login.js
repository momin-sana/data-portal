import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth, provider } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";
import "./Login.css";


function Login() {
    // SIGNIN WITH EMAIL AND PASSWORD
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const user = auth.currentUser;

    // SIGNIN WITH EMAIL AND PASSWORD
    const handleSubmit = async(e) => {
        e.preventDefault(); //to avoid page refresh
        // console.log(email, password, "email,password");
        try {
            await auth.signInWithEmailAndPassword(email, password);
            navigate("/home");
            alert(`Welcome ${email}!`);

            if (user !== null) {
                user.providerData.forEach((profile) => {
                    console.log("Sign-in provider: ", profile.providerId);
                    console.log("  Provider-specific UID: ", profile.uid);
                    console.log("  Name: ", profile.displayName);
                    console.log("  Email: ", profile.email);
                    console.log("  Photo URL: ", profile.photoURL);
                });
            }

            // console.log(result, "result");
        } catch (error) {
            alert("invalid email or password");
        }
    };

    // google authentication
    const googleSignIn = (e) => {
        e.preventDefault();
        auth
            .signInWithPopup(provider)
            .then(() => navigate("/home"))
            .catch((error) => alert("invalid email or password"));
    };

    return ( <
        div className = "login" >
        <
        h3 > Please Login < /h3> <
        div className = "login-container" > { /* SIGNIN WITH EMAIL AND PASSWORD */ } <
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
        onClick = { handleSubmit } >
        Login <
        /button> <
        /div> <
        div className = "login-googleSignIn" >
        <
        button onClick = { googleSignIn } > Sign In with Google < /button> <
        /div> { /**/ } <
        div className = "login-reset" >
        <
        Link to = "/reset" > Forgetten Password ? < /Link> <
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
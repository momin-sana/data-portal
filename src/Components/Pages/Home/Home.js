import React from "react";
import { Link } from "react-router-dom";
import useDetails from "../../customHooks/useDetails";
import { auth } from "../../firebase/firebase";

function Home() {
    const user = auth.currentUser;
    const details = useDetails();

    return ( <
        div >
        <
        div >

        {
            user ? ( <
                div >
                <
                p > Congratulation You have successfully logged in < /p> { details } <
                Link to = "/" > Logout < /Link> <
                /div>
            ) : ( <
                >
                <
                div >
                <
                p > You are not registered! < /p> <
                p >
                Please < Link to = "/" > Login < /Link> or <
                Link to = "/register" > Register < /Link> Yourself Now! <
                /p> <
                /div> <
                />
            )
        } <
        /div> <
        /div>
    );
}

export default Home;
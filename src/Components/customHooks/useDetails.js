// import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import { auth } from "../firebase/firebase";

const useDetails = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    //   const [photoURL, setPhotoURL] = useState("");
    const user = auth.currentUser;
    useEffect(() => {
        const displayDetails = () => {

            user.providerData.forEach((profile) => {
                setName(profile.displayName);
                setEmail(profile.email);
                // setPhotoURL(profile.photoURL);
            });

        };
        displayDetails();
    }, []);
    return ( <
        div >
        <
        h3 > Your account details: < /h3>  <
        ul style = {
            { listStyleType: "none" } } >
        <
        li > Your Name: { name } < /li> <
        li > Your Email Address: { email } < /li> <
        li > Your Photo: < img alt = "Profile Pic"
        src = { user.photoURL }
        /></li >
        <
        /ul> <
        /div>
    );
};

export default useDetails;
import React from 'react'
import { Link } from 'react-router-dom';


function Home({ user }) {
    return ( <
        div >
        <
        p >
        Congratulation You have successfully logged in
        <
        /p> <
        div > {
            user ?
            <
            Link to = "/" > Logout < /Link> :
                <
                >
                <
                Link to = "/register" > Register < /Link> <
                Link to = "/" > Login < /Link> <
                />
        } <
        /div> <
        /div>
    )
}

export default Home;
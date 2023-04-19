import React from "react";
import { useLocation } from "react-router-dom";

function Home (){
    const location = useLocation()
    
    return(
        <div className="homepage">

            <h1>Welcome {location.state.id} I hope you enjoy the site!</h1>

        </div>
    )
};

export default Home
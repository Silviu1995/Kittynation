import React from "react";
import ErrorBoundry from "./error.boundry";
const Carte = ({id,name,email}) => {
    // if(true) {
    //     throw new Error('da');
    // }
    return(
        <div className='tc bg-light-green dib br3 pa5 ma2 grow' >
            <img alt="kitty" src={`https://robohash.org/${id}?set=set4`} /> 
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Carte;
import React from "react";
import Carte from './carte.js';

const CardList = ({robots}) => {
    return(
        <div>
            {
                robots.map((x,i) => {
                return( 
                    <Carte 
                    key={i} 
                    id={robots[i].id} 
                    name={robots[i].name} 
                    email={robots[i].email}/>
                 );
                })
            }
        </div>  
    )
}

 export default CardList;
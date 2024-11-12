import React from "react";

const Card = (props) => {
    return (
        <div className="card" style={{"width": "18rem", flex: "none", margin: "10px"}}>
            <img src={"https://starwars-visualguide.com/assets/img/characters/"+props.uid+".jpg"} class="card-img-top" alt="Personajes"/>
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text"></p>
                </div>
        </div>
    )
}
export default Card
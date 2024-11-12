import React from "react";

const CardPlanet = (props) => {
    return (
        <div className="card" style={{"width": "18rem", flex: "none", margin: "10px"}}>
            <img src={ 
                props.uid == 1?
                "https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png": 
                "https://starwars-visualguide.com/assets/img/planets/"+props.uid+".jpg"} class="card-img-top" alt={props.name}/>
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text"></p>
                </div>
        </div>
    )
}
export default CardPlanet
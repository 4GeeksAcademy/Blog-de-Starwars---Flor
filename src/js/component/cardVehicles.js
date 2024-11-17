import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const CardVehicle = (props) => {
    const{actions, store}=useContext(Context)
    const esFavorito=store.misFavoritos.includes(props.name)

    return (
        <div className="card border-warning" style={{"width": "18rem", flex: "none", margin: "10px"}}>
            <img src={ 
                "https://starwars-visualguide.com/assets/img/vehicles/"+props.uid+".jpg"} class="card-img-top" alt={props.name}/>
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <Link to={"/singleVehicle/" + props.uid}>
                        <button className="btn btn-outline-dark float-start">Mas Info</button>
                    </Link>
                    <button className="btn btn-outline-warning float-end" onClick={()=>actions.favoritos(props.name)}>
                        <i className={`fa fa-heart ${esFavorito? "text-warning": "text-dark"}`}></i>
                    </button>
                </div>
        </div>
    )
}
export default CardVehicle
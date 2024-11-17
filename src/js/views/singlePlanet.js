import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SinglePlanet = props => {
	const { store, actions } = useContext(Context);
	const { theid } = useParams();

	useEffect(() => {
		actions.loadInfoPlanet(theid)
	}, [])
	return (
		<div className="container d-flex justify-content-center">
			<div className="card mb-3 border-warning" style={{maxWidth: "900px"}}>
				<div className="row g-0">
					<div className="col-md-6 d-flex flex-center">
						<img src={"https://starwars-visualguide.com/assets/img/planets/"+theid+".jpg"} className="img-fluid rounded-start" alt="..."/>
					</div>
					<div className="col-md-6 d-flex align-items-center">
						<div className="card-body">
							<h5 className="card-title"><strong>{store.planet?.properties?.name}: {store.planet?.description}</strong></h5>
							<p className="card-text"><strong>climate:</strong> {store.planet?.properties?.climate}</p>
							<p className="card-text"><strong>created:</strong> {store.planet?.properties?.created}</p>
							<p className="card-text"><strong>diameter:</strong> {store.planet?.properties?.diameter}</p>
							<p className="card-text"><strong>edited:</strong> {store.planet?.properties?.edited}</p>
							<p className="card-text"><strong>gravity:</strong> {store.planet?.properties?.gravity}</p>
							<p className="card-text"><strong>orbital_period:</strong> {store.planet?.properties?.orbital_period}</p>
							<p className="card-text"><strong>population:</strong> {store.planet?.properties?.population}</p>
							<p className="card-text"><strong>rotation_period:</strong> {store.planet?.properties?.rotation_period}</p>
							<p className="card-text"><small className="text-body-secondary"><strong>surface_water:</strong> {store.planet?.properties?.surface_water}</small></p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

SinglePlanet.propTypes = {
	match: PropTypes.object
};

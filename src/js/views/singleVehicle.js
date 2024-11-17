import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SingleVehicle = props => {
	const { store, actions } = useContext(Context);
	const { theid } = useParams();

	useEffect(() => {
		actions.loadInfoVehicle(theid)
	}, [])
	return (
		<div className="container d-flex justify-content-center ">
			<div className="card mb-3 border-warning" style={{maxWidth: "900px"}}>
				<div className="row g-0">
					<div className="col-md-6 d-flex flex-center">
						<img src={"https://starwars-visualguide.com/assets/img/vehicles/"+theid+".jpg"} className="img-fluid rounded-start" alt="..."/>
					</div>
					<div className="col-md-6 d-flex align-items-center">
						<div className="card-body">
							<h5 className="card-title"><strong>{store.vehicle?.properties?.name}: {store.vehicle?.description}</strong></h5>
							<p className="card-text"><strong>cargo_capacity:</strong> {store.vehicle?.properties?.cargo_capacity}</p>
							<p className="card-text"><strong>consumables:</strong> {store.vehicle?.properties?.consumables}</p>
							<p className="card-text"><strong>cost_in_credits:</strong> {store.vehicle?.properties?.cost_in_credits}</p>
							<p className="card-text"><strong>created:</strong> {store.vehicle?.properties?.created}</p>
							<p className="card-text"><strong>crew:</strong> {store.vehicle?.properties?.crew}</p>
							<p className="card-text"><strong>length:</strong> {store.vehicle?.properties?.length}</p>
							<p className="card-text"><strong>manufacturer:</strong> {store.vehicle?.properties?.manufacturer}</p>
							<p className="card-text"><strong>max_atmosphering_speed:</strong> {store.vehicle?.properties?.max_atmosphering_speed}</p>
							<p className="card-text"><strong>model:</strong> {store.vehicle?.properties?.model}</p>
							<p className="card-text"><small className="text-body-secondary"><strong>passengers:</strong> {store.vehicle?.properties?.passengers}</small></p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

SingleVehicle.propTypes = {
	match: PropTypes.object
};

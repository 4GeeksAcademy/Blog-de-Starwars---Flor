import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const { theid } = useParams();

	useEffect(() => {
		actions.loadInfoPeople(theid)
	}, [])
	return (
		<div className="container d-flex justify-content-center">
			<div className="card mb-3 border-warning" style={{maxWidth: "900px"}}>
				<div className="row g-0">
					<div className="col-md-6 d-flex flex-center">
						<img src={"https://starwars-visualguide.com/assets/img/characters/"+theid+".jpg"} className="img-fluid rounded-start" alt="..."/>
					</div>
					<div className="col-md-6 d-flex align-items-center">
						<div className="card-body">
							<h5 className="card-title "><strong>{store.person?.properties?.name}: {store.person?.description}</strong></h5>
							<p className="card-text"><strong>birth_year:</strong> {store.person?.properties?.birth_year}</p>
							<p className="card-text"><strong>eye_color:</strong> {store.person?.properties?.eye_color}</p>
							<p className="card-text"><strong>gender:</strong> {store.person?.properties?.gender}</p>
							<p className="card-text"><strong>hair_color:</strong> {store.person?.properties?.hair_color}</p>
							<p className="card-text"><strong>height:</strong> {store.person?.properties?.height}</p>
							<p className="card-text"><strong>mass:</strong> {store.person?.properties?.mass}</p>
							<p className="card-text"><strong>skin_color:</strong> {store.person?.properties?.skin_color}</p>
							<p className="card-text"><small className="text-body-secondary"><strong>created:</strong> {store.person?.properties?.created}</small></p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};

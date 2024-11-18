import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { actions, store } = useContext(Context)
	return (
		<nav className="navbar navbar-light bg-dark mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 mx-5 text-warning" style={{"fontFamily": "Star Wars"}}><strong>Star Wars</strong></span>
			</Link>
			<div className="ml-auto">
				<div className="dropdown">
					<button className="btn btn-warning dropdown-toggle mx-5" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favoritos
					</button>
					<ul className="dropdown-menu dropdown-menu-end">
						{store.misFavoritos.map((item, index) => (
							<li><a className="dropdown-item" key={index}>
								{item}
								<button className="btn btn-outline-danger float-end" onClick={() => actions.favoritos(item)}>
									<i className="fa fa-trash"></i>
								</button>
							</a></li>
						))}


					</ul>
				</div>

			</div>
		</nav>
	);
};

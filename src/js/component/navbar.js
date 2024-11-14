import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { actions, store } = useContext(Context)
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Star Wars</span>
			</Link>
			<div className="ml-auto">
				<div className="dropdown">
					<button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favoritos
					</button>
					<ul className="dropdown-menu dropdown-menu-end">
						{store.misFavoritos.map((item, index) => (
							<li><a className="dropdown-item" key={index}>
								{item}
								<button className="btn btn-outline-danger float-end" onClick={() => actions.favoritos(props.name)}>
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

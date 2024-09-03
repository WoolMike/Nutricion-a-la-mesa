import React from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";


export const Navbar = () => {
	return (
		<div className="color-personalizado">
			<nav className="navbar navbar-expand-lg">
				<div className="container-fluid">
					<a className="navbar-brand" href="/">logo</a>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse " id="navbarNavDropdown">
						<ul className="navbar-nav ms-auto me-5 mb-2 mb-lg-0">
							<li className="nav-item">
		
									<a className="nav-link" aria-current="page" href="/recetas">Recetas</a>
								
							</li>
							<li className="nav-item ">
								<a className="nav-link" aria-current="page" href="/post">Post</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};

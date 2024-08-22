import React from "react";
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
							<li class="nav-item ">
								<a class="nav-link active" aria-current="page" href="/">Recetas</a>
							</li>
							<li class="nav-item ">
								<a class="nav-link active" aria-current="page" href="/">Post</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};

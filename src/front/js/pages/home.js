import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import imagenejemplo from "../../img/how-to.png";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<div className="mt-5 ms-5 me-5 mb-5">
				<div class="card">
					<div class="card-body">
						<h1>Sobre mi</h1>
						<p>
							Soy una nutriologa con la vision de mejorar la calidad de vida de las personas de una manera simple y poco a poco.
							Todo cambio tiene un esfuerzo, hay que esforzarnos juntos y poco a poco.
						</p>
					</div>
				</div>
			</div>
			<div className="ms-5 me-5">
				<div class="card">
					<div class="card-body">
						<h2>Recetas Recomendadas</h2>
						<div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
							<div class="carousel-inner">
								<div class="carousel-item active">
									<div className="container-fluid">
										<div className="row">
											<div className="col-4 ms-5 me-5 mt-5 mb-5">
												<img src="https://www.bupasalud.com.mx/sites/default/files/inline-images/bupa_598072389.jpg" class="imagen1" alt="..." />
											</div>
											<div className="col mt-5 mb-5">
												<h1>Salmon a las hierbas</h1>
												<p>
													Una de las mejores opciones para las personas amantes del pescado.

												</p>
											</div>
										</div>
									</div>
								</div>
								<div class="carousel-item">
									<div className="container-fluid">
										<div className="row">
											<div className="col-4 ms-5 me-5 mt-5 mb-5">
												<img src="https://www.bupasalud.com.mx/sites/default/files/inline-images/bupa_193863854.jpg" class="imagen1" alt="..." />
											</div>
											<div className="col mt-5 mb-5">
												<h1>Legumbres</h1>
												<p>
													Tenemos que comer muchas Legumbres en nuestro dia a dia para que el plato del buen comer se cumpla.
												</p>
											</div>
										</div>
									</div>
								</div>
								<div class="carousel-item">
									<div className="container-fluid">
										<div className="row">
											<div className="col-4 ms-5 me-5 mt-5 mb-5">
												<img src="https://www.bupasalud.com.mx/sites/default/files/inline-images/bupa_85378166.jpg" class="imagen1" alt="..." />
											</div>
											<div className="col mt-5 mb-5">
												<h1>Comida chatarra</h1>
												<p>
													Una de las mejores comidas para las personas que no tienen tiempo y aparte sabe chido.
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
								<span class="carousel-control-prev-icon" aria-hidden="true"></span>
								<span class="visually-hidden">Previous</span>
							</button>
							<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
								<span class="carousel-control-next-icon" aria-hidden="true"></span>
								<span class="visually-hidden">Next</span>
							</button>
						</div>
					</div>
				</div>
				<div className="mt-5">
					<div class="card">
						<div class="card-body">
							<h1>Testimonios</h1>
							<div className="container">
								<div className="row">
									<div className="col-4">
										<div class="card text-bg-light mb-3" >
											<div class="card-header">Maria</div>
											<div class="card-body">
												<h5 class="card-title">Calificacion: <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></h5>
												<p class="card-text">Me encantaron las recetas, super simples de enterder y de preparar, nunca me aburro de la comida.</p>
											</div>
										</div>
									</div>
									<div className="col-4">
										<div class="card text-bg-light mb-3" >
											<div class="card-header">José</div>
											<div class="card-body">
												<h5 class="card-title">Calificacion: <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></h5>
												<p class="card-text">Nunca me imagine estar en una pagina de nutricion, sin embargo me agrada demasiado la pagina, me encanta</p>
											</div>
										</div>
									</div>
									<div className="col-4">
										<div class="card text-bg-light mb-3" >
											<div class="card-header">Angel</div>
											<div class="card-body">
												<h5 class="card-title">Calificacion: <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></h5>
												<p class="card-text">Esta es una prueba de la descripcion de los testimonios.</p>
											</div>
										</div>
									</div>

								</div>

							</div>

						</div>
					</div>
					<div>
						<div class="card">
							<div class="card-body text-center">
								This is some text within a card body.
							</div>
						</div>
					</div>
				</div>

			</div>
		</div>

	);
};

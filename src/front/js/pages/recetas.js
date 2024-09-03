import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import imagenejemplo from "../../img/how-to.png";
import "../../styles/home.css";
import "../../styles/recetas.css";


export const Recetas = () => {
    return (
        <div class="container">
            <div class="row">
                <div class="col-md-6 content-left">
                    <h1>"Sopa de Esquitesencia"</h1>
                    <p>Tiempo de preparación: 10 minutos</p>
                    <p>Tiempo de cocción: 15 minutos</p>
                    <p>Porciones: 4</p>
                    <div class="tags">
                        <span class="badge ">FACIL</span>
                        <span class="badge ">RAPIDA</span>
                        <span class="badge ">VEGETARIANA/VEGANA</span>
                    </div>
                    <div class="tags">
                        <span><img class="col-md-1 mt-3" src="" alt="" /> </span>
                        <span><img class="col-md-1 mt-3" src="./img/ladle.png" alt="" /> </span>
                        <span><img class="col-md-1 mt-3" src="./img/pressure-cooker.png" alt="" /> </span>
                        <span><img class="col-md-1 mt-3" src="./img/weight-scale.png" alt="" /> </span>
                    </div>
                    <button type="button" class="btn btn-main mt-4">¡VAMOS A COCINAR!</button>
                    <div class="author-info mt-3">
                        <img src="https://img.hellofresh.com/w_3840,q_auto,f_auto,c_limit,fl_lossy/hellofresh_website/es/cms/SEO/recipes/ensalada_de_judias_con_jamon_y_langostinos.jpeg" alt="Author" class="rounded-circle" width="40" />
                        <span>Por: Maria Fernanda Sanchez Vite</span>

                    </div>
                </div>
                <div class="col-md-6 content-right">
                    <img src="https://img.hellofresh.com/w_3840,q_auto,f_auto,c_limit,fl_lossy/hellofresh_website/es/cms/SEO/recipes/ensalada_de_judias_con_jamon_y_langostinos.jpeg" alt="Recipe" class="img-fluid" />
                    <button type="button" class="btn btn-secondary mt-3">MIRA COMO SE HACE</button>
                </div>
            </div>

            <div class="row mt-5">
                <div class="col-md-6">
                    <h2>Ingredientes</h2>
                    <button class="btn btn-highlight mb-3">DATO CURIOSO</button>
                    <table class="table">
                        <thead>
                            <tr>
                                <th colspan="2" class="text-start">Venison & braise</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Venison shoulder</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>Neutral oil</td>
                                <td>A drizzle</td>
                            </tr>
                            <tr>
                                <td>Salt</td>
                                <td>5 g per lb</td>
                            </tr>
                            <tr>
                                <td>Stock</td>
                                <td>500 g</td>
                            </tr>
                            <tr>
                                <td>White onions, thinly sliced</td>
                                <td>1/2</td>
                            </tr>
                            <tr>
                                <td>Black pepper</td>
                                <td>To taste</td>
                            </tr>
                            <tr>
                                <td>Flour</td>
                                <td>To coat</td>
                            </tr>
                            <tr>
                                <th colspan="2" class="text-start">Chile sauce</th>
                            </tr>
                            <tr>
                                <td>Crushed tomatoes</td>
                                <td>800 g</td>
                            </tr>
                            <tr>
                                <td>Water</td>
                                <td>500 g</td>
                            </tr>
                            <tr>
                                <td>Pasilla chiles</td>
                                <td>50 g</td>
                            </tr>
                            <tr>
                                <td>Ancho peppers</td>
                                <td>50 g</td>
                            </tr>
                            <tr>
                                <td>Salt</td>
                                <td>To taste</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="col-md-6">
                    <div class="description-box ">
                        <p>Pareciera una sopa normal de chile poblano, elote y calabaza. Siendo una variante de la “Sopa de la Milpa”. Pero con la diferencia que se agrega mantequilla otorgándole una característica repleta de sabor, debido a que esta constituida de ácidos grasos y compuestos aromáticos. Cuando se calienta, estos compuestos se liberan, creando aromas complejos. Además, la grasa de la mantequilla actúa como un solvente para moléculas de sabor liposolubles, permitiendo que estos sabores se liberen lentamente en la boca.</p>
                        <div class="author-info mt-3">
                            <img src="author-image.png" alt="Author" class="rounded-circle" width="40" />
                            <span>Maria Fernanda Sanchez Vite</span>
                            <span class="creator-label">CREADORA</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

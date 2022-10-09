import Layout from "../../components/layout";
import proyecto1 from "../../../public/proyecto1.png"
import proyecto2 from "../../../public/proyecto2.png"
import proyecto3 from "../../../public/proyecto3.png"
import Image from "next/image";

function Proyectos() {
    return ( 
        <Layout>
            <div className="my-8 bg-gray-900 py-4 rounded-lg"> 
                <h2 className="text-center text-2xl sm:text-4xl text-white font-bold" >Proyectos</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:px-32 py-8">
                    <div className="card mx-4 sm:w-96 bg-base-100 ">
                        <figure className=""><Image src={proyecto1} alt="Shoes" /></figure>
                            <div className="card-body bg-primary">
                                <h2 className="card-title text-white">Valorant Web</h2>
                                <p>Es una pagina donde encontraras informacion de los personajes del juego Valorant</p>
                                <div className="card-actions justify-start py-4">
                                    <div className="badge badge-outline">React</div> 
                                    <div className="badge badge-outline">Typescript</div>
                                    <div className="badge badge-outline">Style Component</div>
                                </div>
                                <div className="btn-group justify-center">
                                    <button className="btn">Web oficial</button>
                                    <button className="btn">Repositorio</button>
                                </div>
                            </div>
                    </div> 
                    <div className="card mx-4 sm:w-96 bg-base-100 ">
                        <figure><Image src={proyecto2} alt="Shoes" /></figure>
                            <div className="card-body bg-primary">
                                <h2 className="card-title text-white">Valorant Web</h2>
                                <p>Es una pagina donde encontraras informacion de los personajes del juego Valorant</p>
                                <div className="card-actions justify-start py-4">
                                    <div className="badge badge-outline">React</div> 
                                    <div className="badge badge-outline">Typescript</div>
                                    <div className="badge badge-outline">Style Component</div>
                                </div>
                                <div className="btn-group justify-center">
                                    <button className="btn">Web oficial</button>
                                    <button className="btn">Repositorio</button>
                                </div>
                            </div>
                    </div> 
                    <div className="card mx-4 sm:w-96 bg-base-100">
                        <figure><Image src={proyecto3} alt="Shoes" /></figure>
                            <div className="card-body bg-primary">
                                <h2 className="card-title text-white">Valorant Web</h2>
                                <p>Es una pagina donde encontraras informacion de los personajes del juego Valorant</p>
                                <div className="card-actions justify-start py-4">
                                    <div className="badge badge-outline">React</div> 
                                    <div className="badge badge-outline">Typescript</div>
                                    <div className="badge badge-outline">Style Component</div>
                                </div>
                                <div className="btn-group justify-center">
                                    <button className="btn">Web oficial</button>
                                    <button className="btn">Repositorio</button>
                                </div>
                            </div>
                    </div> 
                    <div className="card mx-4 sm:w-96 bg-base-100">
                            <div className="card-body bg-primary">
                                <h2 className="card-title text-white">Valorant Web</h2>
                                <p>Es una pagina donde encontraras informacion de los personajes del juego Valorant</p>
                                <div className="card-actions justify-start py-4">
                                    <div className="badge badge-outline">React</div> 
                                    <div className="badge badge-outline">Typescript</div>
                                    <div className="badge badge-outline">Style Component</div>
                                </div>
                                <div className="btn-group justify-center">
                                    <button className="btn">Web oficial</button>
                                    <button className="btn">Repositorio</button>
                                </div>
                            </div>
                    </div> 
                </div>
            </div>
        </Layout>
     );
}

export default Proyectos;
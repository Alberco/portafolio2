import Layout from "../../components/layout";
function Contacto() {
    return (  
        <Layout>
            <div className="hero min-h-screen my-4 rounded-lg bg-gray-900" >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h2 className="mb-5 text-5xl font-bold text-white">Contacto</h2>
                        <p className="text-xl sm:text-3xl text-white mb-5">Correo y Repositorio</p>
                        <p className="text-lg sm:text-3xl text-white mb-5">albercosupernova@gmail.com</p>
                        <button className="btn btn-primary mx-2">Gmail</button>
                        <button className="btn btn-primary">GitHub</button>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Contacto;
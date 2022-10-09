import Head from 'next/head'
import Image from 'next/image'
import p from '../../public/gundam2.png'
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Home</title>
        <meta name="description"/>
      </Head>
        <div className="hero h-auto bg-gray-900 rounded-xl py-3 my-4 ">
            <div className="hero-content h-auto flex-col lg:flex-row-reverse justify-between">
              <div className='h-auto imagen1 sm:w-1/2 text-center fondo' >
                <Image 
                  src={p}
                  layout={"responsive"}
                  className="rounded-lg shadow-2xl" />
              </div>
              <div className='sm:w-1/2 h-auto px-3 my-4 sm:px-2 '>
                <h1 className="text-lg sm:text-5xl font-bold text-center lg:text-start text-white">Soy Guillermo Alberco Capistrano</h1>
                <p className="py-6 text-sm md:text-lg  lg:text-xl">
                  Estudiante de la carrera Ingenieria de Software , que busca su primer trabajo como programador para poder ganar experiencia desarrollado
                  aplicaciones web , movile o otras tecnologias, ademas me gustan los videojuegos JRPG
                </p>
                <div className="text-center lg:text-start">
                  <button className="btn btn-wide border-double border-2 border-white bg-blue-700 text-white mx-2 fondoBoton my-2">Descargar CV</button>
                  <button className="btn btn-wide border-double border-2 border-white bg-blue-700 text-white fondoBoton">GitHub</button>
                </div>
              </div>
            </div>
        </div>
    </Layout>
  )
}

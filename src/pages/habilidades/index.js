import Layout from "../../components/layout";
import Head from "next/head";

function Habilidades() {
    return ( 
        <Layout>
            <Head>
                <title>Habilidades</title>
                <meta name="description"/>
            </Head>
            <div className="h-full bg-base-200 rounded-lg my-2 ">
                <section className="container sm:px-36 bg-gray-900 pt-10 mx-auto">
                    <div className="flex flex-col text-center w-full">
                        <h1 className="sm:text-4xl text-2xl title-font mb-4 text-white font-bold">Habilidades</h1>
                    </div>
                    <article className="flex flex-col text-center px-24 sm:px-10">
                        <h2 className="sm:text-2xl text-xl py-2 inline sm:mx-62  text-center text-white font-semibold ">Lenguajes</h2>
                        <div className="flex flex-col sm:flex-row justify-center gap-10 p-10 my-4 bg-blue-800 sm:mx-36 rounded-lg">
                            <img width={100} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
                            <img width={100} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
                            <img width={100} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                            <img width={100} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" />
                            <img width={100} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-plain-wordmark.svg" />
                        </div>
                    </article>

                    <article className="flex flex-col text-center px-24 sm:px-10">
                        <h2 className="sm:text-2xl text-lg py-2 inline sm:mx-62  text-center text-white font-semibold " >Frontend</h2>
                        <div className="flex flex-col sm:flex-row justify-center gap-10 p-10 my-4 bg-blue-800 sm:mx-36 rounded-lg">
                            <img width={100}  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                            <img width={100} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg" />
                            <img width={100}  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" />
                        </div>
                    </article>

                    <article className="flex justify-center flex-col text-center px-24 sm:px-10">
                        <h2 className="sm:text-2xl text-lg py-2 inline sm:mx-62  text-center text-white font-semibold " >Backend</h2>
                        <div className="flex flex-col sm:flex-row justify-center gap-10 p-10 my-4 bg-blue-800 sm:mx-36 rounded-lg">
                            <img width={100} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain-wordmark.svg" />
                            <img width={100} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original-wordmark.svg" />
                            <img width={100} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original-wordmark.svg" />
                            <img width={100} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
                            <img width={100} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original-wordmark.svg" />
                            <img width={100} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg" />
                        </div>
                    </article>
                    
                    <article className="flex justify-center flex-col text-center px-24 sm:px-10">
                        <h2 className="sm:text-2xl text-lg py-2 inline sm:mx-62  text-center text-white font-semibold " >Herramientas/BD</h2>
                        <div className="flex flex-col sm:flex-row justify-center gap-10 p-10 my-4 bg-blue-800 sm:mx-36 rounded-lg">
                          <img width={100} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" />
                          <img width={100} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original-wordmark.svg" />
                          <img width={100} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" />
                          <img width={100} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg" />
                          <img width={100} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" />
                        </div>
                    </article>
                </section>
            </div>
        </Layout>
     );
}

export default Habilidades;
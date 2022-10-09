import Link from "next/link";

function Navbar({ list_url }) {
    return (  
        <nav className=''>
            <div className="navbar bg-blue-800 rounded-lg px-2 lg:px-10">
            <div className="navbar-start">
                <a className="btn btn-ghost normal-case text-2xl text-white" >Hyde Company</a>
            </div>
            <div className="navbar-end hidden lg:flex">
                {
                    list_url.map( item => (
                        <Link key={item.id} href={item.url}><a className="btn btn-ghost normal-case text-xl text-white" >{item.name}</a></Link>
                    ))
                }
            </div>
            <div className="navbar-end lg:hidden">
                <div className="dropdown dropdown-left">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-blue-800 rounded-box w-52 border-2">
                        {
                            list_url.map( list => (
                                <li key={list.id + 34} ><Link href={list.url}><a>{list.name}</a></Link></li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            </div>
        </nav>
    );
}

export default Navbar;
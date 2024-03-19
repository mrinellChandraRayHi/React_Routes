import { useState } from "react";
import Link from "../Link/Link";
import { RiMenu2Line, RiCloseFill  } from "react-icons/ri";

const Navbar = () => {
    const [open, setOpen]=useState(false);
    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Services', path: '/services' },
        { id: 4, name: 'Contact', path: '/contact' },
        { id: 5, name: 'Dashboard', path: '/dashboard' }
    ];
    return (
        <div>
            <nav className="bg-blue-800 py-5">
                <div  className="md:hidden text-2xl" onClick={()=>setOpen(!open)} >{
                    open===true? <RiCloseFill />: <RiMenu2Line/>
                }
                </div>
                <ul className={`md:flex absolute md:static top-16 sm:bg-green-800 md:bg-blue-700 sm:w-[200px] py-2 text-white text-center rounded-lg sm:shadow-2xl ${open?'top-16': '-top-60'} duration-1000`}>
                    {routes.map(link=><Link key={link.id} link={link}/>)}
                </ul>
            </nav>
            {/* need ppppp tag */}
            {/* <p>Lorem ipsum dolor sit amet consectetur.</p> */}
        </div>
    );
};

export default Navbar;
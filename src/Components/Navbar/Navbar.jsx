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
        <nav>
            <div  className="md:hidden text-2xl" onClick={()=>setOpen(!open)} >{
                open===true? <RiCloseFill />: <RiMenu2Line/>
            }
            </div>
            <ul className="md:flex">
                {routes.map(link=><Link key={link.id} link={link}/>)}
            </ul>
        </nav>
    );
};

export default Navbar;
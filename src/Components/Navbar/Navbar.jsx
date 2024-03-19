import Link from "../Link/Link";

const Navbar = () => {
    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Services', path: '/services' },
        { id: 4, name: 'Contact', path: '/contact' },
        { id: 5, name: 'Dashboard', path: '/dashboard' }
    ];
    return (
        <div>
            <ul className="md:flex">
                {routes.map(link=><Link key={link.id} link={link}/>)}
            </ul>
        </div>
    );
};

export default Navbar;
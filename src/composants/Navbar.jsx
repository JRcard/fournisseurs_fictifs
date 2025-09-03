import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="">
			<ul className="sm:text-sm md:text-2xl xl:text-3xl font-extrabold py-4 pl-4">
				<li className="py-2 ">
					<NavLink to="/" className={({ isActive }) => `${isActive ? "bg-blue-200 text-gray-800" : ""} block w-full p-4`}>
						Accueil
					</NavLink>
				</li>
				<li className="py-2">
					<NavLink to="/produits" className={({ isActive }) => `${isActive ? "bg-blue-200 text-gray-800" : ""} block w-full p-4`}>
						Produits
					</NavLink>
				</li>
				<li className="py-2">
					<NavLink to="/fournisseurs" className={({ isActive }) => `${isActive ? "bg-blue-200 text-gray-800" : ""} block w-full p-4`}>
						Fournisseurs
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;

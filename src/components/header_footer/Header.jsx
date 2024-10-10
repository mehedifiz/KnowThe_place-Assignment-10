import { Link, NavLink } from "react-router-dom";

const Header = () => {

    // Placeholder for authentication context
    // const { currentUser, logOut } = useContext(AuthContext);

    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/info">Information</NavLink></li>
        <li><NavLink to="/help">Help</NavLink></li>
    </>

    return (
        <div className="border-b border-gray-300 z-10 relative">
            <div className="container">
                <div className="navbar bg-white pl-0 pr-0">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden pl-0">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52">
                                {navLinks}
                            </ul>
                        </div>
                        <Link to="/" className="site-name">
                            <span className="text-xl font-bold">ExploreEasy</span>
                        </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {navLinks}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src="https://i.ibb.co/hHDqnJ4/male-placeholder-image.jpg" alt="Profile" />
                                </div>
                            </div>
                            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-white rounded-box w-52">
                                <li> <Link to="/profile">Profile</Link></li>
                                <li> <Link to="/settings">Settings</Link></li>
                            </ul>
                        </div>
                        <Link to="/login" className="btn">Sign In</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;

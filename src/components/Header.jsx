import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../firebase/AuthProvider";

const Header = () => {
    const { userCurrent, logOutUser } = useContext(AuthContext);

    const navLinks = (
        <>
            <li><NavLink to="/" className="hover:text-gray-100">Home</NavLink></li>
            <li><NavLink to="/all-tourists-spot" className="hover:text-gray-100">Explore Spots</NavLink></li>
            <li><NavLink to="/add-tourists-spot" className="hover:text-gray-100">Share a Spot</NavLink></li>
            <li><NavLink to="/my-list" className="hover:text-gray-100">My Bookmarks</NavLink></li>
        </>
    );

    return (
        <header className="bg-gradient-to-r from-teal-600 to-purple-600 p-6 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center">
                    <Link to="/" className="text-white text-2xl font-bold tracking-wide flex items-center">
                        ExploreEasy
                    </Link>
                </div>

                {/* Nav Links */}
                <nav className="hidden lg:flex space-x-8">
                    <ul className="flex items-center space-x-6 text-white text-lg font-medium">
                        {navLinks}
                    </ul>
                </nav>

                {/* User Section */}
                <div className="relative">
                    {userCurrent ? (
                        <div className="flex items-center space-x-4">
                            <div className="dropdown dropdown-end">
                                <button className="btn btn-ghost btn-circle avatar">
                                    <div className="w-12 rounded-full">
                                        <img src={userCurrent?.photoURL || "https://i.ibb.co/hHDqnJ4/male-placeholder-image.jpg"} alt="User Avatar" />
                                    </div>
                                </button>
                                <ul className="mt-3 z-10 p-3 shadow-lg menu menu-sm dropdown-content bg-white rounded-lg w-56">
                                    <li><Link to="/my-profile" className="text-gray-700 hover:bg-gray-100">View Profile</Link></li>
                                    <li><Link to="/update-profile" className="text-gray-700 hover:bg-gray-100">Edit Account</Link></li>
                                    <li><button onClick={logOutUser} className="text-red-600 hover:bg-gray-100">Log Out</button></li>
                                </ul>
                            </div>
                        </div>
                    ) : (
                        <Link to="/login" className="btn bg-white text-teal-600 px-6 py-2 rounded-full hover:bg-gray-100">
                            Log In
                        </Link>
                    )}
                </div>

                {/* Mobile Menu Toggle */}
                <div className="lg:hidden flex items-center">
                    <button className="btn btn-ghost" tabIndex={0} role="button">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </button>
                    <ul tabIndex={0} className="menu dropdown-content mt-3 z-[1] p-2 shadow-lg bg-white rounded-lg w-56 text-gray-700">
                        {navLinks}
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;

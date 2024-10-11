import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-8">
            <div className="container mx-auto text-center lg:text-left">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-6">
                    {/* Logo and Description */}
                    <div className="lg:col-span-1">
                        <Link to="/" className="text-white text-2xl font-bold mb-4 inline-block">
                            ExploreEasy
                        </Link>
                        <p className="text-sm">
                            Discover and explore the world’s best tourist spots effortlessly. Plan your next adventure with us.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/" className="hover:text-white">Home</Link></li>
                            <li><Link to="/all-tourists-spot" className="hover:text-white">Explore Spots</Link></li>
                            <li><Link to="/add-tourists-spot" className="hover:text-white">Share a Spot</Link></li>
                            <li><Link to="/contact" className="hover:text-white">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Get in Touch</h4>
                        <ul className="space-y-2 text-sm">
                            <li>Email: <a href="mailto:info@exploreeasy.com" className="hover:text-white">info@exploreeasy.com</a></li>
                            <li>Phone: <a href="tel:+12345678900" className="hover:text-white">+1 234 567 8900</a></li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-700 pt-4 text-sm">
                    <p>© 2024 ExploreEasy. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

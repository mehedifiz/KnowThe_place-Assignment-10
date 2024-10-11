import { Link } from "react-router-dom";

const AboutUs = () => {
    return (
        <div className="my-10 lg:my-20 container">
            <h2 className="text-4xl font-bold text-center mb-6">About Us</h2>
            <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto mb-8">
                At ExploreEasy, we are passionate about helping travelers discover the beauty of the world. 
                Our mission is to provide you with the best information and resources to plan your perfect adventure. 
                Whether you're looking for breathtaking tourist spots, travel tips, or personalized recommendations, 
                our team is dedicated to making your journey memorable and hassle-free.
            </p>
            <div className="flex justify-center">
                <Link to="/contact-us" className="btn btn-primary px-6 py-3">
                    Get in Touch
                </Link>
            </div>
        </div>
    );
};

export default AboutUs;

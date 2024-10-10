import { Helmet } from "react-helmet";
import ContactCard from './ContactCard'; // Ensure to import the ContactCard component

const Contact = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Contact Us | Travel Trek</title> {/* Updated site name */}
                <link rel="canonical" href="http://traveltrek.com/contact" /> {/* Updated URL */}
            </Helmet>
            <div className="bg-[#000] py-[100px] lg:py-[150px]">
                <div className="container">
                    <h1 className="text-4xl text-center font-bold tracking-tight text-white sm:text-6xl">Contact Us</h1>
                </div>
            </div>
            <div className="container">
                <div className="mt-20 lg:mt-[60px] mb-20 lg:mb-[60px]">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                        <ContactCard icon="fa-solid fa-phone" title="Phone" content="+1 123456789" />
                        <ContactCard icon="fa-solid fa-envelope" title="Email" content="info@traveltrek.com" /> {/* Updated email */}
                        <ContactCard icon="fa-solid fa-map" title="Address" content="456 Maple Avenue, City, State" />
                    </div>
                </div>
                <div>
                    <div className="space-y-5">
                        <label className="input input-bordered flex items-center gap-2">
                            Name
                            <input type="text" className="grow" placeholder="Daisy" />
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            Phone
                            <input type="text" className="grow" placeholder="Phone" />
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            Email
                            <input type="text" className="grow" placeholder="demo@traveltrek.com" /> {/* Updated email */}
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            Subject
                            <input type="text" className="grow" placeholder="Subject" />
                        </label>
                        <textarea className="textarea textarea-bordered w-full" placeholder="Message"></textarea>
                        <button className="btn btn-primary">Send Message</button>
                    </div>
                </div>
               
            </div>
        </div>
    );
};

export default Contact;

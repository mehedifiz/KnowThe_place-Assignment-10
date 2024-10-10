const Footer = () => {
    return (
        <div>
            <section className="relative main-box footer-con">
                <img
                    alt="background vector"
                    className="vector8 img-fluid absolute"
                    src="/vector8.png"
                />
                <div className="container">
                    <div className="partner-con">
                        <ul className="mb-0 list-unstyled flex items-center justify-between">
                            <li>
                                <figure className="mb-0">
                                    <img
                                        className="img-fluid"
                                        src="/partner-logo-1.png"
                                        alt="partner logo 1"
                                    />
                                </figure>
                            </li>
                            <li>
                                <figure className="mb-0">
                                    <img
                                        className="img-fluid"
                                        src="/partner-logo-2.png"
                                        alt="partner logo 2"
                                    />
                                </figure>
                            </li>
                            <li className="img-mb">
                                <figure className="mb-0">
                                    <img
                                        className="img-fluid"
                                        src="/partner-logo-3.png"
                                        alt="partner logo 3"
                                    />
                                </figure>
                            </li>
                            <li>
                                <figure className="mb-0">
                                    <img
                                        className="img-fluid"
                                        src="/partner-logo-4.png"
                                        alt="partner logo 4"
                                    />
                                </figure>
                            </li>
                            <li>
                                <figure className="mb-0">
                                    <img
                                        className="img-fluid"
                                        src="/partner-logo-5.png"
                                        alt="partner logo 5"
                                    />
                                </figure>
                            </li>
                            <li>
                                <figure className="mb-0">
                                    <img
                                        className="img-fluid"
                                        src="/partner-logo-6.png"
                                        alt="partner logo 6"
                                    />
                                </figure>
                            </li>
                        </ul>
                    </div>

                    <div className="middle-portion">
                        <div className="row grid grid-cols-1 lg:grid-cols-5 gap-5">
                            <div className="lg:col-span-2">
                                <a href="/">
                                    <figure className="flex justify-center lg:justify-start footer-logo">
                                        <img
                                            src="/footer-logo.png"
                                            className="img-fluid"
                                            alt="ExploreEasy logo"
                                        />
                                    </figure>
                                </a>
                                <p className="text-size-16 footer-text">
                                    Discover the world with ExploreEasy. Find the best travel
                                    destinations, tips, and guides to make your journey
                                    unforgettable.
                                </p>
                                <figure className="mb-0 flex justify-center lg:justify-start payment-icon">
                                    <img
                                        src="/payment-card.png"
                                        className="img-fluid"
                                        alt="Payment methods"
                                    />
                                </figure>
                            </div>

                            <div>
                                <div className="links">
                                    <h4 className="font-semibold text-xl heading">Quick Links</h4>
                                    <hr className="line" />
                                    <ul className="list-unstyled mb-0">
                                        <li>
                                            <a href="/" className="text-size-16 text-decoration-none">Home</a>
                                        </li>
                                        <li>
                                            <a href="/services" className="text-size-16 text-decoration-none">Services</a>
                                        </li>
                                        <li>
                                            <a href="/blog" className="text-size-16 text-decoration-none">Latest News</a>
                                        </li>
                                        <li>
                                            <a href="/booking" className="text-size-16 text-decoration-none">Booking</a>
                                        </li>
                                        <li>
                                            <a href="/destinations" className="text-size-16 text-decoration-none">Destinations</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div>
                                <div className="links">
                                    <h4 className="font-semibold text-xl heading">Support</h4>
                                    <hr className="line" />
                                    <ul className="list-unstyled mb-0">
                                        <li>
                                            <a href="/about" className="text-size-16 text-decoration-none">About Us</a>
                                        </li>
                                        <li>
                                            <a href="/contact" className="text-size-16 text-decoration-none">Contact Us</a>
                                        </li>
                                        <li>
                                            <a href="/faq" className="text-size-16 text-decoration-none">FAQ</a>
                                        </li>
                                        <li>
                                            <a href="/testimonials" className="text-size-16 text-decoration-none">Testimonials</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div>
                                <div className="icon">
                                    <h4 className="font-semibold text-xl heading">Get in Touch</h4>
                                    <hr className="line" />
                                    <ul className="list-unstyled mb-0">
                                        <li className="text-size-16 text">Email: <a href="mailto:info@exploreeasy.com">info@exploreeasy.com</a></li>
                                        <li className="text-size-16 text">Phone: <a href="tel:+12345678900">+1 234 567 8900</a></li>
                                        <li className="text-size-16 text">Fax: <a href="tel:+198765432199">+1 987 654 32199</a></li>
                                        <li className="social-icons">
                                            <div className="circle">
                                                <a href="https://www.facebook.com">
                                                    <i className="fa-brands fa-facebook" />
                                                </a>
                                            </div>
                                            <div className="circle">
                                                <a href="https://twitter.com">
                                                    <i className="fa-brands fa-twitter" />
                                                </a>
                                            </div>
                                            <div className="circle">
                                                <a href="https://www.linkedin.com">
                                                    <i className="fa-brands fa-linkedin" />
                                                </a>
                                            </div>
                                            <div className="circle">
                                                <a href="https://www.pinterest.com">
                                                    <i className="fa-brands fa-pinterest" />
                                                </a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="copyright-con">
                        <div className="row">
                            <div className="col-12">
                                <p className="text-size-16">
                                ©2024 ExploreEasy. All Rights Reserved.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Footer;

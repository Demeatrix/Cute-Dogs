import React from 'react';
import { Link } from 'react-router-dom';
import cutePuppyLogo from '../assets/cute_puppy_logo.png'

export default function Footer() {
    return (
        <footer className="bg-black border-y my-5">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link to="/" className="flex items-center">
                            <img
                                src={cutePuppyLogo}
                                className="mr-16 h-16"
                                alt="Logo"
                            />
                        </Link>
                    </div>
                    <div className="ml-20 grid grid-cols-2 gap-6 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-white uppercase">Resources</h2>
                            <ul className="text-white font-medium">
                                <li className="mb-4">
                                    <Link to="/" className="hover:underline">
                                        Home
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-white uppercase">Contact Us</h2>
                            <ul className="text-white font-medium">
                                <li className="mb-4">
                                <a href="https://wa.me/919727003987" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                        <span className="block">WhatsApp: +91 9727003987</span>
                                    </a>
                                </li>
                                <li>
                                    <span className="block">Phone: +91 7573057573</span>
                                </li>
                                <li>
                                    <span className="block">Phone: +91 9712540206</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-white uppercase">Follow Us</h2>
                            <p className="text-white text-base">
                                <span className="font-bold">Our Office Address:</span> 119, Nishal Arcade, Near Nishal Circle, Pal Gam, Surat, 395009
                            </p>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
            </div>
        </footer>
    );
}

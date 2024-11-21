import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { MdEmail, MdPhone } from 'react-icons/md';

const Footer: React.FC = () => {
    return (
        <footer className="bg-blue-900 text-white py-8 px-6 rounded-xl">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                {/* Logo and Description */}
                <div className="text-center md:text-left mb-4 md:mb-0">
                    <h2 className="text-2xl font-bold">PT. Mulia Jaya Umat</h2>
                    <p className="text-gray-300 mt-2">
                        Kami menawarkan pengalaman kuliner yang luar biasa di Bandung, dengan
                    </p>
                    <p className="text-gray-300">
                        hidangan yang lezat dan berkesan.
                    </p>
                </div>

                {/* Contact Information */}
                <div className="text-center md:text-left mb-4 md:mb-0">
                    <h3 className="text-xl font-semibold">Kontak Kami</h3>
                    <p className="text-gray-300 flex items-center mt-2">
                        <MdPhone className="mr-2" /> <i>coming soon</i>
                    </p>
                    <p className="text-gray-300 flex items-center mt-2">
                        <MdEmail className="mr-2" /> <i>coming soon</i>
                    </p>
                </div>

                {/* Social Media Icons */}
                <div className="text-center md:text-left">
                    <h3 className="text-xl font-semibold">Ikuti Kami</h3>
                    <div className="flex justify-center md:justify-start mt-2 space-x-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                            <FaFacebook size={24} />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                            <FaInstagram size={24} />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                            <FaXTwitter size={24} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="mt-8 border-t border-white pt-4">
                <p className="text-center text-white text-sm">
                    © {new Date().getFullYear()} mkp. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;

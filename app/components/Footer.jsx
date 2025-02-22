import React from "react";
import Link from "next/link";
import {
  FaHome,
  FaInfoCircle,
  FaPhone,
  FaAddressCard,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
  FaServicestack,
  FaEnvelope
} from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="text-white py-8 min-w-max">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Useful Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Useful Links</h4>
            <ul className="list-none">
              <li className="mb-2">
                <Link href="/" className="hover:text-gray-400">
                  <FaHome className="inline-block mr-2" />
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/about" className="hover:text-gray-400">
                  <FaInfoCircle className="inline-block mr-2" />
                  About
                </Link>
              </li>
              <li className="mb-2">
                <Link  href="/digitalm" className="hover:text-gray-400">
                  <FaServicestack className="inline-block mr-2" />
                  Brand Marketing
                </Link>
              </li>
            </ul>
          </div>
          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="list-none">
            <li className="mb-2">
                <Link href="/webdesign" className="text-neutral-200 hover:underline">
                  Custom Web Design
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/seo" className="text-neutral-200 hover:underline">
                  Search Engine Optimization
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/social_media" className="text-neutral-200 hover:underline">
                  Social Media Marketing
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/gdesign" className="text-neutral-200 hover:underline">
                  Graphic Design
                </Link>
              </li>
            </ul>
          </div>
          {/* Physical Address and Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <p>
              <FaAddressCard className="inline-block mr-2" />
              Kisumu City
            </p>
            <Link href="mailto:contact@digitalcheuxes.co.ke" className="mt-2">
              <FaEnvelope className="inline-block mr-2" />
              contact@digitalcheuxes.co.ke
            </Link>
            <p className="mt-2">
              <FaPhone className="inline-block mr-2" />
              0787-222-566
            </p>
          </div>
          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-4">Subscribe to Our Newsletter</h4>
            <form action="" method="post" className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="py-2 pl-2 px-auto rounded-l-md focus:outline-none text-black"
              />
              <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-r-md focus:outline-none">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        {/* Social Media Links */}
        <div className="flex justify-end mt-8">
          <Link href="#" className="mr-4">
            <FaFacebook className="text-white text-2xl hover:text-gray-400" />
          </Link>
          <Link href="#" className="mr-4">
            <FaInstagram className="text-white text-2xl hover:text-gray-400" />
          </Link>
          <Link href="https://x.com/pyCoderhere" className="mr-4">
            <FaTwitter className="text-white text-2xl hover:text-gray-400" />
          </Link>
          <Link href="#" className="mr-4">
            <FaYoutube className="text-white text-2xl hover:text-gray-400" />
          </Link>
          <Link href="#">
            <FaLinkedin className="text-white text-2xl hover:text-gray-400" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className=" bg-black text-white py-10 px-4 md:px-20 relative shadow-[inset_0_-40px_50px_-30px_rgba(255,110,0,0.3)] shadow-orange-500">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="md:col-span-1"
        >
          <h1 className="text-5xl font-bold text-orange-500 py-12">BuyPlay</h1>
          <p className="text-sm -mt-8 text-gray-400">Gear Up, Game On.</p>
        </motion.div>

        {/* Store */}
        <div>
          <h2 className="text-orange-500 font-semibold mb-2">Store</h2>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>Categories</li>
            <li>New Arrival</li>
            <li>Best Seller</li>
            <li>Featured</li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h2 className="text-orange-500 font-semibold mb-2">Categories</h2>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
          </ul>
        </div>

        {/* Other */}
        <div>
          <h2 className="text-orange-500 font-semibold mb-2">Other</h2>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>FAQ</li>
            <li>Blog</li>
            <li>Privacy Policy</li>
            <li>Terms of use</li>
          </ul>
        </div>

        {/* Newsletter + Socials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="md:col-span-1"
        >
          <div>
            <h2 className="text-orange-500 font-semibold mb-2">
              Join our mailing list
            </h2>
            <div className="flex mt-2">
              <input
                type="email"
                placeholder="Your Email"
                className="px-3 py-2 rounded-l bg-white text-black w-full"
              />
              <button className="bg-orange-500 px-4 py-2 rounded-r font-semibold hover:bg-orange-600 transition">
                Explore Items
              </button>
            </div>
            <h2 className="text-orange-500 font-semibold mt-6 mb-2">
              Follow Us
            </h2>
            <div className="flex gap-4 text-xl text-white">
              <FaLinkedin className="hover:text-orange-500 transition" />
              <FaInstagram className="hover:text-orange-500 transition" />
              <FaTwitter className="hover:text-orange-500 transition" />
              <FaFacebook className="hover:text-orange-500 transition" />
            </div>
          </div>
        </motion.div>
      </div>

      <p className="text-center text-sm text-gray-400 mt-10">
        ©2025 BuyPlay Store. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

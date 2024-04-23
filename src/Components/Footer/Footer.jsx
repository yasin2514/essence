import React from "react";
import logo from "../../assets/footerlogo.png";
import googleImg from "../../assets/Badge.png";
import appleImg from "../../assets/Badge-2.png";
import { CiFacebook, CiInstagram } from "react-icons/ci";
import { FaXTwitter, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row item-center md:justify-between mt-20 gap-y-10">
      {/* first section */}
      <div className="w-full md:w-[23%] flex flex-col justify-center items-center md:block">
        <img src={logo} alt="logo" />
        <div className="space-y-3 mt-5 md:pr-5 text-center md:text-left">
          <p className="text-gray-700">Got Question? Call us 24/7</p>
          <p className="text-black font-bold">(+1) 84382648364</p>
          <p className="text-gray-700">
            Register now & get you 10% offer from first order!
          </p>
          <select name="" id="" className="py-2 px-4 focus:outline-none">
            <option value="English" selected>
              English(USA)
            </option>
            <option value="Bangla">Bangla</option>
          </select>
        </div>
      </div>
      {/* second section */}
      <div className="w-full md:w-[15%] text-center md:text-left">
        <h5 className="text-black font-semibold text-xl ">Company</h5>
        <div className="text-gray-700 space-y-3 mt-5">
          <p className="hover:underline cursor-pointer">About us</p>
          <p className="hover:underline cursor-pointer">Career</p>
          <p className="hover:underline cursor-pointer">Contact us</p>
          <p className="hover:underline cursor-pointer">Start Selling</p>
          <p className="hover:underline cursor-pointer">Order History</p>
        </div>
      </div>
      {/* third section */}
      <div className="w-full md:w-[15%] text-center md:text-left">
        <h5 className="text-black font-semibold text-xl ">My Account</h5>
        <div className="text-gray-700 space-y-3 mt-5">
          <p className="hover:underline cursor-pointer">Track My Order</p>
          <p className="hover:underline cursor-pointer">View Cart</p>
          <p className="hover:underline cursor-pointer">Sign In</p>
          <p className="hover:underline cursor-pointer">Help</p>
          <p className="hover:underline cursor-pointer">Wishlist</p>
        </div>
      </div>
      {/* fourth section */}
      <div className="w-full md:w-[15%] text-center md:text-left">
        <h5 className="text-black font-semibold text-xl ">Customer Service</h5>
        <div className="text-gray-700 space-y-3 mt-5">
          <p className="hover:underline cursor-pointer">Payment Methods</p>
          <p className="hover:underline cursor-pointer">Money Return Policy</p>
          <p className="hover:underline cursor-pointer">Product Return</p>
          <p className="hover:underline cursor-pointer">Contact Seller</p>
          <p className="hover:underline cursor-pointer">Terms & Conditions</p>
        </div>
      </div>

      <div className="w-full md:w-[23%] md:relative px-3 md:px-0">
        <h5 className="text-black font-semibold text-xl text-center">
          Download app
        </h5>
        <div className="flex justify-center mt-5 gap-5">
          <a href="#">
            <img src={googleImg} alt="google image" />
          </a>
          <a href="#">
            {" "}
            <img src={appleImg} alt="apple image" />
          </a>
        </div>

        <div className="md:absolute w-full bottom-5 mt-5 md:mt-5">
          <div className="flex justify-evenly w-2/3 mx-auto">
            <a href="#" className="bg-white p-1 rounded">
              <CiFacebook className="text-2xl text-blue-600"></CiFacebook>
            </a>
            <a href="#" className="bg-white p-1 rounded">
              <CiInstagram className="text-2xl text-red-600"></CiInstagram>
            </a>
            <a href="#" className="bg-white p-1 rounded">
              <FaXTwitter className="text-2xl"></FaXTwitter>
            </a>
            <a href="#" className="bg-white p-1 rounded">
              <FaLinkedin className="text-2xl text-blue-600"></FaLinkedin>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import logo from "../../../public/images/logo.png";
import { FaSearch } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { BsCart3 } from "react-icons/bs";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(true);
  return (
    <main className="bg-[#194e8a] text-white py-3">
      <section className="flex  justify-between max-w-screen-xl mx-auto items-center">
        <div>
          <img src={logo} alt="" />
        </div>

        <div className="md:hidden">
          {showMenu ? (
            <button onClick={() => setShowMenu(!showMenu)}>
              <IoMdMenu className="text-3xl"></IoMdMenu>
            </button>
          ) : (
            <button onClick={() => setShowMenu(!showMenu)}>
              <IoMdClose className="text-3xl"></IoMdClose>
            </button>
          )}
        </div>
        {/* input section */}

        <div
          className={` absolute ${
            showMenu ? "mt-[-500px] " : "duration-150 mt-[120px] right-0"
          } md:mt-0  md:w-6/12 w-full py-2 px-4 rounded-full  md:relative md:flex shadow-2xl md:shadow-none  bg-white items-center gap-3 `}
        >
          <div className="pr-2 hidden md:block md:border-e-2 md:border-[#b1bcc9]">
            <FaSearch className=" text-[#194e8a]" />
          </div>
          <form className=" md:bg-white w-full border-0 text-black">
            <input
              type="text"
              name=""
              id=""
              placeholder="Search here"
              className="w-full border-none focus:outline-none"
            />
          </form>
        </div>
        <div
          className={`absolute ${
            showMenu ? "mt-[-500px] " : "mt-[208px] duration-150"
          } md:mt-0 md:relative md:flex shadow-lg md:shadow-none justify-between gap-1 md:gap-7 px-2 pb-3 md:pb-0 md:px-0 bg-[#ffffff] md:bg-transparent w-full text-black md:w-[150px] md:text-white `}
        >
          <div className="cursor-pointer flex items-center gap-1">
            Sign In <FiUser className=" text-lg"></FiUser>
          </div>
          <div className="cursor-pointer flex items-center gap-1">
            Cart <BsCart3 className=" text-lg"></BsCart3>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Navbar;

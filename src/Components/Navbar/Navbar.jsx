import logo from "../../assets/logo.png";
import { FaSearch } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { BsCart3 } from "react-icons/bs";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(true);
  return (
    <main className="bg-[#194e8a] text-white py-3">
      <section className="flex justify-between max-w-screen-xl mx-auto items-center">
        <div>
          <img src={logo} alt="" />
        </div>

        {/* input section */}
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
        <div className="bg-white w-6/12 py-2 px-4 rounded-full md:flex items-center gap-3 hidden">
          <div className="pr-2 border-e-2 border-[#b1bcc9]">
            <FaSearch className="text-[#194e8a]" />
          </div>
          <form className="bg-white w-full border-0 text-black">
            <input
              type="text"
              name=""
              id=""
              placeholder="Search here"
              className="w-full border-none focus:outline-none"
            />
          </form>
        </div>
        <div className="md:flex justify-between gap-7  text-white hidden">
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

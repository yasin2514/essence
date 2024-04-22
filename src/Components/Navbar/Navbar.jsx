import logo from "../../assets/logo.png";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <main className="bg-[#194e8a] text-white p-3">
      <section className="flex justify-between max-w-screen-xl mx-auto items-center">
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="bg-white w-5/12 py-2 px-4 rounded-full flex items-center gap-3">
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
        <div>login informaion</div>
      </section>
    </main>
  );
};

export default Navbar;

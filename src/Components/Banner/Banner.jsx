import { NavLink } from "react-router-dom";
import listLogo from "../../../public/images/award.png";
import addImg from "../../../public/images/add.jpg";
import SwipeToSlide from "./SwipeToSlide";
import BannerCarousel from "./BannerCarousel";
const Banner = () => {
  const sideBar = [
    {
      id: 1,
      name: "All Categories",
      path: "/",
    },
    {
      id: 2,
      name: "Cars and Motorcycles",
      path: "/carsAndMotorcycles",
    },
    {
      id: 3,
      name: "Music and Books",
      path: "/musicAndBooks",
    },
    {
      id: 4,
      name: "Arts and Crafts",
      path: "/artsAndCrafts",
    },
    {
      id: 5,
      name: "Moms and Babies",
      path: "/momsAndBabies",
    },
    {
      id: 6,
      name: "Softwares",
      path: "/softwares",
    },
    {
      id: 7,
      name: "Home & Garden",
      path: "/homeAndGarden",
    },
    {
      id: 8,
      name: "Electronics",
      path: "/electronics",
    },
    {
      id: 9,
      name: "Kids and Toy",
      path: "/kidsAndToy",
    },
    {
      id: 10,
      name: "Clothing and Shoes",
      path: "/clothingAndShoes",
    },
    {
      id: 11,
      name: "Beauty and Health",
      path: "/beautyAndHealth",
    },
    {
      id: 12,
      name: "Sports",
      path: "/sports",
    },
    {
      id: 13,
      name: "Jewellery",
      path: "/jewellery",
    },
  ];
  return (
    <section className=" md:flex flex-wrap justify-between">
      {/* left sidebar */}
      <aside className=" p-4 space-y-4 md:space-y-2 xl:space-y-4 bg-white w-full lg:w-[18%]  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:block ">
        {sideBar?.map((item, index) => (
          <div className="flex items-center gap-1" key={index}>
            <img src={listLogo} alt="" />
            <NavLink
              to={item?.path}
              className={({ isActive }) =>
                isActive ? "text-[#194e8a] font-semibold " : ""
              }
            >
              {item?.name}
            </NavLink>
          </div>
        ))}
      </aside>

      {/* middle */}
      <div className="w-full lg:w-[58%] ">
        <BannerCarousel></BannerCarousel>
        <div className="bg-white p-3">
          <SwipeToSlide></SwipeToSlide>
        </div>
      </div>

      {/* right side bar */}
      <aside className=" py-4 px-3 bg-white w-full lg:w-[22%] text-center md:text-left">
        <div>
          <p>Good Afternoon, John Smith</p>
          <h5 className="text-center mt-5 text-xl font-semibold">
            Flash Sale for You!
          </h5>
          <div className="text-center text-[#194e8a] my-5">
            {" "}
            <span className="text-7xl font-bold">40</span>
            <span>% Off</span>
          </div>
          <div className="text-center">
            <span className="text-[13px] font-semibold">
              {" "}
              After 12hr this offer will be end.
            </span>
            <span className="text-[#194e8a] font-semibold hover:cursor-pointer hover:text-[#366b97]">
              {" "}
              Get Now
            </span>
          </div>
          <div className="flex flex-col items-center lg:block">
            <img className="my-6" src={addImg} alt="" />
            <button className="btn-primary w-full">Add to Cart</button>
          </div>
        </div>
      </aside>
    </section>
  );
};

export default Banner;

import { NavLink } from "react-router-dom";
import listLogo from "../../assets/award.png";
import addImg from "../../assets/add.jpg";
import SwipeToSlide from "./SwipeToSlide";
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
    <section
      className=" grid  gap-4"
      style={{ gridTemplateColumns: "1fr 3fr 1.4fr", gap: "1rem" }}
    >
      {/* left sidebar */}
      <aside className=" p-4 space-y-4 bg-white">
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
      <div className=" ">
        <div>carousel one</div>
        <div className="bg-white p-3">
          <SwipeToSlide></SwipeToSlide>
        </div>
      </div>

      {/* right side bar */}
      <aside className=" py-4 px-3 bg-white ">
        <div>
          <p>Good Afternoon, John Smith</p>
          <h5 className="text-center mt-4 text-xl font-semibold">
            Flash Sale for You!
          </h5>
          <div className="text-center text-[#194e8a] my-3">
            {" "}
            <span className="text-7xl font-bold">40</span>
            <span>% Off</span>
          </div>
          <div className="text-center">
            After 12 hr this offer will be end.
            <span className="text-[#194e8a] font-semibold hover:cursor-pointer hover:text-[#366b97]">
              {" "}
              Get Now
            </span>
          </div>
          <div>
            <img className="my-4" src={addImg} alt="" />
            <button className="btn-primary w-full">Add to Cart</button>
          </div>
        </div>
      </aside>
    </section>
  );
};

export default Banner;

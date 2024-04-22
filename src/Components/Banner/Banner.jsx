import { Link, NavLink } from "react-router-dom";
import listLogo from "../../assets/award.png";
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
      <aside className="border p-3 space-y-3 bg-white">
        {sideBar?.map((item, index) => (
          <div className="flex items-center gap-1" key={index}>
            <img src={listLogo} alt="" />
            <NavLink
              to={item?.path}
              className={({ isActive }) => (isActive ? "text-[#194e8a] font-semibold " : "")}
            >
              {item?.name}
            </NavLink>
          </div>
        ))}
      </aside>

      {/* middle */}
      <div className="border border-red-600 ">main</div>

      {/* right side bar */}
      <aside className="border border-red-600 ">right side</aside>
    </section>
  );
};

export default Banner;

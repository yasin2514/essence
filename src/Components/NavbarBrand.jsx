const NavbarBrand = () => {
  const navbar = [
    "Brands",
    "Events",
    "Vendors",
    "Brands",
    "Events",
    "Vendors",
    "Brands",
    "Events",
    "Vendors",
    "Brands",
    "Events"
  ];
  return (
    <div className="flex justify-between max-w-screen-xl m-auto py-2 px-4 bg-white text-[#2360a7] ">
      {navbar?.map((nav, index) => (
        <p className="hover:text-[#2c74c5] hover:cursor-pointer" key={index}>
          {nav}
        </p>
      ))}
    </div>
  );
};

export default NavbarBrand;

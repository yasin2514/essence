import { useEffect, useState } from "react";

const ShopAllCategories = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("allCategoriesProducts.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className="mt-16 px-2 md:px-0">
      <h4 className="text-2xl font-semibold mb-6">Shop All Categories</h4>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-7  ">
        {data?.map((item, index) => (
          <div
            key={index}
            className="flex flex-col py-5 sm:py-0 sm:flex-row gap-4 justify-start items-center  shadow bg-gray-200"
          >
            <img src={item?.img} alt="" className="w-6/12" />
            <p className="font-semibold">{item?.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopAllCategories;

import { useEffect, useState } from "react";
const Shop = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className="mt-16">
      <h4 className="text-2xl font-semibold mb-6">Shop by Department</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-10  ">
        {data?.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center hover:scale-110 duration-150"
          >
            <img src={item?.img} alt="" />
            <p className="font-semibold">{item?.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;

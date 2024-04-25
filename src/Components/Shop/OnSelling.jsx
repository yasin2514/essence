import { useEffect, useState } from "react";

const OnSelling = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("onSellingProducts.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className="mt-16 px-2 md:px-0">
      <h4 className="text-2xl font-semibold mb-6">On Selling Products</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 ">
        {data?.map((item, index) => (
          <div
            key={index}
            className="flex  justify-start items-center border border-white rounded bg-white shadow-sm"
          >
            <img src={item?.img} className="w-4/12 h-full" alt="" />
            <div className="px-3">
              <h5 className="font-semibold text-xl ">{item?.name}</h5>
              <p className="text-gray-700">{item?.description}</p>
              <div className="flex items-center gap-5">
                <span className="text-lg font-semibold">${item?.price}</span>
                <del className="text-gray-400">${item?.previousPrice}</del>
                <span className="text-gray-400">
                  {`-${(
                    ((parseFloat(item?.previousPrice) -
                      parseFloat(item?.price)) /
                      parseFloat(item?.previousPrice)) *
                    100
                  ).toFixed(2)}%`}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OnSelling;

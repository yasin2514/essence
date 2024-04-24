import Marquee from "react-fast-marquee";
import { useEffect, useState } from "react";

const TopBrands = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("topBrands.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className="mt-16 px-2 md:px-0">
      <h4 className="text-2xl font-semibold mb-6">Top Brands</h4>

      <Marquee speed={80}>
        {data?.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center space-y-3 mx-4 "
          >
            <img src={item?.img} alt="brand image" />
            <p className="font-semibold ">{item?.name}</p>
          </div>
        ))}
        <div className="flex  overflow-hidden"></div>
      </Marquee>
    </div>
  );
};

export default TopBrands;

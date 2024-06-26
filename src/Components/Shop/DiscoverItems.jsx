import { useEffect, useState } from "react";
import Products from "./Products";

const DiscoverItems = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("mostViewProducts.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="mt-16 px-2 md:px-0">
      <div className="md:flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <h4 className="text-2xl font-semibold ">Daily Discover</h4>
        </div>
        <div>
          {!showAll ? (
            <button
              onClick={() => setShowAll(true)}
              className="font-bold hover:text-blue-950"
            >
              See More Items &gt;{" "}
            </button>
          ) : (
            <button
              onClick={() => setShowAll(false)}
              className="font-bold hover:text-blue-950"
            >
              &lt; See Less Items
            </button>
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 3xl:grid-cols-6 gap-8">
        {data?.slice(!showAll ? 14 : 4, data?.length).map((item, index) => (
          <Products noGap={false} key={index} item={item}></Products>
        ))}
      </div>
    </div>
  );
};

export default DiscoverItems;

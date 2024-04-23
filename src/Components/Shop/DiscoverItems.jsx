import { useState } from "react";
import data from "../../../public/data/mostViewProducts.json";
import Products from "./Products";

const DiscoverItems = () => {
  const [showAll, setShowAll] = useState(false);
  console.log({ showAll });

  return (
    <div className="mt-16">
      <div className="flex justify-between items-center mb-6">
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
      <div className="grid grid-cols-6 gap-4">
        {data?.slice(!showAll ? 12 : 6, data?.length).map((item, index) => (
          <Products noGap={false} key={index} item={item}></Products>
        ))}
      </div>
    </div>
  );
};

export default DiscoverItems;

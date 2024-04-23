import { useState } from "react";
import data from "../../../public/data/dealProducts.json";
import img from "../../assets/d-3.png";
import { FaStar } from "react-icons/fa";
import Rating from "react-rating-stars-component";
import { BsCart3 } from "react-icons/bs";
import { LuView } from "react-icons/lu";
import { MdCompare } from "react-icons/md";
const DealSection = () => {
  const [showAll, setShowAll] = useState(false);
  console.log({ showAll });

  return (
    <div className="mt-16">
      <div className="flex justify-between items-center mb-6">
        <h4 className="text-2xl font-semibold ">Deal of The Day</h4>
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
      <div className="grid grid-cols-2 gap-6 ">
        {/* card-section */}
        {data?.slice(0, showAll ? data?.length : 2).map((item, index) => (
          <div
            key={index}
            className="flex gap-3 justify-between items-start bg-white p-4"
          >
            <div className="w-[49%] h-full">
              <img src={item?.img} alt="img" className="w-100 h-[100%]" />
            </div>
            {/* card-description */}
            <div className="w-[49%] space-y-2">
              <h5 className="font-bold text-xl">{item?.name}</h5>
              <div className="flex items-center gap-2">
                <Rating
                  count={5}
                  size={18}
                  value={item?.rating || 0}
                  edit={false}
                  activeColor="#ffd700"
                  emptyIcon={<FaStar />}
                  filledIcon={<FaStar />}
                />
                <span>{item?.rating}</span>
                <span>{`(${item?.review || 0} Review)`}</span>
              </div>
              <div className="flex justify-start items-center gap-5">
                <span className="text-2xl font-bold">${item?.price}</span>
                <del className="text-gray-500">${item?.previousPrice}</del>
                <span className="text-gray-500">
                  {`-${(
                    ((item?.previousPrice - item?.price) /
                      item?.previousPrice) *
                    100
                  ).toFixed(2)}%`}
                </span>
              </div>
              <p className="text-gray-600">{item?.description}</p>
              <div className="flex justify-around items-center bg-gray-100 p-2">
                <button className="flex justify-center gap-1 items-center hover:text-blue-800 ">
                  <LuView></LuView> Preview
                </button>
                <button className="flex justify-center gap-1 items-center hover:text-blue-800">
                  <MdCompare /> Compare
                </button>
              </div>
              <button className="btn-primary w-full flex justify-center gap-2 items-center">
                <BsCart3 className="text-lg "></BsCart3> Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* another part */}
      <div className="flex w-100 justify-between mt-6">
        <div className="border w-[49%]">
          <img src={img} alt="sofa Aqua" />
        </div>
        <div className="border w-[49%]">
          <img src={img} alt="sofa Aqua" />
        </div>
      </div>
    </div>
  );
};

export default DealSection;

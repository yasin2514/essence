import Rating from "react-rating-stars-component";
import { FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";

const Vendors = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("VendorsProducts.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className="mt-16 px-2 md:px-0">
      <h4 className="text-2xl font-semibold mb-6">Weekly Top Vendors</h4>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 place-items-center pb-2 gap-4">
        {data?.map((item, index) => (
          // parents
          <div key={index} className="bg-white p-3">
            <div className="flex items-center">
              <img src={item?.img} alt="" className="w-16" />
              <div className="p-3  space-y-2">
                <h5 className="font-bold text-lg text-center">{item?.name}</h5>
                <div className="grid grid-cols-2  place-items-center  ">
                  <small>Items </small>
                  <Rating
                    count={5}
                    size={12}
                    value={item?.rating || 0}
                    edit={false}
                    activeColor="#ffd700"
                    emptyIcon={<FaStar />}
                    filledIcon={<FaStar />}
                  />
                  <small>({item?.items})</small>
                  <small className="text-gray-500 ">{`(${
                    item?.review || 0
                  } Review)`}</small>
                  <div></div>
                  <div className="flex items-start flex-col justify-between"></div>
                </div>
              </div>
            </div>
            <img className="mt-2" src={item?.bannerImg} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vendors;

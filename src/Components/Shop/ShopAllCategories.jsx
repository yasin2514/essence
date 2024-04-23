import React from 'react';
import data from "../../../public/data/allCategoriesProducts.json";

const ShopAllCategories = () => {
    return (
      <div className="mt-16">
        <h4 className="text-2xl font-semibold mb-6">Shop All Categories</h4>
        <div className="grid grid-cols-5 gap-6  ">
          {data?.map((item, index) => (
            <div
              key={index}
              className="flex gap-4 justify-start items-center border shadow bg-gray-200"
            >
              <img src={item?.img} alt="" className="w-24" />
              <p className="font-semibold">{item?.name}</p>
            </div>
          ))}
        </div>
      </div>
    );
};

export default ShopAllCategories;
import { FaStar } from "react-icons/fa";
import Rating from "react-rating-stars-component";

const Products = ({ item, noGap }) => {
  const { name, img, previousPrice, price, rating, review } = item || {};
  return (
    <div
      className={`${
        noGap ? "mx-3  hover:scale-110 duration-150 h-[400px] md:h-auto " : ""
      } flex flex-col justify-center items-center pb-2 bg-white rounded-lg shadow-lg overflow-hidden `}
    >
      <img src={img} className="w-full md:w-auto" alt="" />
      <div className="p-3 text-center space-y-2">
        <h5 className="font-semibold text-lg">{name}</h5>
        <div className="flex items-center justify-center">
          <Rating
            count={5}
            size={18}
            value={rating || 0}
            edit={false}
            activeColor="#ffd700"
            emptyIcon={<FaStar />}
            filledIcon={<FaStar />}
          />
        </div>
        <p className="text-gray-500 ml-2">{`(${review || 0} Review)`}</p>
        <div className="flex justify-center items-center gap-5">
          <span className="text-2xl font-bold">${price}</span>
          <del className="text-gray-500">${previousPrice}</del>
          <span className="text-gray-500">
            {`-${(((previousPrice - price) / previousPrice) * 100).toFixed(
              2
            )}%`}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Products;

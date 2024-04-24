import { useEffect, useState } from "react";
import logoImg from "../../assets/slide-2.png";

const ApplesProducts = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("appleProducts.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  const [showAll, setShowAll] = useState(false);
  console.log({ showAll });

  return (
    <div className="mt-16 px-2 md:px-0">
      <div className="md:flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <img src={logoImg} className="w-12 " alt="image" />
          <h4 className="text-2xl font-semibold ">Apple</h4>
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
      <div className="grid md:grid-cols-6 gap-10 ">
        {data?.slice(0, showAll ? data?.length : 6).map((item, index) => (
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

export default ApplesProducts;

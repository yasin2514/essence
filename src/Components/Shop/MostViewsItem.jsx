import { useEffect, useState } from "react";
import Products from "./Products";

const MostViewsItem = () => {
   const [data, setData] = useState([]);
   useEffect(() => {
     fetch("mostViewProducts.json")
       .then((res) => res.json())
       .then((data) => setData(data));
   }, []);

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;
  const totalItems = data?.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePrevPage = () => {
    setCurrentPage((prevPage) =>
      prevPage === 0 ? totalPages - 1 : prevPage - 1
    );
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) =>
      prevPage === totalPages - 1 ? 0 : prevPage + 1
    );
  };

  return (
    <div className="mt-16 relative">
      <h4 className="text-2xl font-semibold mb-6">Most Viewed Items</h4>

      <div className="carousel relative overflow-hidden">
        <button
          onClick={handlePrevPage}
          className="font-bold rounded-full bg-white shadow-lg w-10 h-10 text-xl absolute top-1/2 transform -translate-y-1/2 left-0 z-10 opacity-50 hover:opacity-100"
        >
          &lt;
        </button>
        <button
          onClick={handleNextPage}
          className="font-bold rounded-full bg-white shadow-lg w-10 h-10 text-xl absolute top-1/2 transform -translate-y-1/2 right-0 z-10 opacity-50 hover:opacity-100"
        >
          &gt;
        </button>
        <div
          className="carousel-inner flex transition-transform duration-300"
          style={{
            transform: `translateX(-${
              (currentPage % totalPages) * (100 / totalPages)
            }%)`,
          }}
        >
          {[...data, ...data.slice(0, itemsPerPage)].map((item, index) => (
            <div key={index} className="carousel-item">
              <Products noGap={true} item={item}></Products>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MostViewsItem;

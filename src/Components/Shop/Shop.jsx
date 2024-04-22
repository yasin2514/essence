import data from "../../../public/data/products.json";
const Shop = () => {
  return (
    <div className="mt-16">
      <h4 className="text-2xl font-semibold mb-6">Shop by Department</h4>
      <div className="grid grid-cols-5 gap-10 ">
        {data?.map((item, index) => (
          <div key={index} className="flex flex-col justify-center items-center">
            <img src={item?.img} alt="" />
            <p className="font-semibold">{item?.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;

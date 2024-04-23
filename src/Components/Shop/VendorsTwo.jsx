import data from "../../../public/data/vendorsTwo.json";

const VendorsTwo = () => {
    return (
      <div className="grid md:grid-cols-3 gap-5 mt-16 px-2 md:px-0">
        {data?.map((item, index) => (
          <div key={index} title={item?.name} className="shadow-md">
            <img src={item?.img} alt="image" />
          </div>
        ))}
      </div>
    );
};

export default VendorsTwo;
import { useEffect, useState } from "react";

const VendorsTwo = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("vendorsTwo.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
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

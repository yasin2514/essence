import img from "../../assets/yellow-mark.png";

const Pickup = () => {
  const items = [
    {
      id: 1,
      name: "Quick & Easy Store Pickup",
      text: "Get your order as little as 1hr",
    },
    {
      id: 2,
      name: "Low Price Guarantee",
      text: "We won’t be beat on price",
    },
    {
      id: 3,
      name: "Knowledgeable Advice",
      text: "Answer to your tech questions",
    },
    {
      id: 4,
      name: "Lates & Greatest Tech",
      text: "Discover whats new & excitings",
    },
  ];
  return (
    <div className="grid grid-cols-4 gap-4 mt-5">
      {items?.map((item, index) => (
        <div
          key={index}
          className="flex justify-start items-center gap-3 bg-[#f7f8f8]  p-4 rounded"
        >
          <img src={img} alt="" />
          <div>
            <h5>{item?.name}</h5>
            <p>{item?.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Pickup;
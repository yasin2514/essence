import img1 from "../../../public/images/osp-1.png";
import img2 from "../../../public/images/osp-2.png";

const OnSellingItem = () => {
  return (
    <div className="mt-16 px-2 md:px-0">
      <h4 className="text-2xl font-semibold mb-6">On Selling Products</h4>
      <div className="md:flex justify-between">
        <aside className="space-y-5 w-full md:w-[25%]">
          <img src={img1} alt="selling image" />
          <img src={img1} alt="selling image" />
        </aside>
        <main className="w-full md:w-[47%] my-3 md:my-0">
          <img className="h-full w-full" src={img2} alt="selling image" />
        </main>
        <aside className="space-y-5 w-full md:w-[25%]">
          <img src={img1} alt="selling image" />
          <img src={img1} alt="selling image" />
        </aside>
      </div>
    </div>
  );
};

export default OnSellingItem;

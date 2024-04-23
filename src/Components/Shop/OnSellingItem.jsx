import img1 from "../../assets/osp-1.png";
import img2 from "../../assets/osp-2.png";

const OnSellingItem = () => {
  return (
    <div className="mt-16">
      <h4 className="text-2xl font-semibold mb-6">On Selling Products</h4>
      <div className="flex justify-between">
        <aside className="space-y-5 w-[25%]">
          <img src={img1} alt="selling image" />
          <img src={img1} alt="selling image" />
        </aside>
        <main className="w-[47%]">
          <img className="h-full w-full" src={img2} alt="selling image" />
        </main>
        <aside className="space-y-5 w-[25%]">
          <img src={img1} alt="selling image" />
          <img src={img1} alt="selling image" />
        </aside>
      </div>
    </div>
  );
};

export default OnSellingItem;

import img1 from "../../../public/images/osp-1.png";
import img2 from "../../../public/images/osp-2.png";

const OnSellingItem = () => {
  return (
    <div className="mt-16 px-2 md:px-0">
      <h4 className="text-2xl font-semibold mb-6">On Selling Products</h4>
      <div className="flex flex-col xl:flex-row justify-between">
        {/* left side */}
        <aside className="flex flex-col space-y-5 sm:space-y-0 xl:space-y-5 sm:flex-row justify-between  xl:block w-full  xl:w-[25%]  border">
          <img
            src={img1}
            className="h-full w-full sm:w-[48%] xl:h-auto xl:w-full "
            alt="selling image"
          />
          <img
            src={img1}
            className="h-full w-full sm:w-[48%] xl:h-auto xl:w-full"
            alt="selling image"
          />
        </aside>
        {/* main part */}
        <main className="w-full my-5 sm:h-[300px] md:h-[450px] xl:h-auto xl:w-[47%] xl:my-0">
          <img className="h-full w-full" src={img2} alt="selling image" />
        </main>
        {/* right side  */}
        <aside className="flex flex-col space-y-5 sm:space-y-0 xl:space-y-5 sm:flex-row justify-between  xl:block w-full  xl:w-[25%]  border">
          <img
            src={img1}
            className="h-full w-full sm:w-[48%] xl:h-auto xl:w-full "
            alt="selling image"
          />
          <img
            src={img1}
            className="h-full w-full sm:w-[48%] xl:h-auto xl:w-full"
            alt="selling image"
          />
        </aside>
      </div>
    </div>
  );
};

export default OnSellingItem;

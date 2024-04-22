import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";

const Main = () => {
  return (
    <>
      <Header></Header>
      <section className="bg-[#f1f0ee] ">
        <div className="max-w-screen-xl m-auto py-4">
          <Outlet></Outlet>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default Main;

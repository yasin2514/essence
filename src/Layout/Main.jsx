import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import FooterBottom from "../Components/Footer/FooterBottom";
import GoToTop from "../Components/GoToTop";

const Main = () => {
  return (
    <>
      <Header></Header>
      <section className="bg-[#f1f0ee] ">
        <div className="max-w-screen-xl m-auto pt-4 pb-10">
          {/* <Outlet></Outlet> */}
          <Footer></Footer>
        </div>
      </section>

      <FooterBottom></FooterBottom>
      <GoToTop />
    </>
  );
};

export default Main;

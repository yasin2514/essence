import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import FooterBottom from "../Components/Footer/FooterBottom";
import GoToTop from "../Components/GoToTop";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <>
      <Header></Header>
      <section className="bg-[#f1f0ee] px-4 xl:px-0">
        <div className="max-w-screen-xl m-auto pt-4 pb-10">
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
      </section>
      <FooterBottom></FooterBottom>
      <GoToTop />
    </>
  );
};

export default Main;

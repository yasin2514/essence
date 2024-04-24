import img1 from "../../../public/images/pay-1.png";
import img2 from "../../../public/images/pay-2.png";
import img3 from "../../../public/images/pay-3.png";
import img4 from "../../../public/images/pay-4.png";

const FooterBottom = () => {
  return (
    <div className="bg-[#cecfcf]">
      <div className="max-w-screen-xl m-auto py-5 px-2 md:px-0 md:flex justify-between items-center text-center md:text-left">
        <div>
          All Rights Reserved. &copy;{new Date().getFullYear()}{" "}
          <span className="text-blue-800">Yasin Khan Rabbi</span>
        </div>
        <div className="md:flex gap-5 items-center">
          <p>We are using safe for</p>
          <div className="flex justify-center md:justify-start gap-2 mt-2 md:mt-0">
            <a href="#">
              <img src={img1} alt="payment img" />
            </a>
            <a href="#">
              <img src={img2} alt="payment img" />
            </a>
            <a href="#">
              <img src={img3} alt="payment img" />
            </a>
            <a href="#">
              <img src={img4} alt="payment img" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;

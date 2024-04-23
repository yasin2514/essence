import img1 from "../../assets/pay-1.png";
import img2 from "../../assets/pay-2.png";
import img3 from "../../assets/pay-3.png";
import img4 from "../../assets/pay-4.png";

const FooterBottom = () => {
  return (
    <div className="bg-[#cecfcf]">
      <div className="max-w-screen-xl m-auto py-5 flex justify-between items-center">
        <div>
          All Rights Reserved. &copy;{new Date().getFullYear()}{" "}
          <span className="text-blue-800">Yasin Khan Rabbi</span>
        </div>
        <div className="flex gap-5 items-center">
          <p>We are using safe for</p>
          <div className="flex gap-2">
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

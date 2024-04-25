import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import img1 from "../../../public/images/slide-1.png";
import img2 from "../../../public/images/slide-2.png";
import img3 from "../../../public/images/slide-3.png";
import img4 from "../../../public/images/slide-4.png";
import img5 from "../../../public/images/slide-5.png";
import img6 from "../../../public/images/slide-6.png";

const SwipeToSlide = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free",
    slides: {
      perView: 5,
      spacing: 15,
    },
  });
  return (
    <div ref={sliderRef} className="keen-slider">
      <div className="keen-slider__slide number-slide1 flex flex-col items-center">
        <img className="w-full sm:w-[100px]  lg:w-[80px]" src={img1} alt="slide-img" />
        <p className="mt-1">Brand Name</p>
      </div>
      <div className="keen-slider__slide number-slide1 flex flex-col items-center">
        <img className="w-full sm:w-[100px]  lg:w-[80px]" src={img2} alt="slide-img" />
        <p className="mt-1">Brand Name</p>
      </div>
      <div className="keen-slider__slide number-slide1 flex flex-col items-center">
        <img className="w-full sm:w-[100px]  lg:w-[80px]" src={img3} alt="slide-img" />
        <p className="mt-1">Brand Name</p>
      </div>
      <div className="keen-slider__slide number-slide1 flex flex-col items-center">
        <img className="w-full sm:w-[100px]  lg:w-[80px]" src={img4} alt="slide-img" />
        <p className="mt-1">Brand Name</p>
      </div>
      <div className="keen-slider__slide number-slide1 flex flex-col items-center">
        <img className="w-full sm:w-[100px]  lg:w-[80px]" src={img5} alt="slide-img" />
        <p className="mt-1">Brand Name</p>
      </div>
      <div className="keen-slider__slide number-slide1 flex flex-col items-center">
        <img className="w-full sm:w-[100px]  lg:w-[80px]" src={img6} alt="slide-img" />
        <p className="mt-1">Brand Name</p>
      </div>
    </div>
  );
};

export default SwipeToSlide;

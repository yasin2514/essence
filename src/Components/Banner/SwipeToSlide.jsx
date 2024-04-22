import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import img1 from "../../assets/slide-1.png";
import img2 from "../../assets/slide-2.png";
import img3 from "../../assets/slide-3.png";
import img4 from "../../assets/slide-4.png";
import img5 from "../../assets/slide-5.png";
import img6 from "../../assets/slide-6.png";

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
        <img className="w-[60%]" src={img1} alt="slide-img" />
        <p className="mt-1">Brand Name</p>
      </div>
      <div className="keen-slider__slide number-slide1 flex flex-col items-center">
        <img className="w-[60%]" src={img2} alt="slide-img" />
        <p className="mt-1">Brand Name</p>
      </div>
      <div className="keen-slider__slide number-slide1 flex flex-col items-center">
        <img className="w-[60%]" src={img3} alt="slide-img" />
        <p className="mt-1">Brand Name</p>
      </div>
      <div className="keen-slider__slide number-slide1 flex flex-col items-center">
        <img  className="w-[60%]"src={img4} alt="slide-img" />
        <p className="mt-1">Brand Name</p>
      </div>
      <div className="keen-slider__slide number-slide1 flex flex-col items-center">
        <img className="w-[60%]" src={img5} alt="slide-img" />
        <p className="mt-1">Brand Name</p>
      </div>
      <div className="keen-slider__slide number-slide1 flex flex-col items-center">
        <img  className="w-[60%]"src={img6} alt="slide-img" />
        <p className="mt-1">Brand Name</p>
      </div>
    </div>
  );
};

export default SwipeToSlide;

import { useState } from "react";

const CarouselText = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-screen">
      <button
        className="absolute left-0  top-1/2 transform -translate-y-1/2 text-blue-600 text-3xl fw-bolder"
        onClick={goToPrevSlide}
      >
        &lt;
      </button>
      <div className="flex justify-start items-center">
        <div className="mx-auto">{items[currentIndex]}</div>
      </div>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 text-blue-600 text-3xl fw-bolder"
        onClick={goToNextSlide}
      >
        &gt;
      </button>
    </div>
  );
};

const Carousel = () => {
  const items = [
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci delectus sequi fugit repudiandae vitae reprehenderit.",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, at.",
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt magnam inventore minima placeat!",
  ];
  return (
    <div className="flex justify-center items-center bg-white max-w-screen-xl mx-auto text-blue-800 text-lg fw-bold py-2">
      <CarouselText items={items} />
    </div>
  );
};

export default Carousel;

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../../assets/b-c-1.jpg";

const BannerCarousel = () => {
  return (
    <Carousel
      showArrows={false}
      showStatus={false}
      showThumbs={false}
      renderIndicator={(onClickHandler, isSelected, index, label) => {
        const dotStyle = {
          background: isSelected ? "blue" : "#ccc",
          width: "10px",
          height: "10px",
          display: "inline-block",
          margin: "0 5px",
          borderRadius: "50%",
          cursor: "pointer",
        };

        return (
          <span
            style={dotStyle}
            onClick={onClickHandler}
            onKeyDown={onClickHandler}
            role="button"
            tabIndex={0}
            title={`${label}: ${index + 1}`}
            aria-label={`${label}: ${index + 1}`}
          />
        );
      }}
    >
      <div>
        <img src={img1} className="h-[410px]" alt="slide-img" />
      </div>
      <div>
        <img src={img1} className="h-[410px]" alt="slide-img" />
      </div>
      <div>
        <img src={img1} className="h-[410px]" alt="slide-img" />
      </div>
      <div>
        <img src={img1} className="h-[410px]" alt="slide-img" />
      </div>
      <div>
        <img src={img1} className="h-[410px]" alt="slide-img" />
      </div>
    </Carousel>
  );
};

export default BannerCarousel;

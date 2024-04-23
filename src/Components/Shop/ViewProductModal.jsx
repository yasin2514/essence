import React, { useRef, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import Rating from "react-rating-stars-component";

const ViewProductModal = ({ isOpen, onClose, item }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, onClose]);

  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? "block" : "hidden"}`}>
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="">
        <div
          ref={modalRef}
          className="modal-content bg-white rounded-lg shadow-md p-4 mx-auto relative mt-24 w-1/2"
        >
          <div className="flex gap-3 justify-between items-start p-4">
            <div className="w-[49%] h-full">
              <img src={item?.img} alt="img" className="w-100 h-[100%]" />
            </div>
            <div className="w-[49%] ">
              <div className="space-y-3">
                <h5 className="font-bold text-xl">{item?.name}</h5>
                <div className="flex items-center gap-2">
                  <Rating
                    count={5}
                    size={18}
                    value={item?.rating || 0}
                    edit={false}
                    activeColor="#ffd700"
                    emptyIcon={<FaStar />}
                    filledIcon={<FaStar />}
                  />
                  <span>{item?.rating}</span>
                  <span>{`(${item?.review || 0} Review)`}</span>
                </div>
                <div className="flex justify-start items-center gap-5">
                  <span className="text-2xl font-bold">${item?.price}</span>
                  <del className="text-gray-500">${item?.previousPrice}</del>
                  <span className="text-gray-500">
                    {`-${(
                      ((item?.previousPrice - item?.price) /
                        item?.previousPrice) *
                      100
                    ).toFixed(2)}%`}
                  </span>
                </div>
                <p className="text-gray-600 mb-10">
                  {item?.description} {item?.description}
                </p>
              </div>
              <button
                onClick={onClose}
                className=" absolute bottom-8 right-10 btn-danger w-2/5   flex justify-center  items-center"
              >
                Close Modal
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProductModal;

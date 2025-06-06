"use client";
import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
function WorkSliderButton() {
  const swiper = useSwiper();
  return (
    <div className="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none">
      <button
        onClick={() => swiper.slidePrev()}
        className="bg-accent hover:bg-accent-hover text-primary text-[22px] p-2 w-[44px] h-[44px] flex justify-center items-center transition-all"
      >
        <PiCaretLeftBold />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className="bg-accent hover:bg-accent-hover text-primary text-[22px] p-2 w-[44px] h-[44px] flex justify-center items-center transition-all"
      >
        <PiCaretRightBold />
      </button>
    </div>
  );
}
export default WorkSliderButton;

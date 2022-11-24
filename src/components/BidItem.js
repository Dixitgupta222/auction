import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import HorizontalNav from "./HorizontalNav";
import VerticalNav from "./VerticalNav";
import "swiper/css";
import "swiper/css/thumbs";
import { Thumbs } from "swiper";
function BidItem() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="flex font-Roboto">
     <div className="hidden lg:block">
      <VerticalNav />
     </div>
      <div className="grow">
      <div className=" lg:block">
     <HorizontalNav/>
     </div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="p-[15px] lg:p-[50px] border-r border-[#4D4D4D]">
            <Swiper
              thumbs={{
                swiper:
                  thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
              }}
              modules={[Thumbs]}
              className="mySwiper2"
            >
              <SwiperSlide>
                <img className="rounded-[30px]" src="images/chair.png" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="rounded-[30px]" src="images/chair.png" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="rounded-[30px]" src="images/chair.png" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="rounded-[30px]" src="images/chair.png" />
              </SwiperSlide>
            </Swiper>

            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={4}
              watchSlidesProgress={true}
              modules={[Thumbs]}
              className="mySwiper mt-5"
              width={300}
            >
              <SwiperSlide>
                <img className="rounded-xl" src="images/chair.png" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="rounded-xl" src="images/chair.png" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="rounded-xl" src="images/chair.png" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="rounded-xl" src="images/chair.png" />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="p-[15px] lg:p-[50px] relative">
            <p className="font-normal text-[15px] md:text-[21px] text-[#ffffff7c] leading-[130%] capitalize">
              An office chair, or desk chair, is a type of chair that is
              designed for use at a desk in an office. It is usually a swivel
              chair, with a set of wheels for mobility and adjustable height.
            </p>
            <div className="my-[30px]">
              <h3 className="font-semibold text-[18px] md:text-[25px] text-[#ffffff7c] leading-[130%] capitalize">
                Highest Bidder
              </h3>
              <p className="my-3 flex items-center gap-3 font-semibold text-[18px] md:text-[25px] text-[#fff] leading-[130%] capitalize">
                <span className="bg-[#333333] w-8 h-8 rounded-full"></span>
                Ha...Pa
              </p>
              <p className="my-3 flex items-center gap-3 font-semibold text-[18px] md:text-[25px] text-[#fff] leading-[130%] capitalize">
                ₹ 50,000.00
              </p>
            </div>
            <div className="seperator-full"></div>
            <div className="my-[50px]">
              <h3 className="font-semibold text-[18px] md:text-[25px] text-[#ffffff7c] leading-[130%] capitalize">
                Your bid History
              </h3>
              <ul className="pt-4 h-[250px] overflow-y-scroll">
                <li className="flex relative py-[20px] justify-between text-[#ffffff7c] font-semibold text-[18px] md:text-[25px]">
                  <p>1st Bid</p>
                  <p>₹30,000.00</p>
                  <div className="w-full h-[5px] rounded bg-white opacity-5 absolute bottom-0 left-0"></div>
                </li>
                <li className="flex relative py-[20px] justify-between text-[#ffffff7c] font-semibold text-[18px] md:text-[25px]">
                  <p>2st Bid</p>
                  <p>₹40,000.00</p>
                  <div className="w-full h-[5px] rounded bg-white opacity-5 absolute bottom-0 left-0"></div>
                </li>
                <li className="flex relative py-[20px] justify-between text-[#ffffff7c] font-semibold text-[18px] md:text-[25px]">
                  <p>3st Bid</p>
                  <p>₹50,000.00</p>
                  <div className="w-full h-[5px] rounded bg-white opacity-5 absolute bottom-0 left-0"></div>
                </li>
              </ul>
            </div>
            <div className="seperator-full"></div>
            <div className="mt-[50px]">
              <div className="pt-4 flex gap-[76px]">
                <div className=" relative py-[20px] text-[#ffffff7c] font-semibold text-[18px] md:text-[25px]">
                  <p>Current Bid</p>
                  <p className="text-white pt-3">₹30,000.00</p>
                </div>
                <div className=" relative py-[20px] text-[#ffffff7c] font-semibold text-[18px] md:text-[25px]">
                  <p>Ending time</p>
                  <p className="text-white pt-3">12h 21m</p>
                </div>
                <div className=" relative py-[20px] text-[#ffffff7c] font-semibold text-[18px] md:text-[25px]">
                  <p>Stock</p>
                  <p className="text-white pt-3">123</p>
                </div>
              </div>
              <div className="relative w-full h-2 bg-[#303030] rounded">
                <div className="w-3/4 bg-[#1C5BFF] h-full"></div>
              </div>
              <div className="p-4 lg:pt-4 flex fixed bottom-0 bg-[#202020] w-full lg:bg-auto lg:relative left-0 lg:gap-[76px]">
                <div className=" relative py-[20px] text-[#ffffff7c] font-semibold text-[18px] md:text-[25px]">
                  <p>Your Bid</p>
                  <p className="text-white pt-3">₹30,000.00</p>
                </div>
                  <div className="flex gap-3 items-center justify-center relative ml-auto py-[20px]">
                  <div className="bg-[#1C5BFF] cursor-pointer flex items-center justify-center rounded-[10px] lg:rounded-[30px] h-[45px] w-[200px] lg:h-[74px] lg:w-[300px] text-[#ffffff] font-semibold text-[18px] md:text-[25px]">
                    Raise Bid
                  </div>
                  <div className="hidden lg:flex items-center justify-center w-[74px] h-[74px] bg-[#303030] rounded-[30px] hover:bg-[#1C5BFF] cursor-pointer">
                    <img src="/images/Home.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BidItem;

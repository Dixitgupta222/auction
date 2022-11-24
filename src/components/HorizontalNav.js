import React from "react";
function HorizontalNav() {
  return (
    <div className="flex font-Roboto gap-[30px] w-full bg-[#171717] border-b-[1px] border-[#4C4C4C] px-[15px] py-[25px] lg:px-[25px] lg:py-[50px]">
      <div className="flex items-center justify-center lg:w-[74px] lg:h-[74px] lg:bg-[#303030] rounded-[30px] hover:bg-[#1C5BFF] cursor-pointer">
        <img src="/images/back.svg" />
      </div>
      <div>
        <h2 className="font-bold lg:text-[45px] text-[27px] font-Sansita lg:font-Roboto text-white capitalize leading-relaxed">
          office chairs
        </h2>
      </div>
      <div className="ml-auto lg:flex items-center justify-center gap-[30px] hidden ">
        <form className="bg-[#303030] rounded-[50px] px-[50px] py-[25px] relative h-[75px]">
          <button className="absolute left-0 top-0 w-[75px] h-[75px] bg-[#464646] rounded-full flex items-center justify-center">
            <img src="/images/search.svg" />
          </button>
          <input
            className="bg-transparent pl-[50px] focus-within:outline-none text-white placeholder:text-[#ffffff86] text-[20px] font-normal"
            type="search"
            placeholder="Search for Auction Item..."
          />
        </form>
        <div className="flex items-center justify-center w-[74px] h-[74px] bg-[#303030] rounded-[30px] hover:bg-[#1C5BFF] cursor-pointer">
          <img src="/images/bell.svg" />
        </div>
        <div className="flex items-center justify-center w-[74px] h-[74px] bg-[#303030] rounded-[30px] hover:bg-[#1C5BFF] cursor-pointer">
          <img src="/images/user.png" />
        </div>
      </div>
    </div>
  );
}

export default HorizontalNav;

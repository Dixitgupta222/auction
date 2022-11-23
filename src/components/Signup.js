import React from "react";

function Signup() {
  return (
    <div className="flex items-center justify-center h-full ">
      <div className="grid overflow-hidden grid-cols-1 lg:grid-cols-2 grid-rows-1 gap-36 lg:gap-2 px-[20px] lg:px-[100px] items-center">
        <div>
          <h2 className="font-Sansita font-semibold text-white text-[45px] lg:text-[100px] text-center">
            Auction
          </h2>
        </div>
        <div className="bg-[#202020] rounded-[20px] lg:rounded-[40px] lg:p-20 p-7 font-Roboto">
          <h3 className="font-bold text-white text-[25px] lg:text-[45px]">Sign up</h3>
          <p className="text-white opacity-5 font-normal text-[13px] lg:text-[20px]">
            By continuing, you are agreeing with our Privacy policy and Terms of
            service
          </p>
          <div className="bg-[#303030] rounded-[15px] lg:rounded-[30px] font-semibold text-[20px] lg:text-[30px] capitalize text-white lg:py-[30px] py-[15px] flex items-center justify-center cursor-pointer my-4">
            create account
          </div>
          <div className="seperator">or</div>
          <div className="bg-[#303030] rounded-[15px] lg:rounded-[30px] font-semibold text-[20px] lg:text-[30px] capitalize text-white lg:py-[30px] py-[15px] flex items-center justify-center cursor-pointer my-4">
            Login
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;

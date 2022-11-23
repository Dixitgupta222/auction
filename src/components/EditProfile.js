import React from "react";
import { MdClose } from "react-icons/md";
import { FaUserAlt,FaEnvelope,FaPhoneAlt } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
function EditProfile(props) {
  return (
    <div className="md:w-[680px] mx-4 md:m-0 rounded-[40px] bg-[#202020] px-[30px] py-[28px]  md:px-[50px] md:py-[40px] font-Roboto">
      <div className="flex items-center justify-between">
        <h3 className="font-bold md:text-[35px] text-[25px] text-white">Edit Profile</h3>
        <div onClick={props.onClick} className="bg-[#303030] rounded-full flex items-center justify-center cursor-pointer w-[30px] h-[30px] md:w-[74px] md:h-[74px]">
          <IconContext.Provider value={{ color: "white", size: "40px" }}>
            <MdClose />
          </IconContext.Provider>
        </div>
      </div>
      <form className="grid grid-cols-1 gap-5 md:gap-[30px] my-5">
        <div className="flex items-center  w-full rounded-[15px] bg-[#303030] p-3 md:p-[18px]">
          <IconContext.Provider value={{ color: "#6E6E6E", size: "15px" }}>
            <FaUserAlt />
          </IconContext.Provider>
          <input className=" bg-transparent text-[15px] md:text-[20px] text-white focus-within:outline-none pl-2" type="text" placeholder="Name"/>
        </div>
        <div><h3 className="font-bold text-[13px] md:text-[25px] text-white uppercase">Chnage phone number</h3></div>
        <div className="flex items-center  w-full rounded-[15px] bg-[#303030] p-3 md:p-[18px]">
          <IconContext.Provider value={{ color: "#6E6E6E", size: "15px" }}>
            <FaPhoneAlt />
          </IconContext.Provider>
          <input className=" bg-transparent text-[15px] md:text-[20px] text-white focus-within:outline-none pl-2" type="tel" placeholder="+91 99999 99999"/>
        </div>
        <div><h3 className="font-bold text-[13px] md:text-[25px] text-white uppercase">Chnage Email</h3></div>
        <div className="flex items-center  w-full rounded-[15px] bg-[#303030] p-3 md:p-[18px]">
          <IconContext.Provider value={{ color: "#6E6E6E", size: "15px" }}>
            <FaEnvelope />
          </IconContext.Provider>
          <input className=" bg-transparent text-[15px] md:text-[20px] text-white focus-within:outline-none pl-2" type="tel" placeholder="+91 99999 99999"/>
        </div>
        <input className="bg-[#1C5BFF] rounded-[15px] mt-4 text-white uppercase p-3 md:p-[17px] text-20px] cursor-pointer" type='submit' value="Save"/>
      </form>
    </div>
  );
}

export default EditProfile;

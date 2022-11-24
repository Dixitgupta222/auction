import React from 'react'
function VerticalNav() {
  return (
    <div className='flex flex-col gap-[30px] w-[123px] h-screen bg-[#202020] px-[25px] py-[50px]'>
		 <div className='flex items-center justify-center w-[74px] h-[74px] bg-[#303030] rounded-[30px] hover:bg-[#1C5BFF] cursor-pointer'>
		 <img src='/images/Home.svg'/>
		 </div>
		 <div className='flex items-center justify-center w-[74px] h-[74px] bg-[#303030] rounded-[30px] hover:bg-[#1C5BFF] cursor-pointer'>
			<img src='/images/bid.svg'/>
		 </div>
		 <div className='flex mt-auto items-center justify-center w-[74px] h-[74px] bg-[#303030] rounded-[30px] hover:bg-[#1C5BFF] cursor-pointer'>
			<img src='/images/bid.svg'/>
		 </div>
    </div>
  )
}

export default VerticalNav
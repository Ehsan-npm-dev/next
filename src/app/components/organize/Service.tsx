import React from "react";
import Image from "next/image";
import Link from "next/link";
function Service() {
  return (
    <div className="mt-4 bg-pink-700 border rounded-lg justify-center items-center flex ">
      <div className=" w-[1300px] items-center  shadow-xl rounded-lg  h-[100px] flex justify-between px-2">
        <div className="flex justify-center gap-3 items-center">
          <button className="flex justify-center font-bold bg-white text-xl p-2 rounded-xl w-[220px]  text-green-500 hover:text-black items-center">
            <span className="flex justify-center items-center ">
              <Image
                src="/sell/arrow.png"
                width={20}
                height={20}
                alt="arrow"
                className="justify-center flex rounded-3xl mr-2 "
              />
              بیش از 100 کالا
            </span>
          </button>

          <ul className="w-[450px]  h-auto gap-4  p-2  flex justify-center items-center">
            <li className=" w-[80px] p-2 bg-white rounded-full h-[auto]  flex flex-col justify-center items-center">
              <Image
                src="/sell/b4a7fbbbf253fef01c027dca7d9feb0f44964389_1686638520.webp"
                alt="poster"
                width={40}
                height={30}
                className="rounded-xl size-10 flex justify-center text-white items-center"
              />{" "}
              <button className="bg-red-500 text-white rounded-full text-sm text-center  font-bold w-8 ml-4 ">
                23%
              </button>
            </li>
            <li className=" w-[80px] p-2 bg-white rounded-full h-[auto]  flex flex-col justify-center items-center">
              <Image
                src="/sell/b4a7fbbbf253fef01c027dca7d9feb0f44964389_1686638520.webp"
                alt="poster"
                width={40}
                height={30}
                className="rounded-xl size-10 flex justify-center text-white items-center"
              />{" "}
              <button className="bg-red-500 text-white rounded-full text-sm text-center  font-bold w-8 ml-4 ">
                23%
              </button>
            </li>
            <li className=" w-[80px] p-2 bg-white rounded-full h-[auto]  flex flex-col justify-center items-center">
              <Image
                src="/sell/aghele.webp"
                alt="poster"
                width={40}
                height={30}
                className="rounded-xl size-10 flex justify-center items-center"
              />{" "}
              <button className="bg-red-500  text-white rounded-full text-sm text-center  font-bold w-8 ml-4 ">
                53%
              </button>
            </li>
            <li className=" w-[80px] p-2 bg-white rounded-full h-[auto]  flex flex-col justify-center items-center">
              <Image
                src="/sell/b4a7fbbbf253fef01c027dca7d9feb0f44964389_1686638520.webp"
                alt="poster"
                width={40}
                height={30}
                className="rounded-xl size-10 flex justify-center items-center"
              />{" "}
              <button className="bg-red-500 rounded-full text-sm text-center text-white font-bold w-8 ml-4 ">
                13%
              </button>
            </li>
          </ul>
        </div>

        <div className="flex  justify-center pr-8 items-center w-[420px]">
         
<div className="flex flex-col w-full justify-center pb-2 gap-2 items-center">
          <h3 className="text-white text-center  text-2xl w-[355px] font-bold ">
            دسترسی زودتر و تخفیف بیشتر</h3>
            <p className="text-sm text-white"> کالاهای شگفت انگیز ........    ویژه اعضای دیجی پلاس</p>
            </div>
          <Image src="/Service/early-access.svg" alt="vector" width={50} height={30} className="pb-2" />
        </div>
      </div>
    </div>
  );
}

export default Service;

import React from "react";
import Image from "next/image";
import Link from "next/link";

function List() {
  return (
    <>
      <div className="bg-gray-200 shadow-lg  w-[1300px] items-center border shadow-xl rounded-lg p-2 h-[100px] flex justify-between">
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
              بیش از 2000 کالا
            </span>
          </button>

          <ul className="w-[450px] bg-gray-200 h-auto gap-4  p-2 border  flex justify-center items-center">
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

        <div className="flex justify-center pr-4 items-center gap-3 w-[500px]">
          <button className="border w-[130px] bg-green-600 rounded-2xl p-1 text-white">
            تا 30% تخفیف
          </button>

          <h3 className="text-green-600 text-2xl w-[300px] font-bold">
            شگفت انگیز سوپرمارکتی
          </h3>
          <Image src="/img/fresh.webp" alt="vector" width={60} height={30} />
        </div>
      </div>
    </>
  );
}

export default List;

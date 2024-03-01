import React from "react";
import Image from "next/image";
import Link from "next/link";
function Navbar() {
  return (
    <div className="flex h-[40px]  w-[full] items-center justify-center gap-1">
      <div className="flex justify-center items-center w-[230px] mr-5 h-[40px] rounded-lg pl-[140px]  ">
        <Link
          href=""
          className=" flex min-w-[240px] max-w-[350px] h-[40px] gap-3 p-2 border rounded-lg"
        >
          لطفا شهر خو را انتخاب نمایید
          <Image
            src="/icon/images.png"
            alt="menu"
            width={22}
            height={22}
            className="flex items-center "
          />
        </Link>
      </div>

      <div className="flex justify-center gap-1 text-sm w-[1100px] ">
        <div className="flex justify-around items-center w-[850px] ">
          <ul className="flex justify-center  items-center ml-28 h-[40px] w-[760px] gap-1 rounded-lg ">
            <li className="flex  gap-2 w-[170px]  items-center justify-center  h-[35px] ">
              در دیجی کالا بفروشید
            </li>
            <li className="flex items-center w-[100px]  p-2 rounded-md justify-center hover:border-b-red-500 ">
              <Link href="" className="text-sm  w-[100px] justify-center ">
                سوالی دارید؟{" "}
              </Link>
            </li>
            <li className="flex items-center justify-center gap-2 w-[180px]">
              <Link
                href=""
                className="flex justify-center border rounded-lg hover:border-b-red-400 bg-white text-sm w-[full] h-[35px] p-2 items-center gap-1"
              >
                پرفروش ترین ها
                <Image
                  src="/icon/celler.jpg"
                  alt="menu"
                  width={18}
                  height={18}
                  className="rounded-2xl"
                />
              </Link>
            </li>
            <li className="flex items-center justify-center gap-1  w-[180px]">
              <Link
                href=""
                className="flex justify-center  hover:border-b-red-400 rounded-lg text-sm bg-gray-100  w-[full] h-[35px] p-2 items-center gap-1"
              >
                کارت هدیه
                <Image
                  src="/icon/animated_cart.gif"
                  alt="menu"
                  width={35}
                  height={25}
                  className="rounded-2xl"
                />
              </Link>
            </li>
            <li className="flex items-center   justify-center gap-2  w-[140px] h-[30px]">
              <Link
                href=""
                className="flex justify-center hover:border-b-red-400 text-sm border rounded-lg  w-[full] h-[35px] p-2 items-center gap-1"
              >
                سوپرمارکت
                <Image
                  src="/icon/super.jpg"
                  alt="menu"
                  width={20}
                  height={20}
                />
              </Link>
            </li>

            <li className="flex items-center justify-center gap-2  w-[160px] h-[20px]">
              <Link
                href=""
                className="flex justify-center border text-sm rounded-lg hover:border-b-red-400 p-2 w-[full] h-[35px] items-center gap-1"
              >
                شگفت انگیزها
                <Image
                  src="/icon/fabulous-32.svg"
                  alt="menu"
                  width={22}
                  height={20}
                />
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex justify-center gap-1 items-center ml-[40px] w-[130px]">
          |<h3 className="">دسته بندی کالاها</h3>
          <Image
            src="/icon/menu.jpg"
            alt="menu"
            width={20}
            height={20}
            className="bg-black rounded-full"
          />
        </div>
      </div>
     
    </div>
    
  );
}

export default Navbar;

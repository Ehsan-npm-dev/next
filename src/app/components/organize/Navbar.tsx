import React from "react";
import Image from "next/image";
import Link from "next/link";
function Navbar() {
  return (
    <div className="flex h-[40px]  w-[full] items-center justify-center ">
      <div className="flex justify-center items-center  w-[240px]   h-[40px] rounded-lg   ">
        <Link
          href=""
          className=" flex min-w-[290px]  max-w-[380px]  items-center justify-center gap-2 p-2 border rounded-lg text-center"
        >
          لطفا شهر خود را انتخاب نمایید
          <Image
            src="/icon/images.png"
            alt="menu"
            width={22}
            height={22}
            className="flex items-center "
          />
        </Link>
      </div>

      <div className="flex justify-center gap-0  text-sm w-[full]  ">
        <div className="flex justify-center items-center w-[898px]  ">
          <ul className="flex justify-center  items-center h-[40px] w-[820px] gap-1 rounded-lg ">
            <li className="flex hover:border p-2 rounded-lg hover:bg-blue-700 w-[200px] hover:text-white  gap-2   items-center justify-center  h-[35px] ">
              در دیجی کالا بفروشید
            </li>
            <li className="flex items-center w-[150px]   rounded-md justify-center hover:border-b-red-500 ">
              <Link href="" className="text-sm hover:border  rounded-lg hover:bg-blue-700 hover:text-white  w-[120px] p-2 justify-center ">
                سوالی دارید؟{" "}
              </Link>
            </li>
            <li className="flex items-center hover:border-b-red-700 justify-center gap-2 w-[190px]">
              <Link
                href=""
                className="flex justify-center border rounded-lg hover:border-b-red-400 bg-white text-sm w-[140px] h-[35px] p-2 items-center gap-1"
              >
                پرفروش ترین ها
                <Image
                  src="/icon/celler.jpg"
                  alt="menu"
                  width={20}
                  height={18}
                  className="rounded-3xl w-3  "
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

            <li className="flex items-center justify-center gap-2  w-[180px] h-[20px]">
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

        <div className="flex justify-center gap-1 items-center  w-[140px]">
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

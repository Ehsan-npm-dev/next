import React from "react";
import Image from "next/image";
import { Span } from "next/dist/trace";
function page() {
  return (
    <div className="flex flex-col justify-center items-center  h-[100vh]">
      <div className="w-[300px] gap-3 border rounded-lg justify-center items-center flex flex-col p-4 md:min-w-[350px] h-[auto]">
        <Image
          src="/img/logo.svg"
          alt="logo"
          width={80}
          height={20}
          className="flex justify-center items-center pb-2 w-[120px] pt-2 md:min-w-[150px]  "
        />
        <h3 className="flex font-bold  p-2  text-center sm:min-w-[300px] bg-red-200 w-full justify-center rounded-md md:justify-center md:items-center lg:bg-white ">
          ورود | ثبت‌نام
        </h3>
        <small className="pl-[199px]">سلام!</small>
        <p className="text-[12px] ml-12 text-gray-600  ">
          : لطفا شماره موبایل خود را وارد کنید
        </p>

        <input
          type="text"
          placeholder=""
          className="border p-2 border-red-400 rounded-lg w-[240px]"
        />
        <p className="text-red-600 text-[13px] font-bold pl-[75px] flex flex-start  w-[250px]  ">
          لطفا این قسمت را خالی نگذارید
        </p>

        <button className="border p-2 rounded-lg  bg-red-600 w-[250px] sm:min-w-[300px] text-white font-bold">
          ورود
        </button>
        <p className="text-[12px] w-[240px]  text-center items-center pt-2 text-gray-600">
          ورود شما به معنای پذیرش شرایط دیجی‌کالاوقوانین حریم‌ خصوصی است
        </p>
      </div>
    </div>
  );
}

export default page;

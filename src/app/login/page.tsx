import React from "react";
import Image from "next/image";
import { Span } from "next/dist/trace";
function page() {
  return (
    <div className="flex flex-col justify-center items-center h-[100vh]">
      <div className="w-[350px] gap-2 border rounded-lg justify-center items-center flex flex-col p-4">
        <Image
          src="/img/logo.svg"
          alt="logo"
          width={80}
          height={20}
          className="flex justify-center items-center pb-2 "
        />
        <h3 className="flex  ml-24 flex-row-reverse w-28 text-center ">ورود | ثبت‌نام</h3>
        <small className="ml-44">سلام!</small>
        <p className="text-sm ml-8 text-gray-600">لطفا شماره موبایل خود را وارد کنید</p>
      
          <input type="text" placeholder="" className="border p-2 border-red-400 rounded-lg" />
       <p className="text-red-600 text-sm ml-14 mb-4 ">
لطفا این قسمت را خالی نگذارید</p>

<button className="border p-2 rounded-lg  bg-red-600 w-[250px] text-white font-bold">ورود</button>
<p className="text-sm w-[270px] justify-center pt-2 text-gray-600">
ورود شما به معنای پذیرش شرایط دیجی‌کالاوقوانین حریم‌خصوصیاست</p>
        
      </div>
    </div>
  );
}

export default page;

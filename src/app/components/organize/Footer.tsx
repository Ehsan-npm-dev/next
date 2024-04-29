import React from "react";
import Image from "next/image";
import { posts } from "../../config";
import FooterItemMol from "../molcoules/FooterItemMol";
import DetailMol from "../molcoules/DetailMol";
function Footer() {
  return (
    <div className="flex flex-col justify-center pt-10">
      <div className="flex justify-between items-center  w-full bg-slate-400 h-[70px]  p-2 pt-2">
        <button className=" flex justify-center items-center gap-2 w-[240px] border p-2 rounded-md">
          بازگشت به بالا{" "}
          <Image
            src="/footer/angle-bottom-icon.png"
            width={20}
            height={30}
            alt="icon"
          />{" "}
        </button>
        <Image
          src="/footer/digi.svg"
          alt="footer"
          width={150}
          height={100}
          className="mr-4 w-20 "
        />
      </div>
      <div className=" p-2 ">
        <ul className="flex dir-ltr flex-row-reverse  gap-4">
          <li>تلفن پشتیبانی ۶۱۹۳۰۰۰۰ - ۰۲۱</li>|
          <li>۰۲۱-۹۱۰۰۰۱۰۰</li>|
          <li>۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم</li>
        </ul>
      </div>

      <div className="flex justify-center gap-20 items-center ">
        {posts.map((i)=>(

<FooterItemMol
{...i} 
/>
        ))}
      </div>

      <DetailMol/>
    </div>
  );
}

export default Footer;

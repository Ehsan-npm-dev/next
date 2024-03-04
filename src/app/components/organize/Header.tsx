import React from "react";
import Image from "next/image";
import Link from "next/link";
function Header() {
  return (
    <section className="flex w-[full] justify-around items-center ">

      <div className="flex justify-evenly  items-center w-[1600px] gap-10 h-16 p-2 ">
        <div className=" gap-3 p-2  flex justify-around items-center w-[220px] h-[50px] bg-white rounded-md">
          <Image src="/icon/cart.png" alt="Log" width={25} height={25} />|
          <Link
            href="/login"
            className="text-xl flex items-center border justify-center  w-[220px] rounded-md  h-[38px] "
          >
            <button className="px-2 text-[15px]">ورود | ثبت نام</button>
            <Image src="/img/log.svg" alt="Log" width={25} height={25} />
          </Link>
        </div>
        <div className="flex justify-around gap-3 items-center rounded-md w-[700px]">
          <form
            action=""
            className="flex flex-end items-center  justify-center gap-2 p-2 bg-slate-100 h-[45px] rounded-md text-black "
          >
            <Image src="/img/vector.svg" alt="search" width={20} height={20} />
            <input
              type="text"
              placeholder="جستجو"
              autoComplete="off"
              className=" rounded-md  w-[500px] bg-slate-100  text-black p-2  flex "
            />
          </form>

          <Image src="/img/logo.svg" alt="Logo" width={100} height={100} />
        </div>
      </div>
    </section>
  );
}

export default Header;

import React from "react";
import Image from "next/image";
import Link from "next/link";
function Main() {
  return (
    <div className="flex justify-center  items-center w-[full] h-[300px]  ">
      <Link href="">
        <Image
          src="/menu/5610bce7a5837a3811a82cfede1ec6f79689ce22_1709034018.gif "
          alt="background"
          width={300}
          height={100}
          className="flex justify-center items-center border hover:border-blue-400 rounded-lg border-black shadow-lg w-[1300px] "
        />

      
      </Link>
    </div>
  );
}

export default Main;

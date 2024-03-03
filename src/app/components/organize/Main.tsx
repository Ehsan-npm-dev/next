import React from "react";
import Image from "next/image";
import Link from "next/link";
function Main() {
  return (
    <div className="flex justify-center flex-col items-center w-[full]  h-[30vh] ">
      <Link href="">
        <Image
          src="/menu/5610bce7a5837a3811a82cfede1ec6f79689ce22_1709034018.gif "
          alt="background"
          width={400}
          height={300}
          className="flex justify-center items-center h-[30vh] w-[1600px] min-w-[600px]"
        />

      
      </Link>
    </div>
  );
}

export default Main;

import React from "react";
import Image from "next/image";

type Props = {
  icon: any;
  title: string;
  url: string;
  active: any;
};

function LinkItemMol({ icon, title, url }: Props) {
  return (
    <div className="flex flex-col w-[150px]  items-center p-2 rounded-2xl justify-center gap-2 ">
     <h3>{icon}</h3>
      <p className="w-[100px] text-sm  rounded-md  flex items-center justify-center">{title}</p>
    </div>
  );
}

export default LinkItemMol;

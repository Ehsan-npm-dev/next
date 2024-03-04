import React from "react";

type Props = {
  icon: any;
  title: string;
  url: any;
};

function CardItemMol({ icon, title, url }: Props) {
  return (
    <div className="flex flex-col items-center  rounded-lg  gap-1 justify-center p-2 ">
      <h3 className="flex justify-center ">{icon}</h3>
      <p className="w-[200px]  items-center justify-center flex p-2 ">
        {title}
      </p>
    </div>
  );
}

export default CardItemMol;

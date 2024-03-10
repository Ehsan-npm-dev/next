import React from "react";

type Props = {
  icon: any;
  title: string;
  url: any;
};

function CardItemMol({ icon, title, url }: Props) {
  return (
    <div className="flex w-[210px] items-center  rounded-lg justify-center p-2 ">
      <div className="w-[120px] flex flex-col justify-center items-center">
      <h3 className="flex justify-center ">{icon}</h3>
      <p className="w-[200px]  items-center justify-center flex p-2 ">
        {title}
      </p>
      </div>
    </div>
  );
}

export default CardItemMol;

import React from "react";

type Props = {
  icon: any;
  title: string;
  url: any;
};

function CardItemMol({ icon, title, url }: Props) {
  return (
    <div className="flex flex-col items-center  rounded-lg  gap-2 justify-center p-2 ">
      <h3>{icon}</h3>
      <p>{title}</p>
    </div>
  );
}

export default CardItemMol;

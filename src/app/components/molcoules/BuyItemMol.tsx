import React from "react";

type Props = {
  img: any;
  title: String;
  url: any;
};

function BuyItemMol({ img, title, url }: Props) {
  return (
   
      <div className="flex p-2 flex-col justify-center gap-2 items-center">
        <h3 className="border rounded-full shadow-xl">{img}</h3>
        <p className="w-[250px] text-center font-semibold text-xl shadow-sm h-auto bg-white p-2 rounded-md">{title}</p>
      </div>
    
  );
}

export default BuyItemMol;

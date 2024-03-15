import React from "react";
import BuyItemMol from "../molcoules/BuyItemMol";
import { lists } from "../../config";
function Buy() {
  return (
    <div className="flex flex-col w-[1300px] h-[380px] gap-2 p-2 pt-6 items-center ">
      <div className="flex pb-2  rounded-xl shadow-sm p-2">
        {" "}
        <h3 className="text-xl font-bold ">خرید بر اساس دسته بندی </h3>
      </div>

      <div className="flex  w-full h-[400px] justify-center gap-x-10 p-2">
       
        {lists.map((i) => (
          <BuyItemMol {...i} key={i.id} />
        ))}
        
      </div>
      <div className="flex  w-full h-[400px] justify-center gap-x-10 p-2">
       
       {lists.map((i) => (
         <BuyItemMol {...i} key={i.id} />
       ))}
       
     </div>
    </div>
  );
}

export default Buy;

import React from "react";
import { Card_Img } from "../utility/constants";
import { useDispatch, useSelector } from "react-redux";
import { addItems } from "../utility/cartSlice";

const ItemListInAccordion = ({ items }) => {
  // console.log("ItemListInAccordion", items);
  // console.log("imge id: ", items[1].card.info.imageId);

  const dispatch = useDispatch();

  const handleCartItems = (item) => {
    dispatch(addItems(item))
  };

  return (
    <div>
      {items.map((item) => (
        <div key={item.card.info.id} className="p-2 m-2  border-b-2 text-left">
          <div className="flex justify-between">
            <div className="">
              <span className=" font-bold text-lg"> {item.card.info.name}</span>{" "}
              <br></br>
              <span className="font-bold">
                ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
              <p className="text-sm">{item.card.info.description}</p>
            </div>
            <div className="">
              <div className="absolute">
                <button
                  className="bg-black text-white shadow-lg mx-5 my-28 p-2 font-semibold text-sm rounded-lg mx-1/2 "
                  onClick={()=> handleCartItems(item)}
                >
                  Add +
                </button>
              </div>
              <img
                src={Card_Img + item.card.info.imageId}
                className="w-24 h-auto rounded-lg mt-2"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemListInAccordion;

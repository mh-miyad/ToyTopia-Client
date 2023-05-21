import React from "react";
import { FiTruck, RiMoneyDollarCircleLine,RiCustomerService2Fill ,BsFillGiftFill } from "react-icons/all";
const ServiceCard = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 flex-wrap">
        <div className="p-10 md:p-12 border-2 border-x-blue-500  bg-blue-100 rounded-xl text-center">
          <span>
            {" "}
            <FiTruck className="w-8 h-8 text-blue-500 mx-auto" />{" "}
          </span>
          <p className="text-xl text-blue-500 font-bold uppercase">
            Free Shipping{" "}
          </p>
          <span className="text-sm  uppercase"> On All Order </span>
        </div>
        <div className="p-10 md:p-12 border-2 border-y-green-500  bg-green-100 rounded-xl text-center">
          <span>
            {" "}
            <RiCustomerService2Fill className="w-8 h-8 text-green-700 mx-auto" />{" "}
          </span>
          <p className="text-xl text-green-500 font-bold uppercase">
            Customer Service  {" "}
          </p>
          <span className="text-sm  uppercase"> 24/7 Support System </span>
        </div>

        <div className="p-10 md:p-12 border-2 border-x-yellow-400  bg-yellow-50 rounded-xl text-center">
          <span>
            {" "}
            <RiMoneyDollarCircleLine className="w-8 h-8 text-yellow-300 mx-auto" />{" "}
          </span>
          <p className="text-xl text-yellow-300 font-bold uppercase">
            Refund {" "}
          </p>
          <span className="text-sm  uppercase"> 20 day refund policy </span>
        </div>

      

        <div className="p-10 md:p-12 border-2 border-y-pink-500  bg-pink-100 rounded-xl text-center">
          <span>
            {" "}
            <BsFillGiftFill className="w-8 h-8 text-pink-600 mx-auto" />{" "}
          </span>
          <p className="text-xl text-pink-500 font-bold uppercase">
            Gift Card  {" "}
          </p>
          <span className="text-sm  uppercase"> Available  In Different Amount  </span>
        </div>

      
      </div>
    </div>
  );
};

export default ServiceCard;

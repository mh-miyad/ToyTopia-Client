import React from "react";

import { Button, Rating } from "flowbite-react";
import { Link, useLoaderData } from "react-router-dom";

const ShowDetails = () => {
  const data = useLoaderData();

  const { image, _id, name, price, details, sellerName, sellerEmail, ratings } =
    data;

  return (
    <>
      <div>
        <div>
          <img src={image} alt="" className="mx-auto  h-72" />
        </div>

        <div className="text-center ">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-orange-500 ">
            {" "}
            Toy Name : {name}
          </h2>
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl my-5  font-bold  text-fuchsia-500 ">
            {" "}
            Seller Name : {sellerName}
          </h3>
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl my-5  font-bold  text-gray-500 ">
            {" "}
            Seller Email : {sellerEmail}{" "}
          </h3>
          <div className="space-y-10">
            <div className="my-5 text-xl md:text-4xl"> Price :${price}</div>
            <div className="my-5 text-xl md:text-4xl">
              {" "}
              Available Stock : 2000 pieces
            </div>
            <div className="flex justify-center">
              <span className="text-xl font-bold text-gray-600 uppercase font-mono">
                {" "}
                Ratings :{" "}
              </span>
              <Rating className="">
                <Rating.Star />
                <Rating.Star />
                <Rating.Star filled={ratings >= 3 ? true : false} />
                <Rating.Star filled={ratings >= 4 ? true : false} />
                <Rating.Star filled={ratings >= 5 ? true : false} />
                <p className="ml-2 text-md font-medium text-gray-500 dark:text-gray-400">
                  {ratings} out of 5
                </p>
              </Rating>
            </div>
          </div>
          <div className="text-sm text-justify md:text-2xl font-semibold text-gray-600  md:leading-8 my-5  shadow-lg p-10 md:tracking-wide flex justify-center">
            <p className="w-1/2"> {details}</p>
          </div>
        </div>
      </div>

      <Link to={"/"}>
        {" "}
        <Button color={"purple"} className="mx-auto mb-20">
          {" "}
          Return Home{" "}
        </Button>
      </Link>
    </>
  );
};

export default ShowDetails;

import { Button, Card, Rating } from "flowbite-react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthProvider } from "../../Auth/AuthContext";
const CardComp2 = ({name ,img, price , ratings , id}) => {
  return (
    <div>
      <div className="my-10 mx-7 " style={{ width: "18rem" }}>
        <Card imgSrc={img}>
          <h5 className="text-xl font-bold tracking-tighter text-gray-700 dark:text-white">
            Name : {name}
          </h5>

          <h5 className="text-2xl font-bold tracking-tight text-gray-700 gap-3 dark:text-white flex items-center">
            Price:<p className=" text-gray-600">$ {price}</p>
          </h5>
          <div>
            <Rating>
              <Rating.Star />
              <Rating.Star />
              <Rating.Star filled={ratings >= 3 ? true : false} />
              <Rating.Star filled={ratings >= 4 ? true : false} />
              <Rating.Star filled={ratings >= 5 ? true : false} />
              <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                {ratings} out of 5
              </p>
            </Rating>
          </div>
          <div className="flex  justify-around items-center">
            <Link to={`/showDetails/${id}`}>
              {" "}
              <Button color={"purple"}> View Details </Button>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CardComp2;

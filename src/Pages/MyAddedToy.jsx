import React, { useContext, useEffect, useState } from "react";

import { Button, Table } from "flowbite-react";
import TableRow from "../Components/table/TableRow";
import Swal from "sweetalert2";
import { AuthProvider } from "../Auth/AuthContext";
import {Helmet} from "react-helmet";
const MyAddedToy = () => {
  
  const { user } = useContext(AuthProvider);
  const [showHide, setShowHide] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {

  
       const url = `https://b7a11-toy-marketplace-server-side-mh-miyad.vercel.app/allmytoy?sellerEmail=${user.email}`;

       fetch(url)
       .then(res => res.json())
       .then(resData => setData(resData))
       console.log(user.email);
  }, [user]);
  const deleteData = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://b7a11-toy-marketplace-server-side-mh-miyad.vercel.app/allmytoy/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              const remaining = data.filter((booking) => booking._id !== id);
              setData(remaining);
            }
          });
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });

    
  };
 
  return (
    <div>
      <div>
        <Helmet>
          <title> This is My Added Toy page </title>
        </Helmet>
      </div>
      <div>
       
        <Table hoverable={true}>
          <Table.Head>
            <Table.HeadCell>Seller:</Table.HeadCell>
            <Table.HeadCell>Toy name</Table.HeadCell>
            <Table.HeadCell>Sub-category</Table.HeadCell>
            <Table.HeadCell>Price</Table.HeadCell>
            <Table.HeadCell>Available Quantity</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">View Button</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {data.slice(0, !showHide ? 10 : 1000).map((ele) => (
              <TableRow
                key={ele._id}
                data={ele}
                deleteData={deleteData}
                user={user}
              />
            ))}
            {!showHide ? (
              <Button
                onClick={() => setShowHide(true)}
                className="mx-auto my-5"
              >
                {" "}
                Show More{" "}
              </Button>
            ) : (
              <Button
                onClick={() => setShowHide(false)}
                className="mx-auto my-5"
              >
                {" "}
                Show Less{" "}
              </Button>
            )}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default MyAddedToy;

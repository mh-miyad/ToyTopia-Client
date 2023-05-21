import { Button, Dropdown, Modal, Table } from "flowbite-react";
import React, { useEffect, useState } from "react";
import TableRow from "./TableRow";
import Swal from "sweetalert2";
const TableCom = () => {
  const [showHide, setShowHide] = useState(true);

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      `https://b7a11-toy-marketplace-server-side-mh-miyad.vercel.app/allmytoy`
    )
      .then((res) => res.json())
      .then((resData) => setData(resData));
  }, []);
  // const deleteData = (id) => {
  //  Swal.fire({
  //     title: "Are you sure?",
  //     text: "You won't be able to revert this!",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Yes, delete it!",
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       fetch(
  //         `https://b7a11-toy-marketplace-server-side-mh-miyad.vercel.app/allmytoy/${id}`,
  //         {
  //           method: "DELETE",
  //         }
  //       )
  //         .then((res) => res.json())
  //         .then((data) => {
  //           console.log(data);
  //           if (data.deletedCount > 0) {
  //             const remaining = data.filter((booking) => booking._id !== id);
  //             setData(remaining);
  //           }
  //         });
  //       Swal.fire("Deleted!", "Your file has been deleted.", "success");
  //     }
  //   });
  // };
  const [searchText, setSearchText] = useState(null);
  const handlerSubmit = () => {
    fetch(
      `https://b7a11-toy-marketplace-server-side-mh-miyad.vercel.app/mytoys/${searchText}`
    )
      .then((response) => response.json())
      .then((resdata) => setData(resdata));
    setSearchText("");
  };
 const lowToHigh= ()=>{
  fetch(
    `https://b7a11-toy-marketplace-server-side-mh-miyad-mh-miyad.vercel.app/highttolow`
  )
    .then((response) => response.json())
    .then((resdata) => setData(resdata));
  
 }
 const highToLow= ()=>{
  fetch(
    `https://b7a11-toy-marketplace-server-side-mh-miyad-mh-miyad.vercel.app/lowtohigh`
  )
    .then((response) => response.json())
    .then((resdata) => setData(resdata));

 }

  return (
    <div>
      
      <div className="text-center mb-5">
        <input
          type="text"
          name="search"
          placeholder="search by Name "
          className="rounded-xl mx-2 py-3"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          type="submit "
          className="px-6 py-3  bg-red-500 text-white rounded-xl"
          onClick={handlerSubmit}
        >
          {" "}
          Search{" "}
        </button>
      </div>
      <Table hoverable={true}>
        <Table.Head>
          <Table.HeadCell>Seller:</Table.HeadCell>
          <Table.HeadCell>Toy name</Table.HeadCell>
          <Table.HeadCell>Sub-category</Table.HeadCell>
          <Table.HeadCell>
            <Dropdown label="Price" inline={true}>
              <Dropdown.Item onClick={highToLow}>High to Low Price</Dropdown.Item>
              <Dropdown.Item onClick={lowToHigh}>Low To high Price</Dropdown.Item>
            </Dropdown>
          </Table.HeadCell>
          <Table.HeadCell>Available Quantity</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">View Button</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {data.slice(0, !showHide ? 10 : 1000).map((ele) => (
            <TableRow key={ele._id} data={ele}  />
          ))}
          {!showHide ? (
            <Button onClick={() => setShowHide(true)} className="mx-auto my-5">
              {" "}
              Show More{" "}
            </Button>
          ) : (
            <Button onClick={() => setShowHide(false)} className="mx-auto my-5">
              {" "}
              Show Less{" "}
            </Button>
          )}
        </Table.Body>
      </Table>
    </div>
  );
};

export default TableCom;

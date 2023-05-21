import { Button, Label, Modal, Table, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const TableRow = ({ data, deleteData, user }) => {
  const { _id, name, sellerName, subcategory, price, quantity } = data;

  const [show, setShow] = useState(false);
  const [price1 ,setPrice] = useState(null);
  const [quantity1 ,setQuantity] = useState(null);
  const [details1 ,setDetails] = useState(null);
  const [id,setid] = useState(null);

  const updateForm = (event)=>{
    event.preventDefault();
     const newItems ={ price1, quantity1, details1};
     console.log(id,newItems);
     fetch(`http://localhost:5000/mytoyupdate/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newItems),
    })
      .then((res) => res.json())
      .then((resData) => {
        if (resData.modifiedCount > 0) {
          Swal.fire({
            title: "  Chocolate Information Add Successfully",
            text: "Do you want to continue",
            icon: "success",
            confirmButtonText: "Cool",
          });

          form.reset();
        }
      });

  }

  const onClick = () => {
    setShow(true);
  };
  
  const onClose = () => {
    setShow(false);
  };

  return (
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        {sellerName}
      </Table.Cell>

      <Table.Cell>{name}</Table.Cell>
      <Table.Cell>{subcategory}</Table.Cell>
      <Table.Cell>${price}</Table.Cell>
      <Table.Cell>{quantity}piece </Table.Cell>
      <Table.Cell> <Modal
    show={show}
    onClose={onClose}
  >
    <Modal.Header>
     You Can Update Your Toys Information 
    </Modal.Header>
    <Modal.Body>
      <form   onSubmit={updateForm}>
      <input className="my-5 w-full block p-2 rounded-lg border-2 border-blue-300 " placeholder=" Update Price" type="text" name="price" id="price" onChange={(e)=> setPrice(e.target.value) } />
      <input className="my-5 w-full block p-2 rounded-lg border-2 border-blue-300 " placeholder=" Update Available Stoke" type="text" name="quantity" id="quantity" onChange={(e)=> setQuantity(e.target.value) } />
      <input className="my-5 w-full block p-2 rounded-lg border-2 border-blue-300 " placeholder=" Update Description " type="text" name="details" id="details" onChange={(e)=> setDetails(e.target.value) } />

      <button type="submit" className="px-5 py-2 bg-blue-600 rounded-xl text-white" onClick={()=>setid(_id)} > Update</button>
 
      </form>
    </Modal.Body>
    <Modal.Footer>
     <button  className="px-5 py-2 bg-indigo-700 rounded-xl text-white"  onClick={onClose}> Close </button>
    </Modal.Footer>
  </Modal></Table.Cell>
      <Table.Cell>
        <div className="flex gap-3">
          {!user?.email ? (
            <Link to={`/showDetails/${_id}`}>
              {" "}
              <Button size={"sm"} color={"purple"}>
                {" "}
                View Details{" "}
              </Button>
            </Link>
          ) : (
            <Button size={"sm"} color={"purple"} onClick={onClick}>
              {" "}
              Update{" "}
            </Button>
          )}
          <Button size={"sm"} color={"failure"} onClick={() => deleteData(_id)}>
            {" "}
            Delete
          </Button>
        </div>
      </Table.Cell>
    </Table.Row>
  );
};

export default TableRow;

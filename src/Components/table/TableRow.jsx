import { Button, Label, Modal, Table, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
// import 'sweetalert2/src/sweetalert2.scss'
import { useForm } from "react-hook-form";
const TableRow = ({ data, user }) => {
  const { _id, name, sellerName, subcategory, price, quantity } = data;

  const [show, setShow] = useState(false);

  const [id, setid] = useState(null);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch(`https://b7a11-toy-marketplace-server-side-mh-miyad.vercel.app/mytoyupdate/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
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
        }
      });
  };
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
      <Table.Cell>
        {" "}
        <Modal show={show} onClose={onClose}>
          <Modal.Header>You Can Update Your Toys Information</Modal.Header>
          <Modal.Body>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-4"
            >
             <div>
            <label
              for="price"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Price{" "}
            </label>
            <input
              type="number"
              {...register("price", { required: true })}
              id="price"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="price"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Quantity
            </label>
            <input
              {...register("quantity", { required: true })}
              id="quantity"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Available Stock"
            />
          </div>
          <div className="mb-6">
          <label
            for="url"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Description{" "}
          </label>
          <TextInput {...register("details", { required: true })} />
        </div>

              <button
                type="submit"
                className="px-5 py-2 bg-blue-600 rounded-xl text-white"
                onClick={() => setid(_id)}
              >
                {" "}
                Update
              </button>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <button
              className="px-5 py-2 bg-indigo-700 rounded-xl text-white"
              onClick={onClose}
            >
              {" "}
              Close{" "}
            </button>
          </Modal.Footer>
        </Modal>
      </Table.Cell>
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

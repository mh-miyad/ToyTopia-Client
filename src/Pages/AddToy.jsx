import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Button, TextInput } from "flowbite-react";
import { AuthProvider } from "../Auth/AuthContext";
import {Helmet} from "react-helmet";
const AddToy = () => {
  const { user } = useContext(AuthProvider);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch(
      `https://b7a11-toy-marketplace-server-side-mh-miyad.vercel.app/allmytoy`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((res) => res.json())
      .then((resData) => console.log(resData));
  };
  return (
    <div>
      <div>
        <Helmet>
          <title> THis is  Add Toy page </title>
        </Helmet>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              for="toyName"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Toy Name{" "}
            </label>
            <input
              {...register("name", { required: true })}
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=" Name "
            />
          </div>
          <div>
            <label
              for="sellerName"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Seller Name{" "}
            </label>
            <input
              {...register("sellerName", { required: true })}
              id="sellerName"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=" Name "
            />
          </div>
          <div>
            <label
              for="sellerEmail"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Seller Email{" "}
            </label>
            <input
              {...register("sellerEmail", { required: true })}
              id="last_name"
              defaultValue={user?.email}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Doe"
            />
          </div>
          <div>
            <label
              for="subcategory"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Sub Category
            </label>
            <input
              {...register("subcategory", { required: true })}
              id="subcategory"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
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
          <div>
            <label
              for="ratings"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Ratings{" "}
            </label>
            <input
              {...register("ratings", { required: true })}
              id="ratings"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              min={0}
              max={5}
            />
          </div>
        </div>
        <div className="mb-6">
          <label
            for="url"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Photo Url
          </label>
          <input
            type="url"
            {...register("image", { required: true })}
            id="url"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="write only photo URL"
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

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default AddToy;

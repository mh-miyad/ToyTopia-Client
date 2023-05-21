import React, { useContext, useState } from "react";

import { Link } from "react-router-dom";
import Logo from '../../assets/logo.png'
import { AuthProvider } from "../../Auth/AuthContext";
import {Helmet} from "react-helmet";
const Register = () => {

  const { createUser, updateUser } = useContext(AuthProvider)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [errorMassage, setError] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault();
      setError("")
    if (!email || !password) {
      setError('Please enter your email and password');
      return;
    }
    else if (!photoUrl || !name) {
      setError('Please enter your Name  and PhotoUrl');
    }
    // Check if password is less than 6 characters
    if (password.length < 6) {
      setError('Password must be at least 6 characters');

      return;
    }
    createUser(email, password)
      .then((loadUser) => {
        const getUser = loadUser.user
        const getUpdateUser = updateUser(name, photoUrl)
        getUser.getUpdateUser;
        setEmail("");
        setPassword("")
        setPhotoUrl("")
        setName("");
      })
      .catch((error) => {
        console.log(error);
        setError(error)
      })
  }

  return (
    <div>
      <div> <Helmet>
        <title> This Register Page </title>
        </Helmet></div>
      <div>
        <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
          <div className="border p-3 rounded-xl shadow-lg">
          <img src={Logo} alt="" className="h-40" />
          </div>
          <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
            <form>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 undefined"
                >
                  Name
                </label>
                <div className="flex flex-col items-start">
                  <input
                    type="text"
                    name="name"
                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              <div className="mt-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 undefined"
                >
                  Email
                </label>
                <div className="flex flex-col items-start">
                  <input
                    type="email"
                    name="email"
                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="mt-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 undefined"
                >
                  Password
                </label>
                <div className="flex flex-col items-start">
                  <input
                    type="password"
                    name="password"
                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <div className="mt-4">
                <div>
                  <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input"> Photo URL</label>
                  <input class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" id="text" type="text" value={photoUrl} onChange={(e) => setPhotoUrl(e.target.value)} />
                </div>
                <div className="text-red-500 text-md my-2 text-start">
                  {errorMassage}
                </div>
              </div>
              <a href="#" className="text-xs text-purple-600 hover:underline">
                Forget Password?
              </a>
              <div className="flex items-center mt-4">
                <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600" type="submit" onClick={handleSubmit}>
                  Register
                </button>
              </div>
            </form>
            <div className="mt-4 text-grey-600">
              Already have an account?{" "}
              <span>
                <a className="text-purple-600 hover:underline" href="#">
                 <Link to={'/login'}> Log in</Link>
                </a>
              </span>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
};
export default Register
import { Button } from 'flowbite-react'
import React, { useContext, useState } from 'react'

import { FcGoogle } from 'react-icons/fc'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthProvider } from '../../Auth/AuthContext'
import { toast } from 'react-toastify'


const LogIng = () => {
  
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorMassage, setError] = useState(null)
  const { login, googleSignIn } = useContext(AuthProvider)
  const location = useLocation();
  const navigate = useNavigate()
  const from = location.state?.from?.pathname || '/'
  
  const googleHandler = () => {
    googleSignIn()
      .then((result) => {
        console.log(result);
      }).catch((error) => {
        setError(error)
        console.log(error);
      })
  }
  const handleSubmit = (event) =>{
    event.preventDefault();
    setError("")
    // Check if email and password fields are empty
    if (!email || !password) {
      setError('Please enter your email and password');

      return;
    }

    // Check if password is less than 6 characters
    if (password.length < 6) {
      setError('Password must be at least 6 characters');

      return
  }

login(email, password)
.then((result) => {
  const loggedUser = result.user;
  if (loggedUser) {
    toast('Sign In Successful');
    navigate(from);
    setEmail('');
    setPassword('');
  } else {
    toast('Please Log In');
  }
})
.catch((error) => {
  setError(error.message);
});

setEmail("")
setPassword("")
}
  return (
    <div>
      <div>

<div className=''>
  <form className="flex flex-col items-center justify-center h-screen mx-10 ">
    <div className='flex flex-col items-center justify-center   md:border-4 border-blue-400 p-10 rounded-xl
  shadow-2xl shadow-blue-600/30'>
      <h2 className="text-2xl md:text-4xl my-5 uppercase bg-purple-100 rounded  px-10 py-3">
        {" "}
        Please Log In{" "}
      </h2>

      <input
        className="mb-4 px-4 py-2 border border-gray-400 rounded-lg outline-none w-80"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <input
        className="mb-4 px-4 py-2 border border-gray-400 rounded-lg outline-none w-80"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <div className='text-red-500 text-md my-2 text-start'>
        {errorMassage}
      </div>
      <div class="flex items-center justify-between my-5">
        <div class="flex items-start">
          <div class="flex items-center h-5">
            <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
          </div>
          <div class="ml-3 text-sm">
            <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
          </div>
        </div>
        <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
      </div>
      <Button
        className="mb-4 px-10  bg-gradient-to-br from-blue-500 via-purple-500 to-pink-400 "
        onClick={handleSubmit}
        variant="contained"
      >
        Log In
      </Button>


      <div className="my-6 space-y-2">
        <button 
        onClick={googleHandler}
          aria-label="Login with Google"
          type="button"
          className="flex items-center justify-center w-full p-2 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400"
        >
          <FcGoogle />
          <p >Login with Google</p>
        </button>
    
      
      </div>
      <div className='my-5'>
        <p class="text-md font-light text-gray-500 dark:text-gray-400">
          Don’t have an account yet? <Link to={'/register'} class="mx-1 text-blue-600 font-bold hover:underline dark:text-primary-500"> Register</Link>
        </p>
      </div>
    </div>
  </form>
</div>



</div>
    </div>
  )
}

export default LogIng
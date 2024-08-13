import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import GenderCheckBox from "../components/genderCheckBox";


function SignUp() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 border-2 border-success'>
        <h1 className='text-3x1 font-semibold text-center text-slate-500'>
          Sign up
          <span> ChatApp</span>
        </h1>
        <form>
          <div>
            <label className="label p-2">
              <span className="label-text text-base">Full name</span>
            </label>
            <input
              type="text"
              placeholder="enter full name"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="label-text text-base">Username</span>
            </label>
            <input
              type="text"
              placeholder="enter username"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="label-text text-base">Password</span>
            </label>
            <div className="relative flex items-center">
              <input
                type={passwordVisible ? "text" : "password"}
                placeholder="enter password"
                className="w-full input input-bordered h-10 pr-10"
              />
              <button
                type="button"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
                onClick={togglePasswordVisibility}
              >
                {passwordVisible ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <GenderCheckBox/>
   
            <div>
              <button className="btn btn-block btn-sm mt-3 hover:text-success text-md">Sign up</button>
              <a href="" className="text-sm hover:text-success hover:underline mt-2">Already have an account ? Log in now</a>
            </div>

            


          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp

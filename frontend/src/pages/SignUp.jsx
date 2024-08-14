import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useSignup from "../hooks/useSignup";



function SignUp() {
  const [passwordVisible, setPasswordVisible] = useState(false);



  const [input, setInput] = useState({
    fullName: "",
    userName: "",
    password: "",
    confirmPassword: "",
    gender: ""
  })

  const { loading, signup } = useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(input)
    signup(input)
  }

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
        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="label-text text-base">Full name</span>
            </label>
            <input
              type="text"
              placeholder="enter full name"
              className="w-full input input-bordered h-10"
              required
              value={input.fullName}
              onChange={(e) => setInput({ ...input, fullName: e.target.value })}
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
              required
              value={input.userName}
              onChange={(e) => setInput({ ...input, userName: e.target.value })}
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
                required
                value={input.password}
                onChange={(e) => setInput({ ...input, password: e.target.value })}
              />
              <button
                type="button"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
                onClick={togglePasswordVisibility}
              >
                {passwordVisible ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

          </div>
          <div>
            <label className="label p-2">
              <span className="label-text text-base">Confirm Password</span>
            </label>
            <div className="relative flex items-center">
              <input
                type={passwordVisible ? "text" : "password"}
                placeholder="enter password"
                className="w-full input input-bordered h-10 pr-10"
                required
                value={input.confirmPassword}
                onChange={(e) => setInput({ ...input, confirmPassword: e.target.value })}
              />
              <button
                type="button"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
                onClick={togglePasswordVisibility}
              >
                {passwordVisible ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

          </div>

          {/* <GenderCheckBox input={input} setInput={setInput} /> */}

          <div className='flex'>
            <div className='form-control'>
              <label className={`label gap-2 cursor-pointer text-success`}>
                <span className='label-text'>Male</span>
                <input type='radio' className="checkbox border border-success"
                  checked={input.gender === "male"}
                  required
                  onChange={() => setInput({ ...input, gender: "male" })}

                />
              </label>
            </div>
            <div className='form-control'>
              <label className={`label gap-2 cursor-pointer`}>
                <span className='label-text'>Female</span>
                <input type='radio' className='checkbox border border-success'
                  checked={input.gender === "female"}
                  required
                  onChange={() => setInput({ ...input, gender: "female" })}
                />
              </label>
            </div>
          </div>

          <div>
            {loading ? <div className='loading loading-spinner'></div> : <button type="submit" className="btn btn-block btn-sm mt-3 hover:text-success text-md">Sign up</button>}
            <a href="/login" className="text-sm hover:text-success hover:underline mt-2">Already have an account ? Log in now</a>
          </div>




        </form>
      </div>
    </div>
  );
}

export default SignUp

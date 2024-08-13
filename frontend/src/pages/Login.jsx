import  { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 border-2 border-success'>
                <h1 className='text-3x1 font-semibold text-center text-slate-500'>
                    Login
                    <span> ChatApp</span>
                </h1>
                <form>
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
                        <div>
                            <button className="btn btn-block btn-sm mt-2">Login</button>
                            <a href="" className="text-sm hover:text-success hover:underline mt-2">Dont have an account ? sign up now</a>
                        </div>


                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;

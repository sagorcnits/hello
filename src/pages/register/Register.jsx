import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import loginImg from "../../assets/images/login/login.svg";
const Register = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-10 mt-10 text-[#444]">
      <div className="flex-1">
        <img className="md:w-[60%] mx-auto" src={loginImg} alt="" />
      </div>
      <div className="flex-1">
        <form className=" md:w-[80%] mx-auto font-Inter border p-6 rounded-lg">
          <h1 className="text-center font-bold font-Inter text-[30px]">
            Sign Up
          </h1>
          <div>
            <label className="font-bold">Name:</label>
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full  mt-4"
            />
          </div>
          <div className="mt-4">
            <label className="font-bold">Email:</label>
            <input
              type="text"
              placeholder="Your Email"
              className="input input-bordered w-full  mt-4"
            />
          </div>
          <div className="mt-4">
            <label className="font-bold">Password</label>
            <input
              type="password"
              placeholder="******"
              className="input input-bordered w-full mt-4"
            />
          </div>
          <button className="button bg-[#FF3811] text-white hover:bg-black duration-500 w-full mt-10">
            Register An Acount
          </button>
          <div className="divider">Or Sign Up with</div>
          <div className="flex items-center justify-center gap-4">
            <div className="size-[50px] rounded-full bg-[#cdcdce] border flex justify-center items-center cursor-pointer text-[17px]">
              <FaFacebookF></FaFacebookF>
            </div>
            <div className="size-[50px] rounded-full bg-[#cdcdce] border flex justify-center items-center cursor-pointer text-[17px]">
              <FaLinkedinIn></FaLinkedinIn>
            </div>
            <div className="size-[50px] rounded-full bg-[#cdcdce] border flex justify-center items-center cursor-pointer text-[17px]">
              <FcGoogle></FcGoogle>
            </div>
          </div>
          <p className="text-center py-5">
          Already have an account??{" "}
            <Link to="/dashboard/login" className="text-red-500 font-semibold">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;

import SideImage from '../../../assets/Side Image.png';
import Google from '../../../assets/Icon-Google.png';
import { NavLink } from 'react-router';

function LoginForm() {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-center items-center my-12 px-4 lg:px-0 gap-10">
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={SideImage}
            alt="Picture of MobilePhone with Shopping Cart"
            className="rounded w-3/4 lg:w-full"
          />
        </div>

        <div className="w-full lg:w-1/2 max-w-md">
          <h1 className="text-3xl font-bold mb-4 text-center lg:text-left">Log In to Exclusive</h1>
          <p className="text-lg text-gray-500 mb-6 text-center lg:text-left">
            Enter your details below
          </p>
          <form className="flex flex-col gap-4">
            <input
              type="tel"
              placeholder="Email or Phone Number"
              className="border-b-2 border-gray-400 outline-none px-2 py-2 w-full focus:border-black"
            />
            <input
              type="password"
              placeholder="Password"
              className="border-b-2 border-gray-400 outline-none px-2 py-2 w-full focus:border-black"
            />
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-4">
              <button className="bg-danger text-white px-4 py-2 rounded-xl w-full sm:w-auto hover:bg-red-600 transition duration-300">
                Log In
              </button>
              <p className="text-red-500 cursor-pointer hover:underline text-center sm:text-left">
                Forgot Password?
              </p>
            </div>
            <p className="text-center text-red-700">
              Don't have an Account?{' '}
              <NavLink to="/signUp" className="text-blue-500 hover:underline">
                Sign Up
              </NavLink>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginForm;

import SideImage from '../../assets/Side Image.png';
import Google from '../../assets/Icon-Google.png';
import { NavLink } from 'react-router';

function SignUp() {
  function handleData(event) {
    event.preventDefault();
    console.log('Hello, Muhammad Hussnain Ashiq');
  }

  return (
    <>
      <div className="flex flex-col lg:flex-row justify-center  items-center my-12 px-4 lg:px-0 gap-10">
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={SideImage}
            alt="Picture of MobilePhone with Shopping Cart"
            className="rounded w-3/4 lg:w-full"
          />
        </div>

        <div className="w-full lg:w-1/2 max-w-md">
          <h1 className="text-3xl font-bold mb-4 text-center lg:text-left">Create an Account</h1>
          <p className="text-lg text-gray-500 mb-6 text-center lg:text-left">
            Enter your details below
          </p>
          <form action="" className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Name"
              className="border-b-2 border-gray-400 outline-none px-2 py-2 w-full focus:border-black"
            />
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
            <button
              onClick={handleData}
              className="bg-danger w-full text-center text-white cursor-pointer px-4 py-2 rounded-xl hover:bg-red-600 transition duration-300"
            >
              Create an Account
            </button>

            <button className="w-full flex gap-2 justify-center items-center cursor-pointer px-4 py-2 rounded-xl border border-gray-400 hover:bg-gray-100 transition duration-300">
              <img src={Google} alt="Picture of Google Icon" className="w-6 h-6" />
              <p>Sign up with Google</p>
            </button>

            <p className="text-center">
              Already have an Account?{' '}
              <NavLink to="/login" className="text-blue-500 hover:underline">
                Login
              </NavLink>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUp;

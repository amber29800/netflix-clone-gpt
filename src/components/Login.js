import { useRef, useState } from "react";
import Header from "./Header";
import validateFormData from "../utils/validate";

const Login = () => {
  const [isSignIn, setIsSignin] = useState(true);
  const [formValidationMessage, setFormValidationMessage] = useState(null);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const toggleAuthenticationOptions = () => {
    setIsSignin(!isSignIn);
  };

  const handleFormData = () => {
    const message = validateFormData(emailRef.current.value, passwordRef.current.value);
    setFormValidationMessage(message);
  }

  return (
    <div>
      <Header />
      <div>
        <img
          className="absolute w-full h-screen"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/dace47b4-a5cb-4368-80fe-c26f3e77d540/f5b52435-458f-498f-9d1d-ccd4f1af9913/IN-en-20231023-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bg-netflix-img"
        />{" "}
      </div>
      <div>
        <form onSubmit={(e) => e.preventDefault()} className="absolute bg-black bg-opacity-90 w-3/12 p-12 my-24 mx-auto right-0 left-0 text-white rounded-lg">
          <h1 className="font-semibold text-3xl">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignIn && (
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 my-4 bg-[#333333] rounded-lg focus:outline-none"
            />
          )}
          <input
            ref={emailRef}
            type="text"
            placeholder="Email Address"
            className="w-full p-3 my-4 bg-[#333333] rounded-lg focus:outline-none"
          />
          <input
            ref={passwordRef}
            type="password"
            placeholder="Password"
            className="w-full p-3 my-4 bg-[#333333] rounded-lg focus:outline-none"
          />
          <p className="text-red-600 font-semibold">{formValidationMessage}</p>
          <button className="w-full p-3 my-6 bg-red-700 rounded-lg" onClick={handleFormData}>
            Sign In
          </button>
          <div className="w-full flex justify-between text-gray-400 text-[13px]">
            <div className="flex">
              <input type="checkbox" className="w-4 h-4" />
              <p className="pl-[2px]">Remember Me</p>
            </div>
            <p className="">Need help?</p>
          </div>
          <div className="py-2">
            <p
              className="text-gray-400 py-2 cursor-pointer"
              onClick={toggleAuthenticationOptions}
            >
              {isSignIn
                ? "New to Netfix? Sign Up now"
                : "Already a user? Sign In here"}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

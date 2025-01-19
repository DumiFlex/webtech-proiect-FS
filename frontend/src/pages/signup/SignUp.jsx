import React from "react";
import GenderCheckBox from "./GenderCheckBox.jsx";

function SignUp() {
  return (
    <div className="p-4 h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center min-w-96 max-auto">
        <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
          <h1 className="text-3xl font-semibold text-center text-gray-200">
            SignUp
            <span className="text-yellow-500"> FeedSync</span>
          </h1>

          <form>
            <div>
              <label className="label p-2">
                <span className="text-base label-text text-gray-200">
                  First Name
                </span>
              </label>
              <input
                type="text"
                placeholder="John"
                className="w-full input input-bordered h-10"
              />
            </div>
            <div>
              <label className="label">
                <span className="text-base label-text text-gray-200">
                  Last Name
                </span>
              </label>
              <input
                type="text"
                placeholder="Doe"
                className="w-full input input-bordered h-10"
              />
            </div>
            <div>
              <label className="label">
                <span className="text-base label-text text-gray-200">
                  Username
                </span>
              </label>
              <input
                type="text"
                placeholder="john_doe"
                className="w-full input input-bordered h-10"
              />
            </div>
            <div>
              <label className="label">
                <span className="text-base label-text text-gray-200">
                  Password
                </span>
              </label>
              <input
                type="password"
                placeholder="Enter password"
                className="w-full input input-bordered h-10"
              />
              <input
                type="password"
                placeholder="Confirm password"
                className="w-full input input-bordered h-10 mt-2"
              />
            </div>
            <GenderCheckBox />
            <a
              href="#"
              className="text-sm text-gray-400 hover:underline hover:text-yellow-500 mt-2 inline-block"
            >
              Already have an account?
            </a>
            <div>
              <button className="btn btn-block btn-sm mt-2 border border-slate-700">
                SignUp
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;

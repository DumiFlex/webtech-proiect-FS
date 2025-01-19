import React from "react";

function Login() {
  return (
    <div className="p-4 h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
        <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
          <h1 className="text-3xl font-semibold text-center text-gray-200">
            Login
            <span className="text-yellow-500"> FeedSync</span>
          </h1>

          <form>
            <div>
              <label className="label p-2">
                <span className="text-base label-text text-gray-200">
                  Username
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter username"
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
            </div>
            <a
              href="#"
              className="text-sm text-gray-400 hover:underline hover:text-yellow-500 mt-2 inline-block"
            >
              Don't have an account?
            </a>
            <div>
              <button className="btn btn-block btn-sm mt-2 border border-slate-700">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

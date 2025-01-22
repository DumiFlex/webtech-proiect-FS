import React from "react";

const ForgotPassword = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center min-w-96 mx-auto rounded-md">
        <div className="w-full p-6 bg-black/20 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg border border-accent/30">
          <h1 className="text-3xl font-semi-bold text-center mb-2 text-gray-300">
            <span className="text-accent">FeedSync</span> Password Reset
          </h1>
          <div className="mb-4 text-center">
            <h2 className="text-2xl font-semi-bold text-center text-gray-300">
              Forgot Password?
            </h2>
            <span className="text-sm text-gray-300 text-center">
              Remember your password?{" "}
              <a href="#" className="link link-accent">
                Login here
              </a>
            </span>
          </div>
          <form>
            <div className="mb-2">
              <label className="input input-accent validator opacity-80 w-full">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </g>
                </svg>
                <input
                  type="input"
                  required
                  placeholder="Username"
                  pattern="[A-Za-z][A-Za-z0-9\-]*"
                  minlength="8"
                  maxlength="30"
                  title="Only letters and numbers"
                />
              </label>
            </div>
            <div>
              <button className="btn btn-accent w-full mt-2">
                Reset Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;

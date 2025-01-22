import React from "react";

const ResetPassword = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center min-w-96 mx-auto rounded-md">
        <div className="w-full p-6 bg-black/20 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg border border-accent/30">
          <h1 className="text-3xl font-semi-bold text-center mb-2 text-gray-300">
            <span className="text-accent">FeedSync</span> Password Reset
          </h1>
          <div className="mb-4 text-center flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-emoji-expressionless-fill mr-2 text-accent"
              viewBox="0 0 16 16"
            >
              <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M4.5 6h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1m5 0h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1m-5 4h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1" />
            </svg>
            <h2 className="text-md font-semi-bold text-center text-gray-300">
              Forgot your super-secure password? Even{" "}
              <a
                href="https://en.wikipedia.org/wiki/Albert_Einstein"
                target="_blank"
                className="link hover:text-accent"
              >
                Einstein
              </a>{" "}
              took notes, you know!
            </h2>
          </div>
          <form>
            <div className="justify-between flex items-center mb-4 w-full">
              <div className="inline-block w-[calc(50%-0.5rem)] mr-2">
                <label className="input input-accent validator opacity-80">
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
                      <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                      <circle
                        cx="16.5"
                        cy="7.5"
                        r=".5"
                        fill="currentColor"
                      ></circle>
                    </g>
                  </svg>
                  <input
                    type="password"
                    required
                    placeholder="New Password"
                    minlength="8"
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                  />
                </label>
              </div>
              <div className="inline-block w-[calc(50%-0.5rem)]">
                <label className="input input-accent validator opacity-80">
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
                      <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                      <circle
                        cx="16.5"
                        cy="7.5"
                        r=".5"
                        fill="currentColor"
                      ></circle>
                    </g>
                  </svg>
                  <input
                    type="password"
                    required
                    placeholder="Confirm Password"
                    minlength="8"
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                  />
                </label>
              </div>
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

export default ResetPassword;

import React from "react";

const SignUp = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
        <div className="w-full p-6 bg-black/20 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg border border-accent/30">
          <h1 className="text-3xl font-semi-bold text-center text-gray-300 mb-4">
            SignUp to
            <span className="text-accent"> FeedSync</span>
          </h1>
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
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </g>
                  </svg>
                  <input
                    type="input"
                    required
                    placeholder="First Name"
                    pattern="[A-Za-z][A-Za-z0-9\-]*"
                    minlength="8"
                    maxlength="30"
                    title="Only letters and numbers"
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
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </g>
                  </svg>
                  <input
                    type="input"
                    required
                    placeholder="Last Name"
                    pattern="[A-Za-z][A-Za-z0-9\-]*"
                    minlength="8"
                    maxlength="30"
                    title="Only letters and numbers"
                  />
                </label>
              </div>
            </div>
            <div className="mb-4">
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
            <div className="mb-4">
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
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </g>
                </svg>
                <input
                  type="email"
                  placeholder="johndoe@stud.ase.ro"
                  required
                />
              </label>
              <div className="validator-hint hidden">
                Enter valid email address
              </div>
            </div>
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
                    placeholder="Password"
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
            <div className="justify-between flex items-center w-full">
              <div className="flex items-center space-x-4">
                <label className="cursor-pointer flex items-center space-x-2">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    className="radio bg-blue-100 border-accent checked:bg-blue-200 checked:text-blue-400 checked:border-accent"
                    required
                  />
                  <span className="label-text text-gray-300">Male</span>
                </label>
                <label className="cursor-pointer flex items-center space-x-2">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    className="radio bg-pink-100 border-accent checked:bg-pink-200 checked:text-pink-400 checked:border-accent"
                    required
                  />
                  <span className="label-text text-gray-300">Female</span>
                </label>
              </div>
              <div>
                <a
                  href="#"
                  className="text-md link link-accent opacity-80 inline-block"
                >
                  Have an account? Login
                </a>
              </div>
            </div>
            <div>
              <button className="btn btn-accent w-full mt-4">SignUp</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

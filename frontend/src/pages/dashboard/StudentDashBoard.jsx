import React from "react";
import NavBar from "../../components/NavBar.jsx";

const StudentDashBoard = () => {
  return (
    <>
      <NavBar />
      <div className="z-0 inline-flex w-full h-screen p-4 space-x-2">
        <div className="flex flex-col">
          <div className="flex flex-col p-2 mb-2 bg-black/20 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg border border-accent/30">
            <div className="flex items-center justify-between border-b border-accent/30 pb-2">
              <h1 className="font-bold justify-start">Active Activites</h1>
              <label className="input input-sm bg-neutral/0 justify-center input-accent border border-accent/30">
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
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </g>
                </svg>
                <input type="search" required placeholder="Search" />
              </label>
              <button className="btn btn-sm btn-outline btn-accent border border-accent/30 justify-end">
                Create
              </button>
            </div>
            <div className="grid grid-cols-4 grid-rows-2 gap-2 flex-grow space-y-2 p-2 overflow-y-auto">
              <div className="card card-xs bg-accent text-primary-content card-border border-accent/30 hover:border-accent">
                <button className="btn btn-ghost w-full h-full flex-col bg-transparent border-none shadow-none py-1">
                  <div className="card-body">
                    <h2 className="card-title">Card title!</h2>
                    <p>
                      A card component has a figure, a body part, and inside
                      body there are title and actions parts
                    </p>
                  </div>
                  <div className="badge badge.xs text-xs bg-base-100/50">
                    <svg
                      className="size-[1em]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="currentColor"
                        strokeLinejoin="miter"
                        strokeLinecap="butt"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="square"
                          stroke-miterlimit="10"
                          strokeWidth="2"
                        ></circle>
                        <path
                          d="m12,17v-5.5c0-.276-.224-.5-.5-.5h-1.5"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="square"
                          stroke-miterlimit="10"
                          strokeWidth="2"
                        ></path>
                        <circle
                          cx="12"
                          cy="7.25"
                          r="1.25"
                          fill="currentColor"
                          strokeWidth="2"
                        ></circle>
                      </g>
                    </svg>
                    Dead Line: 12/12/2022 12:00
                  </div>
                </button>
              </div>
              <div className="card card-xs bg-secondary/50 text-primary-content card-border border-accent/30 hover:border-accent">
                <button className="btn btn-ghost w-full h-full bg-transparent border-none shadow-none">
                  <div className="card-body">
                    <h2 className="card-title">Card title!</h2>
                    <p>
                      A card component has a figure, a body part, and inside
                      body there are title and actions parts
                    </p>
                  </div>
                </button>
              </div>
              <div className="card card-xs bg-primary text-primary-content card-border border-accent/30 hover:border-accent">
                <button className="btn btn-ghost w-full h-full bg-transparent border-none shadow-none">
                  <div className="card-body">
                    <h2 className="card-title">Card title!</h2>
                    <p>
                      A card component has a figure, a body part, and inside
                      body there are title and actions parts
                    </p>
                  </div>
                </button>
              </div>
              <div className="card card-xs bg-primary text-primary-content card-border border-accent/30 hover:border-accent">
                <button className="btn btn-ghost w-full h-full bg-transparent border-none shadow-none">
                  <div className="card-body">
                    <h2 className="card-title">Card title!</h2>
                    <p>
                      A card component has a figure, a body part, and inside
                      body there are title and actions parts
                    </p>
                  </div>
                </button>
              </div>
              <div className="card card-xs bg-primary text-primary-content card-border border-accent/30 hover:border-accent">
                <button className="btn btn-ghost w-full h-full bg-transparent border-none shadow-none">
                  <div className="card-body">
                    <h2 className="card-title">Card title!</h2>
                    <p>
                      A card component has a figure, a body part, and inside
                      body there are title and actions parts
                    </p>
                  </div>
                </button>
              </div>
              <div className="card card-xs bg-primary text-primary-content card-border border-accent/30 hover:border-accent">
                <button className="btn btn-ghost w-full h-full bg-transparent border-none shadow-none">
                  <div className="card-body">
                    <h2 className="card-title">Card title!</h2>
                    <p>
                      A card component has a figure, a body part, and inside
                      body there are title and actions parts
                    </p>
                  </div>
                </button>
              </div>
            </div>
            <div className="flex items-center justify-center border-t border-accent/30 pt-2">
              <div className="join">
                <button className="join-item text-white/50 border border-accent/30 btn bg-neutral/0 btn-xs">
                  «
                </button>
                <button className="join-item text-white/50 border border-accent/30 btn bg-neutral/0 btn-xs">
                  1
                </button>
                <button className="join-item text-white/50 border border-accent/30 btn bg-neutral/0 btn-xs">
                  2
                </button>
                <button className="join-item text-white/50 border border-accent/30 btn bg-neutral/0 btn-xs btn-disabled">
                  ...
                </button>
                <button className="join-item text-white/50 border border-accent/30 btn bg-neutral/0 btn-xs">
                  99
                </button>
                <button className="join-item text-white/50 border border-accent/30 btn bg-neutral/0 btn-xs">
                  100
                </button>
                <button className="join-item text-white/50 border border-accent/30 btn bg-neutral/0 btn-xs">
                  »
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col p-2 bg-black/20 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg border border-accent/30">
            <div className="flex items-center justify-between border-b border-accent/30 pb-2">
              <h1 className="font-bold justify-start">Completed Activites</h1>
              <label className="input input-sm bg-neutral/0 justify-center input-accent border border-accent/30">
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
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </g>
                </svg>
                <input type="search" required placeholder="Search" />
              </label>
              <button className="btn btn-sm btn-outline btn-accent border border-accent/30 justify-end">
                Create
              </button>
            </div>
            <div className="overflow-y-auto">
              <div className="grid grid-cols-4 grid-rows-2 gap-2 flex-grow space-y-2 p-2 overflow-y-auto">
                <div className="card card-xs bg-accent text-primary-content card-border border-accent/30 hover:border-accent">
                  <button className="btn btn-ghost w-full h-full flex-col bg-transparent border-none shadow-none py-1">
                    <div className="card-body">
                      <h2 className="card-title">Card title!</h2>
                      <p>
                        A card component has a figure, a body part, and inside
                        body there are title and actions parts
                      </p>
                    </div>
                    <div className="badge badge.xs text-xs bg-base-100/50">
                      <svg
                        className="size-[1em]"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="currentColor"
                          strokeLinejoin="miter"
                          strokeLinecap="butt"
                        >
                          <circle
                            cx="12"
                            cy="12"
                            r="10"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="square"
                            stroke-miterlimit="10"
                            strokeWidth="2"
                          ></circle>
                          <path
                            d="m12,17v-5.5c0-.276-.224-.5-.5-.5h-1.5"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="square"
                            stroke-miterlimit="10"
                            strokeWidth="2"
                          ></path>
                          <circle
                            cx="12"
                            cy="7.25"
                            r="1.25"
                            fill="currentColor"
                            strokeWidth="2"
                          ></circle>
                        </g>
                      </svg>
                      Dead Line: 12/12/2022 12:00
                    </div>
                  </button>
                </div>
                <div className="card card-xs bg-secondary/50 text-primary-content card-border border-accent/30 hover:border-accent">
                  <button className="btn btn-ghost w-full h-full bg-transparent border-none shadow-none">
                    <div className="card-body">
                      <h2 className="card-title">Card title!</h2>
                      <p>
                        A card component has a figure, a body part, and inside
                        body there are title and actions parts
                      </p>
                    </div>
                  </button>
                </div>
                <div className="card card-xs bg-primary text-primary-content card-border border-accent/30 hover:border-accent">
                  <button className="btn btn-ghost w-full h-full bg-transparent border-none shadow-none">
                    <div className="card-body">
                      <h2 className="card-title">Card title!</h2>
                      <p>
                        A card component has a figure, a body part, and inside
                        body there are title and actions parts
                      </p>
                    </div>
                  </button>
                </div>
                <div className="card card-xs bg-primary text-primary-content card-border border-accent/30 hover:border-accent">
                  <button className="btn btn-ghost w-full h-full bg-transparent border-none shadow-none">
                    <div className="card-body">
                      <h2 className="card-title">Card title!</h2>
                      <p>
                        A card component has a figure, a body part, and inside
                        body there are title and actions parts
                      </p>
                    </div>
                  </button>
                </div>
                <div className="card card-xs bg-primary text-primary-content card-border border-accent/30 hover:border-accent">
                  <button className="btn btn-ghost w-full h-full bg-transparent border-none shadow-none">
                    <div className="card-body">
                      <h2 className="card-title">Card title!</h2>
                      <p>
                        A card component has a figure, a body part, and inside
                        body there are title and actions parts
                      </p>
                    </div>
                  </button>
                </div>
                <div className="card card-xs bg-primary text-primary-content card-border border-accent/30 hover:border-accent">
                  <button className="btn btn-ghost w-full h-full bg-transparent border-none shadow-none">
                    <div className="card-body">
                      <h2 className="card-title">Card title!</h2>
                      <p>
                        A card component has a figure, a body part, and inside
                        body there are title and actions parts
                      </p>
                    </div>
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-center border-t border-accent/30 pt-2">
                <div className="join">
                  <button className="join-item text-white/50 border border-accent/30 btn bg-neutral/0 btn-xs">
                    «
                  </button>
                  <button className="join-item text-white/50 border border-accent/30 btn bg-neutral/0 btn-xs">
                    1
                  </button>
                  <button className="join-item text-white/50 border border-accent/30 btn bg-neutral/0 btn-xs">
                    2
                  </button>
                  <button className="join-item text-white/50 border border-accent/30 btn bg-neutral/0 btn-xs btn-disabled">
                    ...
                  </button>
                  <button className="join-item text-white/50 border border-accent/30 btn bg-neutral/0 btn-xs">
                    99
                  </button>
                  <button className="join-item text-white/50 border border-accent/30 btn bg-neutral/0 btn-xs">
                    100
                  </button>
                  <button className="join-item text-white/50 border border-accent/30 btn bg-neutral/0 btn-xs">
                    »
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-h-[80vh] flex flex-col p-2 bg-black/20 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg border border-accent/30">
          <div className="flex items-center justify-between border-b border-accent/30 pb-2">
            <h1 className="font-bold justify-start">Upcoming Activites</h1>
            <label className="input input-sm bg-neutral/0 justify-center input-accent border border-accent/30">
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
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input type="search" required placeholder="Search" />
            </label>
            <button className="btn btn-sm btn-outline btn-accent border border-accent/30 justify-end">
              Create
            </button>
          </div>
          <div className="grid grid-cols-1 grid-row-6 gap-2 flex-grow space-y-2 p-2 overflow-y-auto">
            <div className="card card-xs bg-accent text-primary-content card-border border-accent/30 hover:border-accent">
              <button className="btn btn-ghost w-full h-full flex-col bg-transparent border-none shadow-none py-1">
                <div className="card-body">
                  <h2 className="card-title">Card title!</h2>
                  <p>
                    A card component has a figure, a body part, and inside body
                    there are title and actions parts
                  </p>
                </div>
                <div className="badge badge.xs text-xs bg-base-100/50">
                  <svg
                    className="size-[1em]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="currentColor"
                      strokeLinejoin="miter"
                      strokeLinecap="butt"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="square"
                        stroke-miterlimit="10"
                        strokeWidth="2"
                      ></circle>
                      <path
                        d="m12,17v-5.5c0-.276-.224-.5-.5-.5h-1.5"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="square"
                        stroke-miterlimit="10"
                        strokeWidth="2"
                      ></path>
                      <circle
                        cx="12"
                        cy="7.25"
                        r="1.25"
                        fill="currentColor"
                        strokeWidth="2"
                      ></circle>
                    </g>
                  </svg>
                  Dead Line: 12/12/2022 12:00
                </div>
              </button>
            </div>
            <div className="card card-xs bg-accent text-primary-content card-border border-accent/30 hover:border-accent">
              <button className="btn btn-ghost w-full h-full flex-col bg-transparent border-none shadow-none py-1">
                <div className="card-body">
                  <h2 className="card-title">Card title!</h2>
                  <p>
                    A card component has a figure, a body part, and inside body
                    there are title and actions parts
                  </p>
                </div>
                <div className="badge badge.xs text-xs bg-base-100/50">
                  <svg
                    className="size-[1em]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="currentColor"
                      strokeLinejoin="miter"
                      strokeLinecap="butt"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="square"
                        stroke-miterlimit="10"
                        strokeWidth="2"
                      ></circle>
                      <path
                        d="m12,17v-5.5c0-.276-.224-.5-.5-.5h-1.5"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="square"
                        stroke-miterlimit="10"
                        strokeWidth="2"
                      ></path>
                      <circle
                        cx="12"
                        cy="7.25"
                        r="1.25"
                        fill="currentColor"
                        strokeWidth="2"
                      ></circle>
                    </g>
                  </svg>
                  Dead Line: 12/12/2022 12:00
                </div>
              </button>
            </div>
            <div className="card card-xs bg-secondary/50 text-primary-content card-border border-accent/30 hover:border-accent">
              <button className="btn btn-ghost w-full h-full bg-transparent border-none shadow-none">
                <div className="card-body">
                  <h2 className="card-title">Card title!</h2>
                  <p>
                    A card component has a figure, a body part, and inside body
                    there are title and actions parts
                  </p>
                </div>
              </button>
            </div>
            <div className="card card-xs bg-primary text-primary-content card-border border-accent/30 hover:border-accent">
              <button className="btn btn-ghost w-full h-full bg-transparent border-none shadow-none">
                <div className="card-body">
                  <h2 className="card-title">Card title!</h2>
                  <p>
                    A card component has a figure, a body part, and inside body
                    there are title and actions parts
                  </p>
                </div>
              </button>
            </div>
            <div className="card card-xs bg-primary text-primary-content card-border border-accent/30 hover:border-accent">
              <button className="btn btn-ghost w-full h-full bg-transparent border-none shadow-none">
                <div className="card-body">
                  <h2 className="card-title">Card title!</h2>
                  <p>
                    A card component has a figure, a body part, and inside body
                    there are title and actions parts
                  </p>
                </div>
              </button>
            </div>
            <div className="card card-xs bg-primary text-primary-content card-border border-accent/30 hover:border-accent">
              <button className="btn btn-ghost w-full h-full bg-transparent border-none shadow-none">
                <div className="card-body">
                  <h2 className="card-title">Card title!</h2>
                  <p>
                    A card component has a figure, a body part, and inside body
                    there are title and actions parts
                  </p>
                </div>
              </button>
            </div>
            <div className="card card-xs bg-primary text-primary-content card-border border-accent/30 hover:border-accent">
              <button className="btn btn-ghost w-full h-full bg-transparent border-none shadow-none">
                <div className="card-body">
                  <h2 className="card-title">Card title!</h2>
                  <p>
                    A card component has a figure, a body part, and inside body
                    there are title and actions parts
                  </p>
                </div>
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center border-t border-accent/30 pt-2">
            <div className="join">
              <button className="join-item text-white/50 border border-accent/30 btn bg-neutral/0 btn-xs">
                «
              </button>
              <button className="join-item text-white/50 border border-accent/30 btn bg-neutral/0 btn-xs">
                1
              </button>
              <button className="join-item text-white/50 border border-accent/30 btn bg-neutral/0 btn-xs">
                2
              </button>
              <button className="join-item text-white/50 border border-accent/30 btn bg-neutral/0 btn-xs btn-disabled">
                ...
              </button>
              <button className="join-item text-white/50 border border-accent/30 btn bg-neutral/0 btn-xs">
                99
              </button>
              <button className="join-item text-white/50 border border-accent/30 btn bg-neutral/0 btn-xs">
                100
              </button>
              <button className="join-item text-white/50 border border-accent/30 btn bg-neutral/0 btn-xs">
                »
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentDashBoard;

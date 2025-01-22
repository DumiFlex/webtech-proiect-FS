import React from 'react'

const ActiveActivitiesNav = () => {
  return (
    <>
        <div className=" flex items-center justify-between border-b border-accent/30 pb-2 ">
              <h1 className="font-bold justify-start text-left">Active Activites</h1>
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
    </>
  )
}

export default ActiveActivitiesNav
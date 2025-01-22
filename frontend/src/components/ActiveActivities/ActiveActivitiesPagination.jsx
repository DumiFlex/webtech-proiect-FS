import React from 'react'

const ActiveActivitiesPagination = () => {
  return (
    <>
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
    </>
  )
}

export default ActiveActivitiesPagination
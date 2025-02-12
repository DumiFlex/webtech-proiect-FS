import React from "react";

const GenderCheckBox = () => {
  return (
    <div className="flex ">
      <div className="form-control">
        <label className="label gap-2 cursor-pointer">
          <span className="label-text text-gray-200">Male</span>
          <input
            type="checkbox"
            className="checkbox checkbox-info border-slate-900"
          />
        </label>
      </div>
      <div className="form-control">
        <label className="label gap-2 cursor-pointer">
          <span className="label-text text-gray-200">Female</span>
          <input
            type="checkbox"
            className="checkbox checkbox-secondary border-slate-900"
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckBox;

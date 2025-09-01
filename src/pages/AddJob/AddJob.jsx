import React from "react";

const AddJob = () => {
  return (
    <div>
      <h2 className="text-3xl">Post a new Job</h2>

      <form className="card-body">
        {/* Job title */}
        <label className="label">Job Title</label>
        <input type="email" className="input" 
        name="title"
        placeholder="Job Title" />
        {/* Job Location */}
        <label className="label">Job Location</label>
        <input type="text" className="input" 
        name="location"
        placeholder="Job Location" />
        
        <button className="btn btn-neutral mt-4">Login</button>
      </form>
    </div>
  );
};

export default AddJob;

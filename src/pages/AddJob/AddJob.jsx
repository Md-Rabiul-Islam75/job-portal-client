import React from "react";

const AddJob = () => {
  return (
    <div>
      <h2 className="text-3xl">Post a new Job</h2>

      <form className="card-body">
        {/* Job title */}
        <label className="label">Job Title</label>
        <input
          type="email"
          className="input"
          name="title"
          placeholder="Job Title"
        />
        {/* Job Location */}
        <label className="label">Job Location</label>
        <input
          type="text"
          className="input"
          name="location"
          placeholder="Job Location"
        />

        {/* Job Type */}
        <label className="label">Job Type</label>
        <select defaultValue="Color scheme" className="select select-accent">
          <option disabled={true}>Pick a Job type</option>
          <option>Full-time</option>
          <option>Intern</option>
          <option>Part-time</option>
        </select>

        {/* Job Type */}
        <label className="label">Job Field</label>
        <select defaultValue="Color scheme" className="select select-accent">
          <option disabled={true}>Pick a Job Field</option>
          <option>Engineering</option>
          <option>Marketing</option>
          <option>Finance</option>
          <option>Teaching</option>
        </select>

        {/* salary range */}
        <p className="mt-4">Salary range</p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="form-control">
            <input type="text" className="input" name="min" placeholder="Min" />
          </div>

          <div className="form-control">
            <input type="text" className="input" name="max" placeholder="Max" />
          </div>

          {/* Currency */}
          <div>
            <select
              defaultValue="Color scheme"
              className="select select-accent"
            >
              <option>Currency</option>
              <option>BDT</option>
              <option>USD</option>
              <option>INR</option>
            </select>
          </div>
        </div>


         {/* Job description */}
        <label className="label">Job Description</label>

        <textarea className="textarea" name="description" placeholder="Job Description" required></textarea>



         {/* Requirements */}
        <label className="label">Job Requirements</label>
         <textarea className="textarea" name="description" placeholder="put each requirements in a new line" required></textarea>

          {/*responsibilities */}
        <label className="label">Job Responsibilities</label>
         <textarea className="textarea" name="description" placeholder="Write each responsibility in a new line" required></textarea>


       


   

{/* submit button */}
        <button className="btn btn-neutral mt-4">Submit</button>
      </form>
    </div>
  );
};

export default AddJob;

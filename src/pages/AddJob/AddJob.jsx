import React from "react";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const AddJob = () => {

    const {user} = useAuth();

  const handleAddJob = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const initialData = Object.fromEntries(formData.entries());

    console.log(initialData);

    const { min, max, currency, ...newJob } = initialData;

    newJob.salaryRange = { min, max, currency };

    newJob.requirements = newJob.requirements.split("\n");
    newJob.responsibilities = newJob.responsibilities.split("\n");

    console.log(newJob);

    fetch("http://localhost:5000/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJob),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/myApplications");
        }
      });
  };

  return (
    <div>
      <h2 className="text-3xl">Post a new Job</h2>

      <form onSubmit={handleAddJob} className="card-body">
        {/* Job title */}
        <label className="label">Job Title</label>
        <input
          type="text"
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
        <select defaultValue="Pick a Job type" className="select select-accent">
          <option disabled={true}>Pick a Job type</option>
          <option>Full-time</option>
          <option>Intern</option>
          <option>Part-time</option>
        </select>

        {/* Job field */}
        <label className="label">Job Field</label>
        <select defaultValue="Pick a Job Field" className="select select-accent">
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
              name="currency"
              defaultValue="Currency"
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

        <textarea
          className="textarea"
          name="description"
          placeholder="Job Description"
          required
        ></textarea>

        {/* Company Name */}
        <label className="label">Company Name</label>
        <input
          type="text"
          className="input"
          name="company"
          placeholder="Company Name"
        />

        {/* Requirements */}
        <label className="label">Job Requirements</label>
        <textarea
          className="textarea"
          name="requirements"
          placeholder="put each requirements in a new line"
          required
        ></textarea>

        {/*responsibilities */}
        <label className="label">Job Responsibilities</label>
        <textarea
          className="textarea"
          name="responsibilities"
          placeholder="Write each responsibility in a new line"
          required
        ></textarea>

        {/*  HR Name */}
        <label className="label">HR Name</label>
        <input
          type="text"
          className="input"
          name="hr_name"
          placeholder="HR Name"
        />

        {/*  HR Email */}
        <label className="label">HR Email</label>
        <input
          type="email"
          className="input"
          name="hr_email"
          defaultValue={user?.email}
          placeholder="HR email"
        />

        {/*  Company Logo */}
        <label className="label">Company Logo</label>
        <input
          type="url"
          className="input"
          name="company_logo"
          placeholder="Company Logo"
        />

        {/* submit button */}
        <button className="btn btn-neutral mt-4">Submit</button>
      </form>
    </div>
  );
};

export default AddJob;

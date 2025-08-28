import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const JobApply = () => {
  const { id } = useParams();
  console.log(id);

  const { user } = useAuth();
  const navigate = useNavigate();

  const submitJobApplication = (e) => {
    e.preventDefault();

    const form = e.target;
    const linkedIn = form.linkedIn.value;

    const github = form.github.value;

    const resume = form.resume.value;

    console.log("here check: ", linkedIn, github, resume);

    const jobApplication = {
      job_id: id,
      applicant_email: user.email,
      linkedIn,
      github,
      resume,
    };

    fetch("http://localhost:5000/job_applications", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(jobApplication),
    })
      .then((res) => res.json())
      .then((data) => {
        //
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
    <div className="card bg-base-100 w-full shadow-2xl">
      <h1 className="text-5xl text-center font-bold">
        Apply Job and Good Luck.
      </h1>

      <div className="card-body">
        <form onSubmit={submitJobApplication} className="form space-y-1">
          <label className="label">LinkedIn URL</label>
          <input
            type="url"
            className="input"
            name="linkedIn"
            placeholder="LinkedIn URL"
          />{" "}
          <br />
          <label className="label">Github URL</label>
          <input
            type="url"
            className="input"
            name="github"
            placeholder="Github URL"
          />{" "}
          <br />
          <label className="label">Resume</label>
          <input
            type="url"
            className="input"
            name="resume"
            placeholder="Resume URL"
          />
          <button className="btn btn-neutral mt-4">Apply</button>
        </form>
      </div>
    </div>
  );
};

export default JobApply;

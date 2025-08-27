import React from "react";
import { useParams } from "react-router-dom";

const JobApply = () => {
  const { id } = useParams();
  console.log(id);

  const {user} = useAuth(); 


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
      resume
    };

    // Send applicationData to the server
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
          /> <br />
          <label className="label">Github URL</label>
          <input
            type="url"
            className="input"
            name="github"
            placeholder="Github URL"
          /> <br />

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

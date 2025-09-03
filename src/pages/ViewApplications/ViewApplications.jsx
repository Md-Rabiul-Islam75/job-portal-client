import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewApplications = () => {

    const applications = useLoaderData();

    console.log(applications);
    return (
        <div>
            <h2 className="text-3xl">Applications for this job: {applications.length}</h2>

            <h1>{applications[0].applicant_email}</h1>


            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      
      {
       
        applications.map((app,index) =>
            <tr key={index}>
              <th>{index + 1}</th>
              <td>{app.applicant_email}</td>
              <td>{app.job_title}</td>
              <td>{app.favorite_color}</td>
            </tr>
        )
      }
    </tbody>
  </table>
</div>

            
            
        </div>
    );

}

export default ViewApplications;
import React, { useState } from 'react';

const HotJobs = () => {
    const [jobs, setJobs] = useState([]);

   useEffect(() => {

     fetch('http://localhost:5000/jobs')
       .then(res => res.json())
       .then(data => setJobs(data))

   },[])
    return (
        <div>
           <div>
              {
                jobs.map(job => <HotJobCard key={job_id} job = {job}></HotJobCard>)
              }
           </div>
        </div>
    );
};

export default HotJobs;
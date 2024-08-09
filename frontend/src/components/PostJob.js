import React, { useState } from 'react';
import axios from 'axios';

function PostJob() {
  const [job, setJob] = useState({
    title: '',
    description: '',
    location: '',
    company: ''
  });

  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/jobs', job)
      .then(response => {
        console.log('Job posted:', response.data);
        setJob({
          title: '',
          description: '',
          location: '',
          company: ''
        });
      })
      .catch(error => console.error('Error posting job:', error));
  };

  return (
    <div>
      <h1>Post a New Job</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" name="title" value={job.title} onChange={handleChange} required />
        </label>
        <label>
          Description:
          <textarea name="description" value={job.description} onChange={handleChange} required></textarea>
        </label>
        <label>
          Location:
          <input type="text" name="location" value={job.location} onChange={handleChange} required />
        </label>
        <label>
          Company:
          <input type="text" name="company" value={job.company} onChange={handleChange} required />
        </label>
        <button type="submit">Post Job</button>
      </form>
    </div>
  );
}

export default PostJob;

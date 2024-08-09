import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to Job Board</h1>
      <nav>
        <Link to="/jobs">View Jobs</Link>
        <Link to="/post-job">Post a Job</Link>
      </nav>
    </div>
  );
}

export default Home;

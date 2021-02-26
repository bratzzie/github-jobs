
import './App.css';
import useFetchJobs from './hooks/useFetchJobs';
import { Container } from 'react-bootstrap';
import { useState } from 'react';
import Job from './components/Job';

function App() {
  const [params, setParams] = useState({})
  const [page, setPage] = useState(1)


  const {jobs, loading, error} = useFetchJobs(params, page)
  
  return (
   <Container className="my-4">
     {loading && <h1>Loading...</h1>}
     {error && <h1>Something went wrong...Try Refreshing</h1>}
     {jobs.map(job => {
       return <Job key={job.id} job={job} />
     })}


   </Container>
  );
}

export default App;

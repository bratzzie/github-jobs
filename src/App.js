
import './App.css';
import useFetchJobs from './hooks/useFetchJobs';
import { Container } from 'react-bootstrap';
import { useState } from 'react';
import Job from './components/Job';
import OffersPagination from './components/OffersPagination';

function App() {
  const [params, setParams] = useState({})
  const [page, setPage] = useState(1)


  const {jobs, loading, error, hasNextPage} = useFetchJobs(params, page)
  
  return (
   <Container className="my-4">
     <h1 className="mb-4">GitHub Jobs</h1>
     <OffersPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
     {loading && <h1>Loading...</h1>}
     {error && <h1>Something went wrong...Try Refreshing</h1>}
     {jobs.map(job => {
       return <Job key={job.id} job={job} />
     })}
     <OffersPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
    

   </Container>
  );
}

export default App;

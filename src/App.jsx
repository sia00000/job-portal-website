import Nav from "./components/Nav";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import JobCard from "./components/JobCard";
import jobData from "./jobDummyData";
import { useEffect, useState } from "react";
import { collection, query, orderBy, getDocs, where } from "firebase/firestore";
import { db } from "./firebase.config.js";
function App() {
  const [job, setJob] = useState([]);

  const jobFetch = async () => {
    const tempJob = [];
    const jobRef = query(collection(db, "jobs"));
    const q = query(jobRef, orderBy("postedOn", "desc"));

    const req = await getDocs(q);
    req.forEach((job) => {
      tempJob.push({
        ...job.data(),
        id: job.id,
        postedOn: job.data().postedOn.toDate(),
      });
      //console.log(doc.id, "=>", doc.data());
    });

    setJob(tempJob);
  };

  const fetchCustomJob = async (jobCriteria) => {
    const tempJob = [];
    const jobRef = query(collection(db, "jobs"));
    const q = query(
      jobRef,
      where("type", "==", jobCriteria.type),
      where("postion", "==", jobCriteria.postion),
      where("location", "==", jobCriteria.location),
      where("experince", "==", jobCriteria.experince),
      orderBy("postedOn", "desc")
    );

    const req = await getDocs(q);
    req.forEach((job) => {
      tempJob.push({
        ...job.data(),
        id: job.id,
        postedOn: job.data().postedOn.toDate(),
      });
      //console.log(doc.id, "=>", doc.data());
    });

    setJob(tempJob);
  };

  useEffect(() => {
    jobFetch();
  }, []);

  return (
    <>
      <Nav />
      <Header />
      <SearchBar fetchCustomJob={fetchCustomJob} />

      {job.map((job) => (
        <JobCard key={job.id} {...job} />
      ))}
    </>
  );
}

export default App;

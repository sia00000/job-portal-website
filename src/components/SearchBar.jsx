import React, { useState } from "react";

const SearchBar = ({ fetchCustomJob }) => {
  const [jobCriteria, setJobCriteria] = useState({
    postion: "",
    location: "",
    experince: "",
    type: "",
  });

  const handleChange = (e) => {
    setJobCriteria((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  console.log();
  const search = async () => {
    await fetchCustomJob(jobCriteria);
  };
  return (
    <div className="flex gap-4 justify-center mt-5">
      <select
        onChange={handleChange}
        name="postion"
        value={jobCriteria.postion}
        className="w-64 bg-zinc-200 font-semibold rounded-md pl-4 py-3 border-none outline-none "
      >
        <option hidden disabled selected value="">
          Job Role
        </option>

        <option value="Frontend_Dev">Frontend Developer</option>
        <option value="Backend_Dev">Backend Developer</option>
        <option value="Full_Stack_Dev">Full Stack Developer</option>
        <option value="Android">Android Developer</option>
        <option value="iSO_Dev">iSO Developer</option>
      </select>
      <select
        onChange={handleChange}
        name="type"
        value={jobCriteria.type}
        className="w-64 bg-zinc-200 font-semibold rounded-md pl-4 py-3 border-none outline-none"
      >
        <option value="" hidden disabled selected>
          Job Type
        </option>

        <option value="Full Time">Full Time</option>
        <option value="Part Time">Part Time</option>
        <option value="Internship">Internship</option>
        <option value="Freelance">Freelance</option>
      </select>

      <select
        onChange={handleChange}
        name="location"
        value={jobCriteria.location}
        className="w-64 bg-zinc-200 font-semibold rounded-md pl-4 py-3 border-none outline-none"
      >
        <option value="" hidden disabled selected>
          Location
        </option>

        <option value="In-Office">In-Office</option>
        <option value="Remote">Remote</option>
        <option value="2 Year">2 Year</option>
        <option value="Hybrid">Hybrid</option>
      </select>
      <select
        onChange={handleChange}
        name="experince"
        value={jobCriteria.experince}
        className="w-64 bg-zinc-200 font-semibold rounded-md pl-4 py-3 border-none outline-none"
      >
        <option value="" hidden disabled selected>
          Experince
        </option>

        <option value="Freasher">Freasher</option>
        <option value="1 Year">1</option>
        <option value="2 Year">2</option>
        <option value="2 Year">3</option>
        <option value="5+ Year">5</option>
      </select>
      <button
        onClick={search}
        className="text-white w-40 rounded-xl bg-blue-700 font-bold text-"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;

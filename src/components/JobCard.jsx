import dayjs from "dayjs";
import React from "react";

const JobCard = (props) => {
  let skill = ["Javascipt", "React", "CSS"];
  const date1 = dayjs(Date.now());
  const diffIndays = date1.diff(props.postedOn, "day");
  console.log(props);
  return (
    <div className="flex justify-center">
      <div className="w-10/12 flex bg-white  my-10 justify-between p-5 rounded items-center">
        <div>
          <h1 className="text-lg font-semibold ">
            {props.postion} - {props.company}
          </h1>
          <p>
            {props.type} &bull; {props.location} &bull; {props.experince}
          </p>
          <div className="flex gap-2 mt-2">
            {props.skill.map((skill) => (
              <p
                key={skill}
                className="text-gray-500 py-1 px-2 rounded-md border border-gray"
              >
                {skill}
              </p>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <p className="text-gray-500">
            {" "}
            Posted{" "}
            {diffIndays > 1 ? `${diffIndays} days` : `${diffIndays}  day`} ago
          </p>
          <a href={props.jobLink} target="_blank">
            <button className="text-blue-500 border border-blue-500 px-10 py-2 rounded-lg ">
              Apply
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default JobCard;

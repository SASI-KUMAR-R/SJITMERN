import React from "react";
import { useContext } from "react";
import { ResPub } from "./CoE";

const StudentResults = ({ sgpa, cgpa }) => {
  const result = useContext(ResPub);
  return (
    <div>
      <h1>RESULT HERE</h1>
      <h1>CGPA:{result.cgpa}</h1>
      <h1>SGPA:{result.sgpa}</h1>
    </div>
  );
};
export default StudentResults;
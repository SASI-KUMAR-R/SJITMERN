import Exam from "./Exam";
import React from "react";
import { createContext } from "react";
import StudentResults from "./StudentResults";

export const ResPub = createContext();

const CoE = () => {
  return (
    <ResPub.Provider value={{ sgpa: "10sgpa", cgpa: "10cgpa" }}>
      <div>
        <Exam />
        <h1>RESULT PUBLISHED</h1>
        <StudentResults/>
      </div>
    </ResPub.Provider>
  );
};
export default CoE;

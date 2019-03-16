import React from "react";
import StudentRow from "./StudentRow";

const StudentTable = props => {
  const students = props.students;
  return (
    <table>
      <tr>
        <td>Name</td> />
      </tr>
      {students.map(student => (
        <StudentRow student={student} key={student.id} />
      ))}
    </table>
  );
};

export default StudentTable;

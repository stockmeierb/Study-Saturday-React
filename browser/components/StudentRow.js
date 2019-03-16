import React from "react";

const StudentRow = props => {
  const student = props.student;
  return (
    <tr>
      <td>{student.fullName}</td>
    </tr>
  );
};

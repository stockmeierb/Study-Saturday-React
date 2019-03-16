import React from "react";
import StudentTable from "./StudentTable";

//Main < Student List < Student
class Main extends React.Component {
  constructor() {
    super();
    this.state = { students: [] };
  }

  render() {
    return <StudentTable students={this.state.students} />;
  }
}

export default Main;

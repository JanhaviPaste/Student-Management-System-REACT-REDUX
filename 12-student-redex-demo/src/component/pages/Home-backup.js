import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { fetchStudents } from "../../redux/student/studentActions";

class Home extends Component {
  state = {
    students: [],
  };
  componentDidMount() {
    // axios.get(`http://localhost:9091/student-api/students/`).then((result) => {
    //   // alert(JSON.stringify(result.data));
    //   // following statement will give you error:- do not mutate state directly use useState
    //   //this.state.students = result.data;
    //   this.setState({
    //     students: result.data,
    //   });
    // });
    fetchStudents();
  }

  render() {
    return (
      <div className="py-4">
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Student Id</th>
              <th scope="col">Student Name</th>
              <th scope="col">Student Score</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.students.map((student, index) => (
              <tr>
                <td>{student.studentId}</td>
                <td>{student.studentName}</td>
                <td>{student.studentScore}</td>
                <td>
                  <Link
                    className="btn btn-primary mr-2"
                    to={`/students/view/${student.studentId}`}
                  >
                    View
                  </Link>
                  <Link
                    className="btn btn-outline-primary mr-2"
                    to={`/students/modify/${student.studentId}`}
                  >
                    Modify
                  </Link>
                  <Link
                    className="btn btn-outline-primary mr-2"
                    to={`/students/delete/${student.studentId}`}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Home;

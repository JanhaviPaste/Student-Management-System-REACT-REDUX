import React, { Component } from "react";
import axios from "axios";
class ViewStudent extends Component {
  state = {
    student: {
      department: {},
    },
  };
  componentDidMount() {
    axios
      .get(
        `http://localhost:9091/student-api/students/${this.props.match.params.id}`
      )
      .then((result) => {
        this.setState({
          student: result.data,
        });
      });
  }

  homePage = (event) => {
    // event.preventDefault();
    // alert("send to home page");
    this.props.history.push("/students");
  };
  render() {
    return (
      <div>
        <h1>
          <span className="badge badge-dark">View Student</span>
        </h1>
        <table className="table table-bordered">
          <tr>
            <td>Student Id</td>
            <th>{this.state.student.studentId}</th>
          </tr>
          <tr>
            <td>Student Name</td>
            <th>{this.state.student.studentName}</th>
          </tr>
          <tr>
            <td>Student Score</td>
            <th>{this.state.student.studentScore}</th>
          </tr>
          <tr>
            <td>Department Id</td>
            <th>{this.state.student.department.departmentId}</th>
          </tr>
          <tr>
            <td>Department Name</td>
            <th>{this.state.student.department.departmentName}</th>
          </tr>
        </table>

        <div className="form-group">
          <button className="btn btn-primary" onClick={this.homePage}>
            Go Back
          </button>
        </div>
      </div>
    );
  }
}

export default ViewStudent;

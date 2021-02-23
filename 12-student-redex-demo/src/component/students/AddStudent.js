import React, { Component } from "react";
import axios from "axios";
class AddStudent extends Component {
  state = {
    studentId: "",
    studentName: "",
    studentScore: "",
    departmentId: "",
    departments: [],
    idError: "",
    nameError: "",
    scoreError: "",
    deptError: "",
  };

  componentDidMount() {
    axios
      .get("http://localhost:9091/student-api/students/departments/")
      .then((data) => {
        let depts = data.data.map((dept) => {
          return { value: dept.departmentId, display: dept.departmentName };
        });
        this.setState({
          departments: [{ value: "-1", display: "Select Department" }].concat(
            depts
          ),
        });
      })
      .catch((error) => {
        alert(JSON.stringify("error: " + error));
      });
  }
  validate = () => {
    let flag = true;
    if (!this.state.studentId) {
      flag = false;
      this.setState({ idError: "Student Id Is Required" });
    } else {
      this.setState({ idError: "" });
    }
    if (this.state.studentName === "") {
      flag = false;
      this.setState({ nameError: "Student Name Is Required" });
    } else {
      this.setState({ nameError: "" });
    }
    if (!this.state.studentScore) {
      flag = false;
      this.setState({ scoreError: "Student Score Is Required" });
    } else {
      this.setState({ scoreError: "" });
    }
    if (!this.state.departmentId) {
      flag = false;
      this.setState({ deptError: "Please Select Department Id" });
    } else {
      this.setState({ deptError: "" });
    }
    return flag;
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    let isValid = this.validate();
    if (!isValid) {
      return false;
    }

    let student = {
      studentId: this.state.studentId,
      studentName: this.state.studentName,
      studentScore: this.state.studentScore,
      department: {
        departmentId: this.state.departmentId,
      },
    };

    await axios
      .post("http://localhost:9091/student-api/students/", student)
      .then((data) => {})
      .catch((error) => {
        alert(error.response.data.message);
        // if (error.response) {
        //   // The request was made and the server responded with a status code
        //   // that falls out of the range of 2xx
        //   console.log(error.response.data);
        //   console.log(error.response.status);
        //   console.log(error.response.headers);
        // } else if (error.request) {
        //   // The request was made but no response was received
        //   // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        //   // http.ClientRequest in node.js
        //   console.log(error.request);
        // } else {
        //   // Something happened in setting up the request that triggered an Error
        //   console.log("Error", error.message);
        // }
      });
    // redirect you to Home component after adding user
    this.props.history.push("/");
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>
          <span className="badge badge-dark">Add Student</span>
        </h1>
        <div className="form-group mr2">
          <div className="alert-danger">{this.state.idError}</div>
          <input
            type="text"
            className="form-control"
            id="studentId"
            placeholder="Enter Student Id"
            value={this.state.studentId}
            onChange={(event) =>
              this.setState({ studentId: event.target.value })
            }
          />
        </div>
        <div className="form-group">
          <div className="alert-danger">{this.state.nameError}</div>
          <input
            type="text"
            className="form-control"
            id="studentName"
            placeholder="Enter Student Name"
            value={this.state.studentName}
            onChange={(event) =>
              this.setState({ studentName: event.target.value })
            }
          />
        </div>
        <div className="form-group">
          <div className="alert-danger">{this.state.scoreError}</div>
          <input
            type="text"
            className="form-control"
            id="studentId"
            placeholder="Enter Student Score"
            value={this.state.studentScore}
            onChange={(event) =>
              this.setState({ studentScore: event.target.value })
            }
          />
        </div>
        <div className="form-group">
          <div className="alert-danger">{this.state.deptError}</div>
          <select
            className="form-control"
            value={this.state.departmentId}
            onChange={(event) =>
              this.setState({ departmentId: event.target.value })
            }
          >
            {this.state.departments.map((dept) => (
              <option key={dept.value} value={dept.value}>
                {dept.display}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Add User
        </button>
      </form>
    );
  }
}

export default AddStudent;

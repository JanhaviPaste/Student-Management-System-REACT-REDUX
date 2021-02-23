import React, { Component } from "react";
import axios from "axios";
class ModifyStudent extends Component {
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
      .get(
        `http://localhost:9091/student-api/students/${this.props.match.params.id}`
      )
      .then((result) => {
        // alert("Dept Id: " + result.data.department);
        this.setState({
          studentId: result.data.studentId,
          studentName: result.data.studentName,
          studentScore: result.data.studentScore,
          departmentId: result.data.department.departmentId,
        });
      });

    axios
      .get("http://localhost:9091/student-api/students/departments/")
      .then((data) => {
        let depts = data.data.map((dept) => {
          return { value: dept.departmentId, display: dept.departmentName };
        });
        this.setState({
          departments: [{ value: "", display: "Select Department" }].concat(
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
    await axios.put("http://localhost:9091/student-api/students/", student);
    // redirect you to Home component after adding user
    this.props.history.push("/");
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>
          <span className="badge badge-dark">Modify Student</span>
        </h1>
        <div className="form-group mr2">
          <input
            type="text"
            className="form-control"
            id="studentId"
            placeholder="Enter Student Id"
            value={this.state.studentId}
            readOnly
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
          Modify Student
        </button>
      </form>
    );
  }
}

export default ModifyStudent;

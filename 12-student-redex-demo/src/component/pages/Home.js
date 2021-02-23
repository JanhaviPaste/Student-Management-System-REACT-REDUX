import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchStudents } from "../../redux/student/studentActions";

function Home({ studentsData, fetchStudents }) {
  useEffect(() => {
    fetchStudents();
  }, []);
  return studentsData.loading ? (
    <h2>Loading</h2>
  ) : studentsData.error ? (
    <h2>{studentsData.error}</h2>
  ) : (
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
          {/* {alert(JSON.stringify(studentsData))} */}
          {studentsData.students.map((student, index) => (
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

const mapStateToProps = (state) => {
  //  alert("map state: " + JSON.stringify(state.students));
  return {
    studentsData: state.students,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchStudents: () => dispatch(fetchStudents()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

import { useState } from "react";
import "./App.css";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";

function App() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  const deleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Student Management System</h1>

      <StudentForm addStudent={addStudent} />

      <input
        type="text"
        placeholder="Search Student..."
        className="search-box"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <StudentList
        students={filteredStudents}
        deleteStudent={deleteStudent}
      />
    </div>
  );
}

export default App;
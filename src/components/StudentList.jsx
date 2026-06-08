function StudentList({ students, deleteStudent }) {
  return (
    <div>
      {students.length === 0 ? (
        <p>No students found.</p>
      ) : (
        students.map((student) => (
          <div key={student.id} className="student-card">
            <h3>{student.name}</h3>
            <p>Roll No: {student.roll}</p>
            <p>Course: {student.course}</p>

            <button onClick={() => deleteStudent(student.id)}>
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default StudentList;
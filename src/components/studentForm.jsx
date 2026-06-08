import { useState } from "react";

function StudentForm({ addStudent }) {
  const [name, setName] = useState("");
  const [roll, setRoll] = useState("");
  const [course, setCourse] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !roll || !course) {
      alert("Please fill all fields");
      return;
    }

    addStudent({
      id: Date.now(),
      name,
      roll,
      course,
    });

    setName("");
    setRoll("");
    setCourse("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Student Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Roll Number"
        value={roll}
        onChange={(e) => setRoll(e.target.value)}
      />

      <input
        type="text"
        placeholder="Course"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
      />

      <button type="submit">Add Student</button>
    </form>
  );
}

export default StudentForm;
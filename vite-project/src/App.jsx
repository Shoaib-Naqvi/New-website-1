import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function App() {


const [students, setStudents] = useState(["Ali", "Sana", "Hassan", "Ayesha"]);
  const [teachers, setTeachers] = useState(["Mr. Ahmed", "Miss Sara", "Sir Bilal"]);
  const [friends, setFriends] = useState(["Usman", "Hira", "Zara", "Fahad"]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Names Lists using States</h1>

      {/* Students List */}
      <h2>Students</h2>
      <ul>
        {students.map((student, index) => (
          <li key={index}>{student}</li>
        ))}
      </ul>

      {/* Teachers List */}
      <h2>Teachers</h2>
      <ul>
        {teachers.map((teacher, index) => (
          <li key={index}>{teacher}</li>
        ))}
      </ul>

      {/* Friends List */}
      <h2>Friends</h2>
      <ul>
        {friends.map((friend, index) => (
          <li key={index}>{friend}</li>
        ))}
      </ul>
    </div>
  );
}

export function SetApp() {
  // State for student marks based on grades
  const [gradeA, setGradeA] = useState([
    { name: "Ali", marks: 95 },
    { name: "Sana", marks: 92 },
    { name: "Hassan", marks: 90 },
  ]);

  const [gradeB, setGradeB] = useState([
    { name: "Ayesha", marks: 82 },
    { name: "Bilal", marks: 78 },
    { name: "Hira", marks: 85 },
  ]);

  const [gradeC, setGradeC] = useState([
    { name: "Usman", marks: 68 },
    { name: "Fahad", marks: 72 },
    { name: "Zara", marks: 65 },
  ]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Students Marks by Grades</h1>

      {/* Grade A Students */}
      <h2>Grade A</h2>
      <ul>
        {gradeA.map((student, index) => (
          <li key={index}>
            {student.name} → {student.marks} marks
          </li>
        ))}
      </ul>

      {/* Grade B Students */}
      <h2>Grade B</h2>
      <ul>
        {gradeB.map((student, index) => (
          <li key={index}>
            {student.name} → {student.marks} marks
          </li>
        ))}
      </ul>

      {/* Grade C Students */}
      <h2>Grade C</h2>
      <ul>
        {gradeC.map((student, index) => (
          <li key={index}>
            {student.name} → {student.marks} marks
          </li>
        ))}
      </ul>
    </div>
  );
}







//export default App

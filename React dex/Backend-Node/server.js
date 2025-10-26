const express = require("express");
const app = express();

app.use(express.json()); 

// Sample array of students
let students = [
  { id: 1, name: "Ali", email: "ali@example.com", age: 20 },
  { id: 2, name: "Sara", email: "sara@example.com", age: 22},
   { id: 3, name: "Waleed", email: "waleed@example.com", age: 23}
   
];

// ✅ GET — Retrieve all students
app.get("/students", (req, res) => {
  res.json(students);
});


// ✅ POST — Add a new student
app.post("/students", (req, res) => {
  const { name, email, age } = req.body;
  const newStudent = {
    id: students.length + 1,
    name,
    email,
    age,
  };
  students.push(newStudent);
  res.status(201).json({ message: "Student added successfully!", newStudent });
});


// ✅ PUT — Replace student data by ID
app.put("/students/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { name, email, age } = req.body;

  const index = students.findIndex((s) => s.id === id);
  if (index === -1) 
 return res.status(404).json({ message: "Student not found!" });

  students[index] = { id, name, email, age };
 
  res.json({ message: "Student replaced successfully!", student: students[index] });
});

// ✅ PATCH — Update student data by ID
app.patch("/students/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const updates = req.body;

  const student = students.find((s) => s.id === id);
  if (!student) 
    return res.status(404).json({ message: "Student not found!" });

  // Update only the fields sent in the body
  Object.assign(student, updates);
 
  res.json({ message: "Student updated successfully!", student });
});

// ✅ DELETE — Remove student by ID
app.delete("/students/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = students.findIndex((s) => s.id === id);

  if (index === -1) 
    return res.status(404).json({ message: "Student not found!" });

  const deleted = students.splice(index, 1);
  res.json({ message: "Student deleted successfully!", deleted });
});

// ✅ Server start
app.listen(4000, () => {
  console.log("Server running on http://localhost:4000");
});

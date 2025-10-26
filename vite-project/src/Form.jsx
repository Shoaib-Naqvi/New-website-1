import React,{ useState } from "react";

export default function Form() {
  return (
    <div>
      <h1>Form</h1>
      <form>
        <input type="text" placeholder="Enter text" />
        <input type ="password " placeholder="Enter Password"/>
        <input type ="email " placeholder="Enter Email"/>
        <button type="submit">Submit</button> 
      </form>
    </div>
  );
}

function UserForm() {
  // Step 1: Create state variables for each input
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Step 2: Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // prevents page reload
    alert(`Name: ${name}\nEmail: ${email}\nPassword: ${password}`);
  };

  return (
    <div style={{ margin: "20px", fontFamily: "Arial" }}>
      <h2>Create Account</h2>
      
      {/* Step 3: Form with controlled inputs */}
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label>Name: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)} // update state
            placeholder="Enter your name"
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Email: </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // update state
            placeholder="Enter your email"
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Password: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // update state
            placeholder="Enter password"
          />
        </div>

        <button type="submit">Create Account</button>
      </form>
    </div>
  );
}
export { UserForm };

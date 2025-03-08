import { useState } from "react";

const RegistrationForm = () => {
  const [username, setUsername] = useState ('');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

    



const handleSubmit = (e) => {
  e.preventDefault();
  let validationErrors = {};

  const newErrors = {};

  if (!username) {
    validationErrors.username = "Username is required"
  }

  if (!email) {
    validationErrors.email = "Email is required"
  }

  if (!password) {
    validationErrors.password = "Password is reqired"
  }

  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
    return;
  }
  console.log("Form submitted", {username, email, password});
}
// const RegistrationForm = () => {
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: ""
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {q
//     e.preventDefault();
//     if (!formData.username || !formData.email || !formData.password) {
//       alert("All fields are required!");
//       return;
//     }
//     console.log("Form submitted:", formData);
//   };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" name="password" placeholder="Password" value={password} onChange={(e) => setEmail(e.target.value)} />
      <button type="submit">Register</button>
    </form>
  );
}

export default RegistrationForm;
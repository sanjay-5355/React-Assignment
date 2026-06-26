// o Create a form with inputs for name, email, and password. Use state to control the
// form and display the form data when the user submits it.

// o Add validation to the form created above. For example, ensure that the email input
// contains a valid email address.

import React, { useState } from "react";

function FormComponent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.password) {
      setError("All fields are required");
      return;
    }

    if (!isValidEmail(formData.email)) {
      setError("Invalid email format");
      return;
    }

    setError("");
    setSubmittedData(formData);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>User Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
        />
        <br /><br />

        <button type="submit">Submit</button>
      </form>

      {/* Error Message */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {submittedData && (
        <div>
          <h3>Submitted Data:</h3>
          <p>Name: {submittedData.name}</p>
          <p>Email: {submittedData.email}</p>
          <p>Password: {submittedData.password}</p>
        </div>
      )}
    </div>
  );
}

export default FormComponent;
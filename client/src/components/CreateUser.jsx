import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export const CreateUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const navigate = useNavigate();
  const Submit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/createUser", {
        name: name,
        email: email,
        age: age,
      })
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="d-flex vh-100 bg-dark justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={Submit}>
          <h2>Add User</h2>
          <div className="mb-2">
            <label htmlFor="">Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="form-control"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">E-mail</label>
            <input
              type="text"
              placeholder="Enter E-mail"
              className="form-control"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Age</label>
            <input
              type="text"
              placeholder="Enter Age"
              className="form-control"
              onChange={(e) => {
                setAge(e.target.value);
              }}
            />
          </div>
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
};

import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export const UpdateUser = () => {
  const { id } = useParams();
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newAge, setNewAge] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/getUser/${id}`)
      .then((result) => {
        setNewName(result.data.name);
        setNewEmail(result.data.email);
        setNewAge(result.data.age);
      })
      .catch((err) => {
        console.error(err);
      });
  },[]);

  const Update = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3000/updateUser/${id}`, {
        name: newName,
        email: newEmail,
        age: newAge,
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
        <form onSubmit={Update}>
          <h2>Update User</h2>
          <div className="mb-2">
            <label htmlFor="">Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="form-control"
              value={newName}
              onChange={(e) => {
                setNewName(e.target.value);
              }}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">E-mail</label>
            <input
              type="text"
              placeholder="Enter E-mail"
              className="form-control"
              value={newEmail}
              onChange={(e) => {
                setNewEmail(e.target.value);
              }}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Age</label>
            <input
              type="text"
              placeholder="Enter Age"
              className="form-control"
              value={newAge}
              onChange={(e) => {
                setNewAge(e.target.value);
              }}
            />
          </div>
          <button className="btn btn-primary">Update</button>
        </form>
      </div>
    </div>
  );
};

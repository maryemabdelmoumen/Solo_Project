import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export const Users = () => {
  const [users, setUsers] = useState([]);
  const [updated,setUpdated] = useState(false)

  useEffect(() => {
    axios
      .get("http://localhost:3000/")
      .then((result) => {
        setUsers(result.data);
      })
      .catch((err) => {
        console.error(err);
      });
  },[updated]);

  const handleDelete = (id)=>{
    axios.delete(`http://localhost:3000/deleteUser/${id}`)
    .then((result)=>{
      console.log(result);
    })
    .catch((error)=>{
      console.error(error);
    })
  }

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <Link to="/create" className="btn btn-success">
          add+
        </Link>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>E-mail</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.age}</td>
                  <td>
                    <Link
                      to={`/update/${user._id}`}
                      className="ms-1 btn btn-primary"
                    >
                      Edit
                    </Link>
                    <button
                      className="ms-1 btn btn-danger"
                      onClick={(e) => {
                        handleDelete(user._id)
                        setUpdated(!updated)
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

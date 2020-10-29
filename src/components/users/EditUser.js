import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const EditUser = () => {
  let history = useHistory();
  const { id } = useParams();
  const [user, setUser] = useState({
    id: id,
    name: "",
    username: "",
    phone: "",

  });

  const { name, username, phone } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    console.log(user)
    await axios.post('http://localhost/demo-backend/api/update', user);
    history.push("/");
  };

  const loadUser = async () => {
    const result = await axios.post('http://localhost/demo-backend/api/show', { id });
    setUser(result.data);
    console.log(result.data);
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit A User</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <h1
              type="integer"
              className="form-control form-control-lg"
              placeholder={user.id}
              name="id"
              value={id}
              onChange={e => onInputChange(e)}
            > {id} </h1>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder={user.username}
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your UserName"
              name="username"
              value={username}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"

              placeholder="Enter Your Phone Number"
              name="phone"
              value={phone}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-warning btn-block">Update User</button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;

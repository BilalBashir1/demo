import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const User = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    phone: "",
  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.post('http://localhost/demo-backend/api/show', { id });
    setUser(res.data);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
      <h1 className="display-4">User Id: {user.id}</h1>
      <hr />
      <ul className="list-group w-50">

        <li className="list-group-item">name: {user.name}</li>
        <li className="list-group-item">username: {user.username}</li>
        <li className="list-group-item">phone: {user.phone}</li>
      </ul>
    </div>
  );
};

export default User;

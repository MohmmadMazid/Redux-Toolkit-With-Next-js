"use client";
import { useState, useEffect } from "react";
import Loader from "../components/Loader";

const UserPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch(
        "https://jsonplaceholder.typicode.com/comments"
      );
      let result = await response.json();
      setUsers(result);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Users Data</h1>
      {isLoading ? (
        <Loader />
      ) : (
        users.map((comment) => (
          <div key={comment.id}>
            <h2>Name: {comment.name}</h2>
            <h2>Email: {comment.email}</h2>
          </div>
        ))
      )}
    </div>
  );
};

export default UserPage;

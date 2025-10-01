import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, addUser, deleteUser } from "../redux/userSlice";
import UserList from "../components/UserList";
import UserForm from "../components/UserForm";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const dispatch = useDispatch();
  const { list, status } = useSelector((state) => state.users);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchUsers());
    }
  }, [status, dispatch]);

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">User Management</h1>
      <UserForm onAdd={(user) => dispatch(addUser(user))} />
      <SearchBar />
      <UserList users={list} onDelete={(id) => dispatch(deleteUser(id))} />
    </div>
  );
};

export default Home;

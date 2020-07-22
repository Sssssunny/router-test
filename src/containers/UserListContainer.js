import React, { useEffect } from "react";
import UserList from "../components/UserList";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../modules/user";

function UserListContainer() {
  const { loading, data, error } = useSelector((state) => state.user.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  if (loading) return <div>로딩 중...</div>;
  if (error) return <div>에러 발생</div>;
  if (!data) return null;

  return <UserList users={data} />;
}

export default UserListContainer;

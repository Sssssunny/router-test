import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

function UserList({ users }) {
  const dispatch = useDispatch();

  return (
    <>
      <h1>플레이오토 멤버</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/${user.id}`}>{user.name}</Link>
            <button
              onClick={() =>
                dispatch({
                  type: "DEL_USER",
                  id: user.id,
                })
              }
              style={{ marginLeft: "10px" }}
            >
              삭제
            </button>
          </li>
        ))}
      </ul>
      <Link to="/UserAdd">멤버 추가</Link>
    </>
  );
}

export default UserList;

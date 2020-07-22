import React from "react";
import { Link } from "react-router-dom";

function Users() {
  return (
    <>
      <h1>사용자목록</h1>
      <ul>
        <li>로니</li>
        <li>카리스</li>
        <li>써니</li>
        <li>칼리</li>
        <li>어빙</li>
        <li>쵸비</li>
        <li>카렌</li>
      </ul>
      <Link to="/">
        <button>홈으로</button>
      </Link>
    </>
  );
}

export default Users;

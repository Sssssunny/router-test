import React from "react";
import UserDetailContainer from "../containers/UserDetailContainer";

function UserDetailPage({ match }) {
  const { id } = match.params;

  return (
    // 넘어오는 값이 문자열로 넘어오기 때문에 숫자로 변환해주어야 함.
    <UserDetailContainer userID={id} />
  );
}

export default UserDetailPage;

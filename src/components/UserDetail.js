import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

function UserDetail({ user }) {
  const dispatch = useDispatch();

  const [name, setName] = useState(user.name);
  const [nickName, setnickName] = useState(user.nickName);
  const [desc, setDesc] = useState(user.desc);
  const [on, setOn] = useState(false);

  const onClick = () => {
    dispatch({
      type: "UP_USER",
      name: name,
      nickName: nickName,
      desc: desc,
      id: user.id,
    });
  };

  return (
    <>
      {on === false ? (
        <>
          <h1>{user.name}</h1>
          <div>영어 이름 : {user.nickName}</div>
          <div>소개 : {user.desc}</div>
          <button>
            <Link to="/">홈으로</Link>
          </button>
          <button onClick={() => setOn(!on)}>수정하기</button>
        </>
      ) : (
          <>
            <p>
              이름 :{" "}
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="이름을 입력해 주세요."
              />
            </p>
            <p>
              별명 :{" "}
              <input
                value={nickName}
                onChange={(e) => setnickName(e.target.value)}
                type="text"
                placeholder="닉네임을 입력해 주세요."
              />
            </p>
            <p>
              설명 :{" "}
              <textarea
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                placeholder="설명을 입력해 주세요."
              ></textarea>
            </p>
            <button onClick={() => onClick()}>수정하기</button>
          </>
        )}
    </>
  );
}

export default UserDetail;
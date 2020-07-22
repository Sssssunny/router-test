import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

function UserAdd() {
  const [name, setName] = useState("");
  const [nick, setNick] = useState("");
  const [desc, setDesc] = useState("");
  const dispatch = useDispatch();

  return (
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
        닉네임 :{" "}
        <input
          value={nick}
          onChange={(e) => setNick(e.target.value)}
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
      <button>
        <Link
          onClick={() =>
            dispatch({
              type: "ADD_USER",
              name: name,
              nick: nick,
              desc: desc,
            })
          }
          to="/"
        >
          추가하기
        </Link>
      </button>
    </>
  );
}

export default UserAdd;

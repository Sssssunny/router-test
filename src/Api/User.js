import axios from "axios";

// 사용자 리스트 조회
export const getUserDetail = async (id) => {
  if (id === "UserAdd") {
    return;
  }
  const res = await axios.get(`http://localhost:4000/users/${id}`);
  return res.data;
};

export const getUsers = async () => {
  const res = await axios.get("http://localhost:4000/users");
  return res.data;
};

export const getAdd = async (name, nick, desc) => {
  await axios.post("http://localhost:4000/users", {
    name: name,
    nickName: nick,
    desc: desc,
  });
};

export const getDel = async (id) => {
  await axios.delete(`http://localhost:4000/users/${id}`);
};

export const getUp = async (id, name, nickName, desc) => {
  await axios.patch(`http://localhost:4000/users/${id}`, {
    name: name,
    nickName: nickName,
    desc: desc,
  });
};

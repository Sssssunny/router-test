import React from "react";
import { Route } from "react-router-dom";
import UserListPage from "./pages/UserListPage";
import UserDetailPage from "./pages/UserDetailPage";
import UserAdd from "./components/UserAdd";

function App() {
  return (
    <>
      <Route path="/" component={UserListPage} exact />
      <Route path="/:id" component={UserDetailPage} />
      <Route path="/UserAdd" component={UserAdd} />
    </>
  );
}

export default App;

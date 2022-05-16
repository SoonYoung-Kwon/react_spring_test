import React, { useState } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import SignUp from './component/SignUp.jsx';
import SignIn from './component/SignIn.jsx';
import UserInfo from './component/UserInfo.jsx';
import Home from './component/Home.jsx';
import Header from './component/Header.jsx';

const App = () => {

  const [userId, setUserId] = useState()
  const [token, setToken] = useState()

  return (
    <>
      <BrowserRouter>
        <Header userId={userId}></Header>
        <Routes>
          <Route path="/" component={<Home></Home>}/>
          <Route path="/signUp" element={<SignUp></SignUp>}/>
          <Route path="/signIn" element={<SignIn setUserId={setUserId} setToken={setToken}></SignIn>}/>
          <Route path="/user/info" element={<UserInfo token={token} setUserId={setUserId} setToken={setToken}></UserInfo>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
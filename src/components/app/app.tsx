import "./app.css"
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Approute } from "../../constants/constants";
import MainScreen from "../../pages/main-screen/main-screen";
import NotFoundScreen from "../../pages/not-found-screen/not-found-screen";

function App() {
  return (
    <Routes>
      <Route
        path={Approute.Main}
        element={<MainScreen />}
      />
      <Route
        path="*"
        element={<NotFoundScreen />}
      />
    </Routes>
  )
}

export default App

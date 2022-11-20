import React from "react";
// import './App.css';
import { NavLink, Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import AlbumFeature from "./features/Album";
import TodoFeature from "./features/Todo";

function App() {
  return (
    <div className="App">
      Hearder
      <p>
        <NavLink to="/todos" activeclassname="active-menu">
          Todos
        </NavLink>
      </p>
      <p>
        <NavLink to="/albums" activeclassname="active">
          Albums
        </NavLink>
      </p>
      <Routes>
        <Route path="/" element={<AlbumFeature />} />
        <Route path="/todos/*" element={<TodoFeature />} />
        <Route path="/albums" element={<AlbumFeature />} />
        <Route path="*" element={<NotFound />} />
        {/* <Route path="/*" element={<Navigate replace to="/" />} /> */}
      </Routes>
      Footer
    </div>
  );
}

export default App;

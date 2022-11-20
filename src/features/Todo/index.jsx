import React from "react";
import { Route, Routes, useParams } from "react-router-dom";
import ListPage from "./pages/ListPage";
import DetailPage from "./pages/DetailPage";
import NotFound from "../../components/NotFound";

TodoFeature.propTypes = {};

function TodoFeature(props) {
  const { id } = useParams();

  return (
    <div>
      TOTO SHARE UI
      <Routes>
        <Route path="">
          <Route index element={<ListPage />} />
          <Route path=":id" element={<DetailPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default TodoFeature;

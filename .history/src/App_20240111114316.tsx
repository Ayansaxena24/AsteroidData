import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FormInput from "./Form";
import BasicTable from "./Table";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" index element={<FormInput />} />
        <Route path="/" index element={<FormInput />} />
      </Routes>
    </Router>
  );
};

export default App;

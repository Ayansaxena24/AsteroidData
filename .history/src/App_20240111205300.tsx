import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FormInput from "./Form";
import BasicTable from "./Table";

class App extends Component {
  render() {
    <Router>
      <Routes>
        <Route path="/" index element={<FormInput />} />
        <Route path="/details" index element={<BasicTable />} />
      </Routes>
    </Router>
  );
};

export default App;

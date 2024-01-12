import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FormInput from "./Form";
import BasicTable from "./Table";
class App extends Component {
  componentDidMount(() => {
    this.props.navigate("/details)
  }) 
  }
  render() {
  return (
    <Router>
      <Routes>
        <Route path="/" index element={<FormInput />} />
        <Route path="/details" index element={<BasicTable />} />
      </Routes>
    </Router>
  );
  }
};

export function APPWithRouter(props){
  const navigate = useNavigate();
  return (<App navigate={navigate} ></App>)
}

export default App;

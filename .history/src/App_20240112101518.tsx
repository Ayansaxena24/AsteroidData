import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FormInput from './Form';
import BasicTable from './Table';

class App extends Component {
 componentDidMount() {
    setTimeout(() => {
      this.props.navigate("/details");
    }, 5000);
 }

 render() {
    return (
      <Router>
        <Routes>
          <Route path="/" exact element={<FormInput />} />
          <Route path="/details" element={BasicTable} />
        </Routes>
      </Router>
    );
 }
}

export function APPWithRouter(props) {
 const navigate = useNavigate();
 return <App navigate={navigate} />;
}

export default App;
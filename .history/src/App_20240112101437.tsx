import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Routes } from 'react-router-dom';
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
        <Switch>
          <Route path="/" exact component={FormInput} />
          <Route path="/details" component={BasicTable} />
        </Switch>
      </Router>
    );
 }
}

export function APPWithRouter(props) {
 const navigate = useNavigate();
 return <App navigate={navigate} />;
}

export default App;
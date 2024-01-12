import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FormInput from './Form';
import BasicTable from './Table';

interface IProps {
 navigate: () => void;
}

interface IState {
 navigateAfter: number;
}

class App extends Component<IProps, IState> {
 constructor(props: IProps) {
    super(props);
    this.state = {
      navigateAfter: 5000,
    };
 }

 componentDidMount() {
    setTimeout(() => {
      this.props.navigate();
    }, this.state.navigateAfter);
 }

 render() {
    return (
      <Router>
        <Switch>
          <Route path="/"  elsement={<FormInput />} />
          <Route path="/details" component={<BasicTable} />
        </Switch>
      </Router>
    );
 }
}

export function APPWithRouter(props: IProps) {
 const navigate = useNavigate();
 return <App navigate={navigate} />;
}

export default App;
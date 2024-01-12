import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import FormInput from './Form';
import BasicTable from './Table';

interface IProps {
 navigate: () => void;
}

interface IState {
 navigateAfter: number;
 redirect: boolean;
}

class App extends Component<IProps, IState> {
 constructor(props: IProps) {
    super(props);
    this.state = {
      navigateAfter: 5000,
      redirect: false,
    };
 }

 componentDidMount() {
    setTimeout(() => {
      this.props.navigate();
      this.setState({ redirect: true });
    }, this.state.navigateAfter);
 }

 render() {
    const { redirect } = this.state;
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={<FormInput />} />
          {redirect ? <Redirect to="/details" /> : <Route path="/details" component={<BasicTable />} />}
        </Switch>
      </Router>
    );
 }
}

export default App;
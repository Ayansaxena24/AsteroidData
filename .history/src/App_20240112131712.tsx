import { Component } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
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
      navigateAfter: 0,
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
    return (
      
          <Navigate to ="/" element={<FormInput />} />
          <Navigate path="/details" element={<BasicTable />} />
    );
 }
}

export default App;
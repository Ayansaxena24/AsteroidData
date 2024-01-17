import { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FormInput from './Form';
import BasicTable from './Table';

// interface IProps {
//  navigate: () => void;
// }

interface IState {
 navigateAfter: number;
 redirect: boolean;
}

class App extends Component<{} , IState> {
 constructor(props: IState) {
    super(props);
    this.state = {
      navigateAfter: 0,
      redirect: false,
    };
 }

 componentDidMount() {
    setTimeout(() => {
      this.setState({ redirect: true });
    }, this.state.navigateAfter);
 }

 render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<FormInput className="bg-cover overflow-clip bg-center"/>} />
          <Route path="/details" element={<BasicTable />} />
        </Routes>
      </Router>
    );
 }
}

export default App;
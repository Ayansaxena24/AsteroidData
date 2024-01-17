// __tests__/homepage.test.tsx
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';


configure({ adapter: new Adapter() });

describe('App', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<App useNavigate() />);
    expect(wrapper).toMatchSnapshot();
  });
});
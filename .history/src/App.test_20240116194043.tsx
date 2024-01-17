// __tests__/homepage.test.tsx
import { shallow } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
import App from './App';
Enzyme.configure({ adapter: new Adapter() })

// configure({ adapter: new Adapter() });

describe('App', () => {
  const wrapper = shallow(<App navigate={() => {}} />);
  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });
});
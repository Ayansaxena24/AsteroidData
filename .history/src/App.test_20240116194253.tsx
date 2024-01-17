// __tests__/homepage.test.tsx
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

configure({ adapter: new Adapter() })

// configure({ adapter: new Adapter() });

describe('App', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<App navigate={() => {}} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('renders without crashing', () => {
    const wrapper = shallow(<App navigate={() => {}} />);
    expect(wrapper.exists()).toBe(true);
  });
});
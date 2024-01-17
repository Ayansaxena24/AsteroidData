import { shallow, configure } from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import FormInput from "./Form";

configure({ adapter: new Adapter() });

describe("FormInput", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<Bros<FormInput navigate={() => {}} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("renders without crashing", () => {
    const wrapper = shallow(<FormInput navigate={() => {}} />);
    expect(wrapper.exists()).toBe(true);
  });
});
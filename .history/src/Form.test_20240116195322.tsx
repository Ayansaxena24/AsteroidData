import { shallow, configure } from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import FormInput from "./Form";
import { BrowserRouter } from "react-router-dom";

configure({ adapter: new Adapter() });

describe("FormInput", () => {
    beforeEach(() => {
       const wrapper = shallow(<FormInput navigate={() => {}} />);
      });

  it("renders correctly", () => {
    const wrapper = shallow(<BrowserRouter><FormInput navigate={() => {}} /></BrowserRouter>);
    expect(wrapper).toMatchSnapshot();
  });
  it("renders without crashing", () => {
    const wrapper = shallow(<BrowserRouter><FormInput navigate={() => {}} /></BrowserRouter>);
    expect(wrapper.exists()).toBe(true);
  });
});
import { shallow, configure } from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import FormInput from "./Form";
import { BrowserRouter } from "react-router-dom";

configure({ adapter: new Adapter() });

describe("FormInput", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<BrowserRouter><FormInput navigate={() => {}} /></BrowserRouter>);
    expect(wrapper).toMatchSnapshot();
  });
  it("renders without crashing", () => {
    const wrapper = shallow(<BrowserRouter><FormInput navigate={() => {}} /></BrowserRouter>);
    expect(wrapper.exists()).toBe(true);
  });
  it("renders a form", () => {
    const wrapper = shallow(<BrowserRouter><FormInput navigate={() => {}} /></BrowserRouter>);
    expect(wrapper.find("p").text()).toBe(true);
  });
    it("renders a button", () => {
        const wrapper = shallow(<BrowserRouter><FormInput navigate={() => {}} /></BrowserRouter>);
        const submitbutton = wrapper.find("button.submitbutton");
        submitbutton.simulate("click");
        expect(submitbutton.
    });
    it("renders a input", () => {
        const wrapper = shallow(<BrowserRouter><FormInput navigate={() => {}} /></BrowserRouter>);
        expect(wrapper.find("input").exists()).toBe(true);
    });
    
});
import { shallow, configure } from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import FormInput from "./Form";
import { BrowserRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";

configure({ adapter: new Adapter() });

describe("FormInput", () => {
  it("renders correctly", () => {
    const wrapper = shallow(
      <BrowserRouter>
        <FormInput navigate={() => {}} />
      </BrowserRouter>
    );
    expect(wrapper).toMatchSnapshot();
  });
  it("renders without crashing", () => {
    const wrapper = shallow(
      <BrowserRouter>
        <FormInput navigate={() => {}} />
      </BrowserRouter>
    );
    expect(wrapper.exists()).toBe(true);
  });
  it("renders a form", () => {
    const wrapper = shallow(
      <BrowserRouter>
        <FormInput navigate={() => {}} />
      </BrowserRouter>
    );
    expect(wrapper.find("form").text());
  });
  it("disables the button when input length is not 7", () => {
    const wrapper = shallow(<BrowserRouter><FormInput navigate={() => {}} /></BrowserRouter>);
    const submitButton = wrapper.find("button#submitbutton");

    act(() => {
      wrapper.find("input#inputfield").simulate("change", { target: { value: "123" } });
    });

    expect(submitButton.prop("disabled")).toBe(true);
  });
  it("renders a input", () => {
    const wrapper = shallow(
      <BrowserRouter>
        <FormInput navigate={() => {}} />
      </BrowserRouter>
    );
    expect(wrapper.find("input").exists()).toBe(true);
  });
});

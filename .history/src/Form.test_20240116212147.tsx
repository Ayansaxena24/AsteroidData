import { shallow, configure, mount } from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import FormInput from "./Form";
import { BrowserRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";

configure({ adapter: new Adapter() });

describe("FormInput", () => {
  let wrapper: any = null;

  beforeEach(() => {
    wrapper = shallow(
      <BrowserRouter>
        <FormInput navigate={() => {}} />
      </BrowserRouter>
    );
  });

  it("renders correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("renders without crashing", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("disables the button when input length is not 7", () => {
    const wrapper = mount(
      <BrowserRouter>
        <FormInput navigate={() => {}} />
      </BrowserRouter>
    );
  
    act(() => {
      // Find the input field and simulate a change event
      wrapper.find("input").simulate("change", {
        target: { value: "123" },
      });
    });
  
    // Re-render the component after the state change
    wrapper.update();
  
    // Assert that the button is disabled
    expect(wrapper.find("#submitbutton").prop("disabled")).toBe(true);
  });
  it("renders an input", () => {
    expect(wrapper.find("input#inputfield").exists()).toBe(true);
  });
});
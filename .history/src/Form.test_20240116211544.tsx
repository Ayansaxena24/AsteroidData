import { shallow, configure } from "enzyme";
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

  it("renders a form", () => {
    expect(wrapper.find("p").text());
  });

  it("disables the button when input length is not 7", () => {
    const submitButton = wrapper.find("button#submitbutton");

    act(() => {
      wrapper.find("input#inputfield").simulate("change", {
        target: { value: "123" },
      });
      wrapper.update();
    });

    expect(submitButton.prop("disabled")).toBe(true);
  });

  it("renders an input", () => {
    expect(wrapper.find("input#inputfield").exists()).toBe(true);
  });
});
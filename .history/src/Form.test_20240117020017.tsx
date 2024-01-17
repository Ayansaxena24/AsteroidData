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
      wrapper.find("input").simulate("change", {
        target: { value: "123" },
      });
    });
    
    wrapper.update();
    expect(wrapper.find("#submitbutton").prop("disabled")).toBe(true);
  });

  it("enables the button when input length is 7", () => {
    const wrapper = mount(
      <BrowserRouter>
        <FormInput navigate={() => {}} />
      </BrowserRouter>
    );

    act(() => {
      wrapper.find("input").simulate("change", {
        target: { value: "2000719" },
      });
    });

    wrapper.update();
    expect(wrapper.find("#submitbutton").prop("disabled")).toBe(false);
  });

    it("displays loading component when loading state is true", () => {
        const wrapper = mount(
        <BrowserRouter>
            <FormInput navigate={() => {}} />
        </BrowserRouter>
        );
    
        act(() => {
        wrapper.find("input").simulate("change", {
            target: { value: "2000719" },
        });
        });
    
        act(() => {
        wrapper.find("form").simulate("submit");
        });
    
        wrapper.update();
        expect(wrapper.find("loading").text().exists
    });
  
});

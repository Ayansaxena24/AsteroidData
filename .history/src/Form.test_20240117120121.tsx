import { shallow, configure, mount } from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import FormInput from "./Form";
import { BrowserRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";

configure({ adapter: new Adapter() });

// Mock the fetch function
const mockFetch = jest.fn();
global.fetch = mockFetch;

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

  it("Random Asteroid Button", () => {
    const wrapper = mount(
      <BrowserRouter>
        <FormInput navigate={() => {}} />
      </BrowserRouter>
    );

    const randomButton = wrapper.find("#randombutton");
    randomButton.simulate("click");
    wrapper.update();
    expect(wrapper.find("loading")).toBeTruthy();
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
    expect(wrapper.find("loading")).toBeTruthy();
  });


  it("gives error when a wrong 7 digit ID is entered", async () => {
    // Mock the fetch function
    jest.spyOn(global, "fetch").mockResolvedValue({
      ok: false,
    } as Response);

    // Spy on window.alert
    const alertSpy = jest.spyOn(window, "alert").mockImplementation(() => {});

    const wrapper = mount(
      <BrowserRouter>
        <FormInput navigate={() => {}} />
      </BrowserRouter>
    );

    act(() => {
      wrapper.find("input").simulate("change", {
        target: { value: "1111111" },
      });
    });

    wrapper.update();
    const randombutton = wrapper.find("button#randombutton");
    await act(async () => {
      randombutton.simulate("click");
    });
    wrapper.update();
    expect(alertSpy).toHaveBeenCalledWith(
      "Error fetching asteroid data! Please recheck the input ID"
    );
    alertSpy.mockRestore();
    jest.restoreAllMocks();
  });

  it('handles successful API fetch with in Input ID', async () => {
    const mockNavigation = { navigate : jest.fn()};
    
    
  }
  )

//     // Mock the fetch function
//     const spyWasCalled = jest.spyOn(global, 'fetch').mockResolvedValue({
//       ok: true,
//       json: async () => mockApiResponse,
//     } as Response);

//     const wrapper = mount(
//       <BrowserRouter>
//         <FormInput navigate={() => {}} />
//       </BrowserRouter>
//     );

//     act(() => {
//       wrapper.find('input').simulate('change', {
//         target: { value: '2000719' },
//       });

//       // Assuming your form has a submit button, you may simulate its click event
//       wrapper.find('form').simulate('submit');
//     });

//     wrapper.update();

//     // Ensure that alert was NOT called (no error)
//     expect(spyWasCalled).toHaveBeenCalled();

//     // You can assert other things based on a successful API response
//     // For example, check if the component state is updated correctly
// expect(spyWasCalled).toEqual(mockApiResponse);
//     // Restore all mock implementations
//     jest.restoreAllMocks();
  });

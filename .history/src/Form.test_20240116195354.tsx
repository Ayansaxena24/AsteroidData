import { shallow, configure } from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import FormInput from "./Form";
import toJSON from "enzyme-to-json";
import { BrowserRouter } from "react-router-dom";

configure({ adapter: new Adapter() });

describe("FormInput", () => {
    beforeEach(() => {
       const wrapper = shallow(<FormInput navigate={() => {}} />);
      });

  it("renders correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("renders without crashing", () => {
    expect(wrapper.exists()).toBe(true);
  });
});
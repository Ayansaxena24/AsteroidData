import App from "./App";
import { render, screen, fireEvent } from '@testing-library/react';

describe("App", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
  });
}
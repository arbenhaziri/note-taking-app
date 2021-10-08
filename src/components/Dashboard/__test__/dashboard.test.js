import React from "react";
import Dashboard from "..";
import CardView from "../../CardView";
import { render, unmountComponentAtNode } from "react-dom";
import * as redux from "react-redux";

const spySelector = jest.spyOn(redux, "useSelector");
const spyDispatch = jest.spyOn(redux, "useDispatch");
jest.mock("react-router", () => ({
  withRouter: jest.fn().mockImplementation((component) => {
    component.defaultProps = {
      ...component.defaultProps,
      router: { pathname: "mocked-path" },
    };
    return component;
  }),
}));

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe("Check dashboar on data Array empty", () => {
  it("should render", () => {
    const fakeData = {
      data: [],
      filteredData: [],
      isLoading: false,
      selectedNote: -2,
    };
    spySelector.mockReturnValue(fakeData);
    spyDispatch.mockReturnValue(() => {});
    render(<Dashboard />, container);
    expect(container.textContent).toBe("There are no notes stored");
  });
});

describe("Check dashboar on Data not empty", () => {
  it("should render child Component", () => {
    const fakeData = {
      data: [
        {
          name: "firstNote",
          text: "firstNote",
          id: "43d54b4d-75da-4599-8c0f-9793a76264d4",
        },
      ],
      filteredData: [
        {
          name: "firstNote",
          text: "firstNote",
          id: "43d54b4d-75da-4599-8c0f-9793a76264d4",
        },
      ],
      isLoading: false,
      selectedNote: -2,
    };
    spySelector.mockReturnValue(fakeData);
    spyDispatch.mockReturnValue(() => {});
    render(<Dashboard />, container);
  });
});

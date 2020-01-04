import React from "react"
import { shallow, mount } from "enzyme"

import Page1Component from "./page1.component"

describe("<Page1Component />", () => {
  it("renders correctly", () => {
    const tree = shallow(<Page1Component />)
    expect(tree).toMatchSnapshot()
  })
  it("it should contain an input", () => {
    const tree = shallow(<Page1Component />)
    // const instance = tree.getInstance()
    // expect(getByTestId(tree.container, "input")).toContain("input")
    expect(tree.find("input")).toHaveLength(1)
  })
  it("it should contain a button", () => {
    const tree = shallow(<Page1Component />)
    // const instance = tree.getInstance()
    // expect(getByTestId(tree.container, "input")).toContain("input")
    console.log(tree.find("button"))
    expect(tree.find("button")).toHaveLength(1)
  })
  it("it should show an error text when button clicked and input is empty", () => {
    const tree = mount(<Page1Component />)
    console.log("text", tree.text())
    tree.find("input").simulate("change", { target: { value: "" } })

    tree.find("button").simulate("click")
    console.log("text", tree.text())

    expect(tree.text()).toContain("not empty")
  })
})

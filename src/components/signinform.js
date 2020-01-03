import React, { Component } from "react"
import { Form, Icon, Input, Button, Checkbox } from "antd"
import "./signin.css"
class Signinform extends Component {
  //   componentDidMount() {
  //     // To disable submit button at the beginning.
  //     this.props.form.validateFields()
  //   }

  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values)
      }
    })
  }
  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <div style={{ height: "100vh" }}>
        <Form
          onSubmit={this.handleSubmit}
          style={{ maxWidth: "300px", margin: "0 auto", padding: "20px" }}
        >
          <Form.Item>
            {getFieldDecorator("username", {
              rules: [
                { required: true, message: "Please input your username!" },
              ],
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Username"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("password", {
              rules: [
                { required: true, message: "Please input your Password!" },
              ],
            })(
              <Input
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                placeholder="Password"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("remember", {
              valuePropName: "checked",
              initialValue: true,
            })(<Checkbox>Remember me</Checkbox>)}
            <a style={{ float: "right" }} href="">
              Forgot password
            </a>
            <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
              Log in
            </Button>
            Or <a href="">register now!</a>
          </Form.Item>
        </Form>
      </div>
    )
  }
}
export default Form.create()(Signinform)

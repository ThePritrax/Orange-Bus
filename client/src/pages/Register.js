import React from "react";
import { Form } from "antd";
import { Link } from "react-router-dom";

function Register() {
  const onFinish = async (values) => {
    console.log(values);
  };

  return (
    <div className="h-screen d-flex justify-content-center align-items-center">
      <div className="w-400 card p-3">
        <h1 className="text-3xl">OrangeBus - Register</h1>
        <hr></hr>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item label="Name" name="Name">
            <input type="text" />
          </Form.Item>
          <Form.Item label="Email" name="Email">
            <input type="text" />
          </Form.Item>
          <Form.Item label="Password" name="Password">
            <input type="password" />
          </Form.Item>
          <div className="d-flex justify-content-between align-items-centerS">
            <Link to="/login">Click Here To Login</Link>
            <button className="secondary-btn" type="submit">
              Register
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Register;

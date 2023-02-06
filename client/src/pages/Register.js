import React from 'react'
import {Form} from 'antd';
import {Link} from 'react-router-dom';

function Register() {
  return (
    <div className='h-screen d-flex justify-content-center align-items-center'>
        <div className='w-400 card p-3'>
            <h1 className='text-3xl'>OrangeBus - Register</h1>
            <hr></hr>
        <Form layout='vertical'>
            <Form.Item label='Name'>
                <input type="text"/>
            </Form.Item>
            <Form.Item label='Email'>
                <input type="text"/>
            </Form.Item>
            <Form.Item label='Password'>
                <input type="text"/>
            </Form.Item>
            <div className="d-flex justify-content-between align-items-center my-3">
            <Link to="/login">Click Here To Login</Link>
            <button className="secondary-btn" type="submit">
              Register
            </button>
          </div>
        </Form>
        </div>
    </div>
  )
}

export default Register
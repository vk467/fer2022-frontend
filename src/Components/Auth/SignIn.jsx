import React from 'react';
import { Form, Input, Button} from 'antd';
import { useNavigate } from 'react-router-dom';

const SignIn=()=>{
    let navigate = useNavigate();
    const RouteChange = () =>{
        navigate('/home');
    }
    return(
        <div>
            <Form name="SignIn Form" 
            initialValues={{ remember: true, } }
            // onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
            autoComplete="off"
            layout = "vertical"
            onSubmit = {RouteChange}
            >
            <Form.Item className='mt-3'  label="Username"  name="username"
                rules={[ {required: true, message: 'Please input your username!', },  ]}
            >

                <Input />
            </Form.Item>

            <Form.Item label="Password"  name="password"
                rules={[{required: true, message: 'Please input your password!', }, ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item className='text-center' >
                <Button type="primary" htmlType="submit" onClick={RouteChange}>
                Submit
                </Button>
                <br/>
                Don't have an account.<Button type="link" htmlType="button">
                SignUp
                </Button>
            </Form.Item>           

            </Form>

        </div>
    )
}

export default SignIn;
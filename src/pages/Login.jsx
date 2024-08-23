import React, { useState } from 'react';
import videoBg from '../assets/videoBg.mp4';
import { Form, Input, Button, notification } from 'antd';
import { Link, NavLink } from 'react-router-dom';
import './loginStyle.css';
import { loginAPI } from '../service/api_service';
import { useNavigate } from "react-router-dom";



const LoginPage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();


    const onFinish = async (values) => {
        setIsLoading(true);
        //call API login
        const res = await loginAPI(values.email, values.password);
        if (res.data) {
            notification.success(
                {
                    message: "Login successfully"
                }
            )
            //redirect into HomePage
            navigate("/");
        } else {
            notification.error(
                {
                    message: "Login failed",
                    description: res.message
                }
            )
        }
        setIsLoading(false);
    };

    return (
        <div className="login-page">
            <video className="video-bg" src={videoBg} autoPlay loop muted />
            <div className="login-form-container">
                <Form
                    name="login"
                    onFinish={onFinish}
                    className="login-form"
                >
                    <h2>Login</h2>
                    <Form.Item
                        name="email"
                        rules={[{ required: true, message: 'Please input your email!' }]}
                    >
                        <Input placeholder="Email" />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password placeholder="Password" />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button" loading={isLoading}>
                            Log in
                        </Button>
                    </Form.Item>


                    <Form.Item>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '30px' }}>
                            <Link to={"/register"}><u>Register Now</u></Link>
                            <Link to={"/"}><u>Back to homepage</u></Link>

                        </div>
                    </Form.Item>


                </Form>
            </div>
        </div>
    );
};

export default LoginPage;

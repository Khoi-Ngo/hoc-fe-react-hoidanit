import React from 'react';
import { Button, Form, Input, message, notification, Space } from 'antd';
import { registerUserAPI } from '../service/api_service';
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
    const usageList = [
        "Just for fun",
        "For business",
        "For study"
    ];

    //! In this code we DO NOT control the fields -> it auto re-render by its lib

    //! name of FormItem usually controlled by useState BUT NOT HERE 


    const [form] = Form.useForm();
    const navigate = useNavigate();

    const onFinish = async (values) => {
        //render random usage
        if (!values.usingTarget) {
            const randomUsage = usageList[Math.floor(Math.random() * usageList.length)];
            form.setFieldValue("usingTarget", randomUsage);
        }
        const res = await registerUserAPI(
            values.fullName,
            values.email,
            values.password,
            values.phone
        );

        if (res.data) {
            //notification
            notification.success({
                message: "Register Successfully",
                description: JSON.stringify(
                    form.getFieldValue()
                )
            })
            //redirect
            navigate("/login");
        } else {
            notification.error(
                {
                    message: "Register user error",
                    description: JSON.stringify(res.message)
                }
            )
        }
    };

    const onReset = () => {
        form.resetFields();
    };

    return (
        <div style={{
            backgroundImage: "url('https://www.1stformationsblog.co.uk/wp-content/uploads/2022/09/Shutterstock_1079243414.jpg')",
            minHeight: "100vh",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            padding: "40px"
        }}>
            <div
                className="register-form-container"
                style={{
                    width: "30%",
                    backgroundColor: "#ffffff",
                    padding: "60px",
                    borderRadius: "35px",
                    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
                    marginLeft: "35px"
                }}
            >
                <Form
                    form={form}
                    onFinish={onFinish}
                    layout="vertical"
                    style={{
                        maxWidth: "100%",
                    }}
                >
                    <Form.Item
                        name="fullName"
                        label="Full Name"
                        rules={[
                            { required: true, message: "Please enter your full name" },
                        ]}
                    >
                        <Input style={{ borderRadius: "6px", padding: "10px" }} />
                    </Form.Item>
                    <Form.Item
                        name="email"
                        label="Email"
                        rules={[
                            {
                                required: true,
                                type: "email",
                                message: "Please enter a valid email address"
                            },
                        ]}
                    >
                        <Input style={{ borderRadius: "6px", padding: "10px" }} />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        label="Password"
                        rules={[
                            { required: true, message: "Please enter your password" },
                        ]}
                    >
                        <Input.Password style={{ borderRadius: "6px", padding: "10px" }} />
                    </Form.Item>
                    <Form.Item
                        name="phone"
                        label="Phone"
                        rules={[
                            {
                                required: true,
                                // type: "number",
                                pattern: new RegExp(/\d+/g),
                                message: "Wrong format!"
                            },
                        ]}
                    >
                        <Input style={{ borderRadius: "6px", padding: "10px" }} />
                    </Form.Item>

                    <Form.Item
                        name="usingTarget"
                        label="What do you want on this application ?"
                    >
                        <Input style={{ borderRadius: "6px", padding: "10px" }} />
                    </Form.Item>
                    <Form.Item>
                        <Space style={{ display: "flex", justifyContent: "center" }}>
                            <Button
                                type="primary"
                                htmlType="submit"
                                // htmlType mapping with on Finish 
                                style={{
                                    borderRadius: "6px",
                                    padding: "0 30px",
                                    fontWeight: "bold",
                                }}
                            >
                                Submit
                            </Button>
                            <Button
                                htmlType="button"
                                onClick={onReset}
                                style={{
                                    borderRadius: "6px",
                                    padding: "0 30px",
                                    marginLeft: "10px",
                                }}
                            >
                                Reset
                            </Button>
                        </Space>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}

export default RegisterPage;

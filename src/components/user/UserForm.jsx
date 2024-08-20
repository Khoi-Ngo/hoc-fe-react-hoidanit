import { Button, Input, message, notification } from "antd";
import './UserForm.css';
import { useState } from "react";
import { createUserAPI } from "../../service/api_service";




const UserForm = () => {
    //declaring state variables

    const [fullName, setFullName] = useState(``);
    const [email, setEmail] = useState(``);
    const [password, setPassword] = useState(``);
    const [phone, setPhone] = useState(``);

    const handleOnClick = async () => {
        let response = await createUserAPI(fullName, email, password, phone);
        // console.log(`Check response promise from axios: ${response.data.data}`);
        if (response.data != null) {
            notification.success(
                {
                    message: "created user",
                    description: "Tạo mới user thành công"
                }
            );
        }
    }

    return (
        <>
            <div className="user-form">
                <div>
                    <span>Full name</span>
                    <Input placeholder="Input full name"
                        onChange={(event) => {
                            setFullName(event.target.value);
                        }}
                    />
                </div>
                <div>
                    <span>Email</span>
                    <Input placeholder="Input email"
                        onChange={(event) => {
                            setEmail(event.target.value);
                        }} />
                </div>
                <div>
                    <span>Password</span>
                    <Input.Password placeholder="Input password"
                        onChange={(event) => {
                            setPassword(event.target.value);
                        }} />
                </div>
                <div>
                    <span>Phone number</span>
                    <Input placeholder="Phone number"
                        onChange={(event) => {
                            setPhone(event.target.value);
                        }} />
                </div>
                <div>
                    <Button type='primary'
                        onClick={handleOnClick}
                    >Create User</Button>
                </div>
            </div>
        </>

    );
}

export default UserForm;
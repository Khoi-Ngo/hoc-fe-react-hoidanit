import { Button, Input } from "antd";
import './UserForm.css';
import { useState } from "react";


const UserForm = () => {
    //declaring state variables

    const [fullName, setFullName] = useState(``);
    const [email, setEmail] = useState(``);
    const [password, setPassword] = useState(``);
    const [phoneNumber, setPhoneNumber] = useState(``);


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
                            setPhoneNumber(event.target.value);
                        }} />
                </div>
                <div>
                    <Button type='primary'
                        onClick={() => {
                            //logging the value get
                            console.log("Check: ", { fullName, email, password, phoneNumber });
                        }}
                    >Create User</Button>
                </div>
            </div>
        </>

    );
}

export default UserForm;
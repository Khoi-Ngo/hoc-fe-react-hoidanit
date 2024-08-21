import { Button, Input, message, Modal, notification } from "antd";
import './UserForm.css';
import { useState } from "react";
import { createUserAPI } from "../../service/api_service";
import { ExclamationCircleFilled } from "@ant-design/icons";



const UserForm = (props) => {
    //declaring state variables

    const { loadUser } = props;
    const [fullName, setFullName] = useState(``);
    const [email, setEmail] = useState(``);
    const [password, setPassword] = useState(``);
    const [phone, setPhone] = useState(``);
    const [isModalOpen, setIsModelOpen] = useState(false);

    const handleOnClick = () => {
        setIsModelOpen(true);
    };

    const resetAndClearUserCreateModal = () => {
        setFullName(null);
        setEmail(null);
        setPassword(null);
        setPhone(null);
        setIsModelOpen(false);
    };




    const handleOnClickOKCreateModal = async () => {
        let response = await createUserAPI(fullName, email, password, phone);
        // console.log(`Check response promise from axios: ${response.data.data}`);
        if (response.data != null) {//after going through interceptor the response 
            notification.success(
                {
                    message: "created user",
                    description: "Tạo mới user thành công"
                }
            );

        } else {
            notification.error({
                message: "Cannot create user",
                description: JSON.stringify(response.message)
            })
        }
        //close modal
        await loadUser();
        resetAndClearUserCreateModal();
    };


    const handleCancelClickModalCreate = () => {
        Modal.confirm({
            title: 'Confirm',
            icon: <ExclamationCircleFilled />,
            okText: 'Yes, Cancel',
            cancelText: 'No, Continue',
            onOk: () => {
                resetAndClearUserCreateModal();
                notification.info({
                    message: 'Action Cancelled',
                    description: 'The form has been closed.',
                });
            },
            onCancel: () => {
                notification.info({
                    message: 'Continue Editing',
                    description: 'You can continue filling out the form.',
                });
            },
        });

    };

    return (
        <>
            <div className="user-form">

                <div>
                    <Button type='primary'
                        onClick={handleOnClick}
                    >Create User</Button>
                </div>

                <Modal title="Create User Form"
                    open={isModalOpen}
                    onOk={handleOnClickOKCreateModal}
                    onCancel={handleCancelClickModalCreate}
                    maskClosable={false}
                    okText={"Yes, Create this user !"}
                    cancelText={"Just kidding, no need create!"}
                >
                    <div>
                        <span>Full name</span>
                        <Input value={fullName}
                            onChange={(event) => {
                                setFullName(event.target.value);
                            }}
                        />
                    </div>
                    <div>
                        <span>Email</span>
                        <Input value={email}
                            onChange={(event) => {
                                setEmail(event.target.value);
                            }} />
                    </div>
                    <div>
                        <span>Password</span>
                        <Input.Password value={password}
                            onChange={(event) => {
                                setPassword(event.target.value);
                            }} />
                    </div>
                    <div>
                        <span>Phone number</span>
                        <Input value={phone}
                            onChange={(event) => {
                                setPhone(event.target.value);
                            }} />
                    </div>
                </Modal>



            </div>
        </>

    );
}

export default UserForm;



import { Button, Input, message, Modal, notification } from "antd";
import './UserForm.css';
import { useEffect, useState } from "react";
import { createUserAPI, updateUserAPI } from "../../service/api_service";
import { ExclamationCircleFilled } from "@ant-design/icons";


const UpdateForm = (props) => {
    const { isModalUpdateOpen, setIsModalUpdateOpen, dataUpdate, setDataUpdate, loadUser } = props;
    const [id, setId] = useState("");
    const [phone, setPhone] = useState("");
    const [fullName, setFullName] = useState("");

    //UseEffect
    //next dataUpdate != prev dataUpdate
    useEffect(() => {
        if (dataUpdate) {
            setId(dataUpdate._id)
            setFullName(dataUpdate.fullName);
            setPhone(dataUpdate.phone);
        }
    }, [dataUpdate])



    //collapse modal update form

    const resetAndClearUserCreateModal = () => {
        setDataUpdate(null);
        setIsModalUpdateOpen(false);
    };


    const handleOnClickOKUpdateModal = async () => {
        // console.log("Check data update: ", dataUpdate);
        // console.log("Check ", {id, fullName, phone});

        let response = await updateUserAPI(id, fullName, phone);



        // console.log(`Check response promise from axios: ${response.data.data}`);
        if (response.data != null) {//after going through interceptor the response 
            notification.success(
                {
                    message: "updated user",
                    description: "Cập nhật user thành công"
                }
            );

        } else {
            notification.error({
                message: "Cannot update user",
                description: JSON.stringify(response.message)
            })
        }
        //close modal
        resetAndClearUserCreateModal();
        await loadUser();
    };


    return (<>
        <div className="user-form">


            <Modal title="Update user form"
                open={isModalUpdateOpen}
                onOk={handleOnClickOKUpdateModal}
                onCancel={() => {
                    resetAndClearUserCreateModal();
                }}
                maskClosable={false}
                okText={"SAVE !!!"}
                cancelText={"CANCEL"}
            >

                {/* ID */}
                <div>
                    <span>Id</span>
                    <Input value={id}
                        disabled />
                </div>
                {/* Full name */}
                <div>
                    <span>Full name</span>
                    <Input value={fullName}
                        onChange={(event) => {
                            setFullName(event.target.value);
                        }}
                    />
                </div>

                <div>
                    <span>Phone number</span>
                    <Input
                        value={phone}
                        onChange={(event) => { setPhone(event.target.value) }}
                    />
                </div>

            </Modal>



        </div>
    </>
    );
}


export default UpdateForm;
import { useContext, useEffect, useState } from "react";
import { Card, Avatar, Space, Button, Modal, Input, notification } from "antd";
import { AuthContext } from "../components/auth_context";
import { Form, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { fetchAllUsersAPIVerHAHA, updateUserAPI, updateUserAPIVer02, uploadImageAPI } from "../service/api_service";



export const ProfilePage = ({ fetchUserInfo }) => {



    const { userLogin, setUserLogin } = useContext(AuthContext);
    const { id, role, email } = userLogin;
    const [phone, setPhone] = useState(userLogin.phone);
    const [fullName, setFullName] = useState(userLogin.fullName);
    const navigate = useNavigate();
    const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
    const [isChangeActionShow, setIsChangeActionShow] = useState(true);
    const [tempURLImage, setTempURLImage] = useState();
    const [fileUploaded, setFileUploaded] = useState();
    const [avatar, setAvatar] = useState(userLogin.avatar);



    //refresh token alternative


    const handleUploadAvatar = (event) => {

        //! This is how to get a single file
        //get the data from the event
        const selectedFile = event.target.files[0];
        setFileUploaded(selectedFile);
        const URLImage = URL.createObjectURL(selectedFile);

        //change the image in the avatar to temporarily
        setTempURLImage(URLImage);

        //Save ---- Change
        setIsChangeActionShow(false);
    }


    const handleRequestUpdateAvatar = async () => {
        //call the API upload file
        const resUpload = await uploadImageAPI(fileUploaded, "avatar");
        if (resUpload.data != null) {
            notification.success(
                {
                    message: "Uploaded success :D",
                }
            );
        } else {
            notification.error({
                message: "Cannot upload",
                description: JSON.stringify(resUpload.message)
            })
        }
        return resUpload.data.fileUploaded;
    }
    const handleCancelUpdateAvatar = () => {
        setIsChangeActionShow(true);

        setTempURLImage(null);

    }

    const handleUpdateUser = async (newAvatar) => {
        //call the API update user
        const resUpdate = await updateUserAPIVer02(id, fullName, phone, newAvatar);

        if (resUpdate.data != null) {
            notification.success(
                {
                    message: "Updated success :D",
                }
            );
        } else {
            notification.error({
                message: "Cannot update",
                description: JSON.stringify(resUpdate.message)
            })
        }

        //reload and some action
        setIsChangeActionShow(true);
        setTempURLImage(null);
        setUserLogin(prevState => ({
            ...prevState,
            avatar: newAvatar
        }));
        setAvatar(newAvatar);

    }


    const handleOnClickOKUpdateModal = async () => {
        const response = await updateUserAPI(id, fullName, phone);
        if (response.data != null) {//after going through interceptor the response 
            notification.success(
                {
                    message: "updated user",
                    description: "Cập nhật user thành công"
                }
            );
            setUserLogin(prevState => ({
                ...prevState,
                fullName: fullName,
                phone: phone
            }));


        } else {
            notification.error({
                message: "Cannot update user",
                description: JSON.stringify(response.message)
            })
        }
        //close modal
        setIsModalUpdateOpen(false);
    }



    //handleUpdateClick
    const handleUpdateClick = () => {
        setIsModalUpdateOpen(true);
    }





    return (
        <> <Card
            bordered={false}
            style={{
                width: '500px',
                margin: "auto",
                padding: 24,
                borderRadius: 12,
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                backgroundColor: "#f9f9f9",
            }}
        >
            <Space direction="vertical" size="large" align="center" style={{ width: "100%", marginBottom: '30px' }}>
                {isChangeActionShow && (
                    <>
                        <Avatar
                            size={64}
                            src={`${import.meta.env.VITE_BACKEND_URL1}/images/avatar/${avatar}`}
                            alt="User Avatar"
                            style={{
                                borderRadius: '50%',
                                border: '0.3px solid black',
                            }}
                        />
                        <label
                            style={{ marginTop: 10, cursor: 'pointer', color: 'gray' }}
                            htmlFor="btnUpload"
                        >
                            Change avatar
                        </label>
                        <input
                            type="file"
                            hidden
                            id="btnUpload"
                            onChange={(event) => handleUploadAvatar(event)}
                        />
                    </>
                )}
                {!isChangeActionShow && (
                    <>
                        <Avatar
                            size={64}
                            src={tempURLImage}
                            alt="User Avatar"
                            style={{
                                borderRadius: '50%',
                                border: '0.3px solid black',
                            }}
                        />
                    </>
                )}



                <div className="role-field"><b>Role: {role}</b></div>

            </Space>
            {/* Other text fields below */}
            <div className="text-user-info-container"
                style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}
            >
                <b style={{ display: 'block' }}>ID:</b>
                <p style={{ display: 'block' }}>{id}</p>
                <b style={{ display: 'block' }}>Full name:</b>
                <p style={{ display: 'block' }}>{fullName}</p>
                <b style={{ display: 'block' }}>Email:</b>
                <p style={{ display: 'block' }}>{email}</p>
                <b style={{ display: 'block' }}>Phone number:</b>
                <p style={{ display: 'block' }}>{phone}</p>

            </div>

            {/* User action here */}
            <div className="profile-user-action" style={{ display: 'flex', justifyContent: 'space-between', marginTop: '30px', border: 'none' }}>
                {!isChangeActionShow ? (
                    <>

                        <button type="button" className="btn btn-secondary" style={{ margin: '5px' }}
                            onClick={(event) => {
                                handleCancelUpdateAvatar();
                            }}
                        >Cancel</button>
                        <button type="button" className="btn btn-success" style={{ margin: '5px' }}
                            onClick={async () => {
                                const newAvatar = await handleRequestUpdateAvatar();
                                await handleUpdateUser(newAvatar);
                            }}
                        >Save</button>

                    </>

                ) : (
                    <>
                        <Button type="default" onClick={() => {
                            navigate("/");
                        }} >
                            Back to home
                        </Button>
                        <Button type="primary" onClick={() => {
                            handleUpdateClick();
                        }}>
                            Update profile
                        </Button>
                    </>)}

            </div>
        </Card>



            {/* Dynamic modal below */}

            <div className="user-form">


                <Modal title="Update user form"
                    open={isModalUpdateOpen}
                    onOk={handleOnClickOKUpdateModal}
                    onCancel={() => {
                        setIsModalUpdateOpen(false);
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
};



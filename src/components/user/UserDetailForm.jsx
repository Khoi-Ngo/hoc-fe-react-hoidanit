import { Avatar, Modal, notification } from "antd";
import './UserForm.css';
import { useEffect, useState } from "react";
import { updateUserAPIVer02, uploadImageAPI } from "../../service/api_service";

const UserDetailForm = (props) => {
    const { isInfoModalOpen, setIsInfoModalOpen, dataUserDetail, setDataUserDetail, loadUser } = props;

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [avatar, setAvatar] = useState('');
    const [_id, setId] = useState();

    const [isChangeActionShow, setIsChangeActionShow] = useState(true);
    const [tempURLImage, setTempURLImage] = useState();
    const [fileUploaded, setFileUploaded] = useState();
    const [isUpdatedAvatar, setIsUpdatedAvatar] = useState(false);

    useEffect(() => {
        if (dataUserDetail) {
            setAvatar(dataUserDetail.avatar);
            setPhone(dataUserDetail.phone);
            setEmail(dataUserDetail.email);
            setFullName(dataUserDetail.fullName);
            setId(dataUserDetail._id);
        }
    }, [dataUserDetail]);

    const handleCloseInfoModal = async () => {
        setDataUserDetail(null);
        setIsInfoModalOpen(false);
        setIsChangeActionShow(true);
        setTempURLImage(null);

        if (isUpdatedAvatar) {
            await loadUser();
        }

    };



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
        setDataUserDetail(null);
        setIsChangeActionShow(true);
        setTempURLImage(null);

    }

    const handleUpdateUser = async (newAvatar) => {
        //call the API update user
        const resUpdate = await updateUserAPIVer02(_id, fullName, phone, newAvatar);
        console.log({ _id, fullName, phone, newAvatar });

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
        setDataUserDetail(null);
        setIsChangeActionShow(true);
        setTempURLImage(null);
        setIsUpdatedAvatar(true);
        setDataUserDetail({ fullName, phone, avatar: newAvatar, email });
    }



    return (
        <div className="user-detail-form">
            <Modal
                title="User Information"
                open={isInfoModalOpen}
                onOk={handleCloseInfoModal}
                onCancel={handleCloseInfoModal}
                cancelButtonProps={{ style: { display: 'none' } }}  // Hide the Cancel button
                okButtonProps={{ style: { display: 'none' } }}
                okText="SAVE"
                maskClosable={true}
            >


                <div className="user-avatar" style={{ textAlign: 'center', marginBottom: 20, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                    {isChangeActionShow && (
                        <>
                            <Avatar
                                size={64}
                                src={`${import.meta.env.VITE_BACKEND_URL1}/images/avatar/${avatar}`}
                                alt="User Avatar"
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
                            />
                        </>
                    )}
                </div>



                <div className="user-info">
                    <p><strong>Full Name:</strong> {fullName}</p>
                    <p><strong>Email:</strong> {email}</p>
                    <p><strong>Phone:</strong> {phone}</p>
                </div>

                <div style={{ display: "flex", justifyContent: "flex-end", margin: '20px' }}>
                    {!isChangeActionShow && (
                        <>
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
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
                            </div>
                        </>

                    )}

                </div>

            </Modal>
        </div>
    );
};

export default UserDetailForm;

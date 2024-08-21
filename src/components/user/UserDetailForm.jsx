import { Avatar, Modal } from "antd";
import './UserForm.css';
import { useEffect, useState } from "react";

const UserDetailForm = (props) => {
    const { isInfoModalOpen, setIsInfoModalOpen, dataUserDetail, setDataUserDetail } = props;

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [avatar, setAvatar] = useState('');

    useEffect(() => {
        if (dataUserDetail) {
            setAvatar(dataUserDetail.avatar);
            setPhone(dataUserDetail.phone);
            setEmail(dataUserDetail.email);
            setFullName(dataUserDetail.fullName);
        }
    }, [dataUserDetail]);

    const handleCloseInfoModal = () => {
        setDataUserDetail(null);
        setIsInfoModalOpen(false);
    };

    return (
        <div className="user-detail-form">
            <Modal
                title="User Information"
                open={isInfoModalOpen}
                onOk={handleCloseInfoModal}
                onCancel={handleCloseInfoModal}
                cancelButtonProps={{ style: { display: 'none' } }}  // Hide the Cancel button
                okText="OK"
                maskClosable={true}
            >
                <div className="user-avatar" style={{ textAlign: 'center', marginBottom: 20 }}>
                    <Avatar size={64} src={avatar} alt="User Avatar" />
                </div>
                <div className="user-info">
                    <p><strong>Full Name:</strong> {fullName}</p>
                    <p><strong>Email:</strong> {email}</p>
                    <p><strong>Phone:</strong> {phone}</p>
                </div>
            </Modal>
        </div>
    );
};

export default UserDetailForm;

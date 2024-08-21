import React, { useState } from 'react';
import { Table } from 'antd';
import { Space, Tag, Modal, notification } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import UpdateForm from './UpdateForm';
import UserDetailForm from './UserDetailForm';
import { deleteUserAPI } from "../../service/api_service";
import { ExclamationCircleFilled } from "@ant-design/icons";

//TODO: Check to delete correctly


const UserTable = (props) => {
    let { dataUsers, loadUser } = props;
    const [dataUpdate, setDataUpdate] = useState();
    const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
    const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
    const [dataUserDetail, setDataUserDetail] = useState(null);
    const [_idDelete, setIdDelete] = useState(``);

    //! Handling delete click
    const handleDelete = async () => {
        //call API + reload
        console.log("Check id to delete :", _idDelete);
        let res = await deleteUserAPI(_idDelete);
        notification.info({
            message: 'Deleted user'
        });

        //reload page
        await loadUser();

    }

    const confirmDelete = () => {
        Modal.confirm({
            title: 'Confirm',
            icon: <ExclamationCircleFilled />,
            okText: 'Yes, Delete the user',
            cancelText: 'No, Discard please',
            onOk: () => { handleDelete(); },
            onCancel: () => {
                notification.info({
                    message: 'Rollback deleting',
                    description: 'The delete action is NOT conducted !',
                });
            },
        });

    }

    //! ====================


    // var check = false;
    const columns = [
        {
            title: 'ID',
            dataIndex: '_id',
            render: (_, record) => {
                return (
                    <a href='#' onClick={() => { setIsInfoModalOpen(true); setDataUserDetail(record) }}>{record._id}</a>
                )
            }

        },
        {
            title: 'Avatar',
            dataIndex: 'avatar',
            render: (avatar) => (
                <img
                    src={avatar}
                    alt="avatar"
                    style={{ width: 50, height: 50, borderRadius: '50%' }}
                />
            ),

        },
        {
            title: 'Full name',
            dataIndex: 'fullName',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Role',
            dataIndex: 'role',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <div style={{ display: "flex", gap: "20px" }}>
                    <EditOutlined
                        onClick={() => {
                            setDataUpdate(record);
                            setIsModalUpdateOpen(true);
                        }}
                        style={{ cursor: "pointer", color: "orange" }} />

                    <DeleteOutlined
                        onClick={() => {
                            setIdDelete(record._id);
                            confirmDelete();
                        }}
                        style={{ cursor: "pointer", color: "red" }} />
                </div>
            ),
        },

    ];



    return (<><Table
        columns={columns}
        dataSource={dataUsers}
        rowKey={"_id"}
    />


        <UpdateForm
            isModalUpdateOpen={isModalUpdateOpen}
            setIsModalUpdateOpen={setIsModalUpdateOpen}
            dataUpdate={dataUpdate}
            setDataUpdate={setDataUpdate}
            loadUser={loadUser}
        ></UpdateForm>

        <UserDetailForm
            isInfoModalOpen={isInfoModalOpen}
            setIsInfoModalOpen={setIsInfoModalOpen}
            dataUserDetail={dataUserDetail}
            setDataUserDetail={setDataUserDetail}
        >
        </UserDetailForm>

    </>);
}

export default UserTable;
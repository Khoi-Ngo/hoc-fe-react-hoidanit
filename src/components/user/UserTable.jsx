import React, { useState } from 'react';
import { Table } from 'antd';
import { Space, Tag, Modal, notification } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import UpdateForm from './UpdateForm';
import UserDetailForm from './UserDetailForm';
import { deleteUserAPI } from "../../service/api_service";
import { ExclamationCircleFilled } from "@ant-design/icons";

//TODO: try to use pagination supported by backend and antd

const UserTable = (props) => {
    let { dataUsers, loadUser } = props;
    const [dataUpdate, setDataUpdate] = useState();
    const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
    const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
    const [dataUserDetail, setDataUserDetail] = useState(null);

    //! Handling delete click
    const handleDelete = async (idDelete) => {
        //call API + reload
        let res = await deleteUserAPI(idDelete);
        if (res && (res.statusCode >= 200 && res.statusCode < 300)) {
            notification.success({
                message: "Deleted already"
            });
            //reload page
            await loadUser();
        } else {
            notification.error({
                message: "Error delete",
                description: JSON.stringify(res.message)
            })
        }

    }

    const confirmDelete = (idDelete) => {

        Modal.confirm({
            title: 'Confirm',
            icon: <ExclamationCircleFilled />,
            okText: 'Yes, Delete the user',
            cancelText: 'No, Discard please',
            onOk: () => { handleDelete(idDelete); },
            onCancel: () => {
                notification.info({
                    message: 'Rollback deleting',
                    description: 'The delete action is NOT conducted !',
                });
            },
        });

    }

    //! ====================


    const columns = [
        {
            title: "Index",
            render: (_, record, index) => {
                return (
                    <>{index + 1}</>
                )
            }
        },



        {
            title: 'ID',
            dataIndex: '_id',
            render: (_, record) => {
                return (
                    <a href='#' onClick={() => { setIsInfoModalOpen(true); setDataUserDetail(record); }}>{record._id}</a>
                )
            }

        },
        {
            title: 'Avatar',
            dataIndex: 'avatar',
            render: (avatar) => (
                <img
                    src={`${import.meta.env.VITE_BACKEND_URL1}/images/avatar/${avatar}`}
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
                            confirmDelete(record._id);

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
            loadUser={loadUser}
        >
        </UserDetailForm>

    </>);
}

export default UserTable;
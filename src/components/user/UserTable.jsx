import React from 'react';
import { Table } from 'antd';

const UserTable = (props) => {
    let {dataUsers} = props;
    // var check = false;
    const columns = [
        {
            title: 'ID',
            dataIndex: '_id',
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
    ];



    return (<><Table
        columns={columns}
        dataSource={dataUsers}
        rowKey={"_id"}
    /></>);
}

export default UserTable;
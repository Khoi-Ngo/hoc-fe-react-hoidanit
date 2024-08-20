import React, { useState } from 'react';
import { Space, Table, Tag } from 'antd';
import { fetchAllUsersAPI } from "../../service/api_service";

const UserTable = () => {
    // var check = false;
    const columns = [
        {
            title: 'ID',
            dataIndex: '_id',
        },
        {
            title: 'Avatar',
            dataIndex: 'avatar',

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
    const [dataUsers, setDataUsers] = useState();

    const loadUser = async () => {
        const res = await fetchAllUsersAPI();
        // check = true;
        setDataUsers(res.data);
    }


    //! Cannot invoke loadUser here => mounting HTML -> updating data by loadUser => Rerender => repeat => fetch infinity

    // if (check !== true) {
    //     loadUser();
    //     console.log('check somthing');
    // }
    return (<><Table columns={columns} dataSource={dataUsers} /></>);
}

export default UserTable;
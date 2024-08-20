import React, { useEffect, useState } from 'react';
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
    const [dataUsers, setDataUsers] = useState();
    useEffect(() => {
        console.log(`Check use useEffect method hook`);
        loadUser();
    }, []);

    //! [] meaning run ONLY ONCE

    //! Cannot invoke setDataUsers|| loadUser outside the useEffect => mounting HTML -> updating data by setDataUsers|| loadUser => Rerender => repeat => fetch infinity



    //this is hardcode img link: https://cdn-icons-png.flaticon.com/512/5556/5556468.png
    const loadUser = async () => {
        const res = await fetchAllUsersAPI();
        const data = res.data;
        for (let item of data) {
            item.avatar = 'https://cdn-icons-png.flaticon.com/512/5556/5556468.png';
        }
        setDataUsers(data);
    }

    return (<><Table
        columns={columns}
        dataSource={dataUsers}
        rowKey={"_id"}
    /></>);
}

export default UserTable;
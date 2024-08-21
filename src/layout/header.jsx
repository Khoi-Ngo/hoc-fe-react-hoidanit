import { Link, NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import { AppstoreOutlined, BookOutlined, TeamOutlined, HomeFilled } from '@ant-design/icons';
import { Menu } from 'antd';

const Header = () => {

    const items = [
        {
            label: <Link to={"/"}>HOME PAGE</Link>,
            key: 'home',
            icon: <HomeFilled />,
        },
        {
            label: <Link to={"/users"}>USERS PAGE</Link>,
            key: 'users',
            icon: <TeamOutlined />,
        },
        {
            label: <Link to={"/books"}>BOOKS PAGE</Link>,
            key: 'books',
            icon: <BookOutlined />,
        },


    ];

    const [current, setCurrent] = useState('home');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    return (<><Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} /></>);

}
export default Header;
import { Link, NavLink } from 'react-router-dom';
import React, { useContext, useState } from 'react';
import { AppstoreOutlined, BookOutlined, TeamOutlined, HomeFilled } from '@ant-design/icons';
import { Menu } from 'antd';
import { AuthContext } from '../components/auth_context';

/*
after login set into the var context AuthWrapper -> cover all the app => can use globally on the app
after login set token into local storage => supported by browser already 
*/

// TODO handle UI UX and logout and show info

const Header = () => {

    const { userLogin } = useContext(AuthContext);

    console.log(userLogin);

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
        setCurrent(e.key);
    };
    return (
        <>
            <div
                className="header-container"
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    // backgroundImage: `url('https://as1.ftcdn.net/v2/jpg/05/00/76/74/1000_F_500767402_TzmpKIy2lmJGk8BV9QqvNkdoKm0XvR2p.jpg')`,
                    backgroundColor: 'white',
                    backgroundSize: 'cover', // Ensures the image covers the whole area
                    backgroundPosition: 'center', // Centers the image
                    padding: '15px',
                    height: '7vh'
                }}
            >
                <Menu
                    onClick={onClick}
                    selectedKeys={[current]}
                    mode="horizontal"
                    items={items}
                    style={{
                        display: 'block',
                        backgroundColor: 'transparent',
                        borderBottom: 'none',
                        width: '97.5%',
                        height: '100%'
                    }}
                />

                <div
                    style={{
                        width: '2.5%',
                        height: '100%'

                    }}
                >
                    <img
                        src={`${import.meta.env.VITE_BACKEND_URL1}/images/avatar/${userLogin.avatar}`}
                        alt="avatar"
                        style={{
                            width: '80%',
                            height: '100%',
                            borderRadius: '50%',
                            border: '2px solid black'
                        }}
                    />
                </div>
            </div>
        </>
    );


}
export default Header; 
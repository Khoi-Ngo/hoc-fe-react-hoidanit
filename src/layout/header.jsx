import { Link, NavLink, useLocation } from 'react-router-dom';
import React, { useContext, useEffect, useState } from 'react';
import { AppstoreOutlined, BookOutlined, TeamOutlined, HomeFilled, UserOutlined, LogoutOutlined, AuditOutlined, UsergroupAddOutlined, HomeOutlined } from '@ant-design/icons';
import { Avatar, Dropdown, Menu, notification } from 'antd';
import { AuthContext } from '../components/auth_context';
import { useNavigate } from "react-router-dom";
import { callLogoutAPI } from '../service/api_service';

/*
after login set into the var context AuthWrapper -> cover all the app => can use globally on the app
after login set token into local storage => supported by browser already 
*/

// TODO handle UI UX and logout and show info

const Header = () => {

    const { userLogin, setUserLogin } = useContext(AuthContext);
    const userLoginId = userLogin.id;
    const navigate = useNavigate();

    const handleLogout = async () => {
        //call API -> notification
        const res = await callLogoutAPI();
        if (res.data) {
            notification.info(
                {
                    message: "Logout already!"
                }
            )
            //clear client user information
            localStorage.removeItem("access_token");
            setUserLogin(   
                {
                    email: "",
                    phone: "",
                    fullName: "",
                    role: "",
                    avatar: "",
                    id: ""
                }
            );

            navigate("/login");

        }


    }



    const [current, setCurrent] = useState('');
    const location = useLocation();

    useEffect(() => {
        if (location && location.pathname) {
            const allRoutes = ["users", "books"];
            const currentRoute = allRoutes.find(item => `/${item}` === location.pathname);
            if (currentRoute) {
                setCurrent(currentRoute);
            } else {
                setCurrent("home");
            }
        }
    }, [location]);


    const onClick = (e) => {
        setCurrent(e.key);
    };

    const profileMenu = (
        <Menu>
            <Menu.Item key="userProfile" icon={<UserOutlined />}>
                <Link to="/profile">User Profile</Link>
            </Menu.Item>
            <Menu.Item key="logout" icon={<LogoutOutlined />} onClick={() => {/* handle logout logic here */
                handleLogout();
            }}>
                Logout
            </Menu.Item>
        </Menu>
    );



    const items = [
        {
            label: <Link to={"/"}>Home</Link>,
            key: 'home',
            icon: <HomeOutlined />,
        },
        {
            label: <Link to={"/users"}>Users</Link>,
            key: 'users',
            icon: <UsergroupAddOutlined />
        },
        {
            label: <Link to={"/books"}>Books</Link>,
            key: 'books',
            icon: <AuditOutlined />,
        },


    ];


    return (
        <>
            <div className='header-container'
                style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    backgroundColor: 'white',
                }}
            >
                {/* Left side stuffs */}
                <Menu
                    onClick={onClick}
                    selectedKeys={[current]}
                    mode="horizontal"
                    items={items}
                    style={{
                        backgroundColor: 'transparent',
                        borderBottom: 'none',
                        marginRight: 'auto',
                        marginLeft: '20px'
                    }}
                />
                {/* Right side stuffs */}

                <div
                    className="profile-icon"
                    style={{
                        marginRight: '20px',
                        textAlign: 'center',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    {userLoginId ? (
                        <Dropdown overlay={profileMenu} trigger={['click']}>
                            <Avatar
                                src={`${import.meta.env.VITE_BACKEND_URL1}/images/avatar/${userLogin.avatar}`}
                                alt="avatar"
                                style={{
                                    borderRadius: '50%',
                                    border: '0.3px solid black',
                                    cursor: 'pointer',
                                }}
                            />
                        </Dropdown>
                    ) : (
                        <Link to="/login" style={{ color: 'black' }}>Login</Link>
                    )}


                </div>
            </div>

            {/* <Menu.item key="profile">
                    <div style={{ marginLeft: 'auto', marginRight: '' }}>
                        


                    </div>
                </Menu.item> */}

            {/* </Menu> */}



        </>
    );


}
export default Header;






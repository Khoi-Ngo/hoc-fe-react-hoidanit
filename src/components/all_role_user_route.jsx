import { useContext } from "react";
import { AuthContext } from "./auth_context";
import { Button, Result } from 'antd';
import { Link } from "react-router-dom";


export const AllUserRolesRoutes = (props) => {
    const { userLogin } = useContext(AuthContext);
    if (userLogin && userLogin.id) {
        return (
            <>
                {props.children};
            </>
        );
    }
    return (

        <Result
            title="Need Login action"
            subTitle="Sorry, you are not authorized to access this page."
            extra={<Button type="primary" >
                <Link to="/login"><span>Back to login</span></Link>
            </Button>}
        />

    )
}
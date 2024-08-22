import UserForm from "../components/user/UserForm";
import UserTable from "../components/user/UserTable";
import { fetchAllUsersAPI } from "../service/api_service";
import { useEffect, useState } from 'react';


const UsersPage = () => {
    const [dataUsers, setDataUsers] = useState();
    useEffect(() => {
        // console.log(`Check use useEffect method hook`);
        loadUser();
    }, []);

    //! [] meaning run ONLY ONCE

    //! Cannot invoke setDataUsers|| loadUser outside the useEffect => mounting HTML -> updating data by setDataUsers|| loadUser => Rerender => repeat => fetch infinity



    const loadUser = async () => {
        const res = await fetchAllUsersAPI();
        const data = res.data;
        setDataUsers(data);
    }

    return (
        <>
            <div>
                <UserForm loadUser={loadUser} />
                <UserTable
                    dataUsers={dataUsers}
                    loadUser={loadUser}
                />
            </div>
        </>
    );
}

export default UsersPage
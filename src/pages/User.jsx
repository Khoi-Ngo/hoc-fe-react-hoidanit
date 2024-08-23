import UserForm from "../components/user/UserForm";
import UserTable from "../components/user/UserTable";
import { fetchAllUsersAPI } from "../service/api_service";
import { useEffect, useState } from 'react';


const UsersPage = () => {

    const [current, setCurrent] = useState(1);
    const [pageSize, setPageSize] = useState(7);
    const [total, setTotal] = useState(0);

    const [dataUsers, setDataUsers] = useState();
    useEffect(() => {
        loadUser();
    }, [current]);

    //! [] meaning run ONLY ONCE

    //! Cannot invoke setDataUsers|| loadUser outside the useEffect => mounting HTML -> updating data by setDataUsers|| loadUser => Rerender => repeat => fetch infinity



    const loadUser = async () => {
        const res = await fetchAllUsersAPI(current, pageSize);
        if (res.data) {
            setDataUsers(res.data.result);
            setPageSize(res.data.meta.pageSize);
            setCurrent(res.data.meta.current);
            setTotal(res.data.meta.total);
        }
    }

    return (
        <>
            <div>
                <UserForm loadUser={loadUser} />
                <UserTable
                    dataUsers={dataUsers}
                    loadUser={loadUser}
                    current={current}
                    pageSize={pageSize}
                    total={total}
                    setCurrent={setCurrent}
                    setPageSize={setPageSize}

                />
            </div>
        </>
    );
}

export default UsersPage
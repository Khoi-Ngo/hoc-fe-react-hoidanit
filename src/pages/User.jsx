import UserForm from "../components/user/UserForm";
import UserTable from "../components/user/UserTable";

const UsersPage = () => {
    return (
        <>
            <div>
                <div>
                    <UserForm />
                </div>
                <div>
                    <UserTable />
                </div>

            </div>
        </>
    );
}

export default UsersPage
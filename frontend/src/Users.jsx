import UserForm from "./UserForm";
import UsersTable from "./UsersTable";

const users = [
    {
        id: 1,
        name: "John Doe",
    },
    
    {
        id: 2,
        name: "John Smith",
    },
    
];

const Users = () => {
    return (
        <>
        <UserForm />
        <UsersTable rows={users}/>
        </>
    );

}

export default Users

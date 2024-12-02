import UserList from "../components/UserList"
import { useLoaderData } from "react-router-dom";
import { loadUsers } from "../services/http";

const AllUsers = () => {

    const data = useLoaderData();

return(
    <>
    <div>
        <h1>All Users</h1>
    </div>
    <UserList users={data.data}/>
    </>
);
}

export default AllUsers;

export async function loader(){

    return await loadUsers();

}
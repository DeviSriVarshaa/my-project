import UserForm from "../components/UserForm"
import { useLoaderData } from "react-router-dom";

const EditUser = ()=>{

    const data = useLoaderData();
    return (
        <>
        <div>
            <h1>Edit User</h1>
        </div>
            <UserForm method="PUT" user={data.data} readonly={false}/>
        </>
    )
}


export default EditUser;

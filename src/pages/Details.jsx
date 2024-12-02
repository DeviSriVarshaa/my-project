import { useLoaderData } from "react-router-dom";
import UserForm from "../components/UserForm"
import { loadUser } from "../services/http";

const Details = ()=> {

    const data = useLoaderData();

    return (
        <>
            <UserForm method="PUT" user={data.data} readonly={true}/>
        </>
    )
}

export default Details;

export async function loader({request,params}){
    return loadUser(params.id);
}
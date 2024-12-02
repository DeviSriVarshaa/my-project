import UserForm from "../components/UserForm";

const CreateUser = () => {
    return (
        <>
            <div>
                <h1>Create User</h1>
            </div>
            <UserForm method="POST" readonly={false}/>
        </>
    );
}

export default CreateUser;
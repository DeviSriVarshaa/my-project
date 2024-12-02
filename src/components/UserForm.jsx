import { useState } from 'react';
import { removeUser, addUser, updateUser } from '../services/http';
import { Link, useNavigate } from 'react-router-dom';

const UserForm = ({ method, user, readonly }) => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function handleDelete() {
        const confirmDelete = window.confirm("Are you sure you want to delete this user?");
        if (confirmDelete) {
            setLoading(true);
            const response = await removeUser(user.userId);
            if (response.isSuccess) {
                alert("User deleted successfully");
                navigate("/");
            } else {
                alert("Failed to delete user");
                setLoading(false);
            }
        }
    }


    async function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = {
            name: formData.get("name"),
            email: formData.get("email")
        };
        setLoading(true);
        if(method === "POST"){
            const response = await addUser(data);
            if(response.isSuccess){
                alert("User added successfully");
                navigate("/");
            }else{
                alert("Failed to add user");
                setLoading(false);
            }
        }
        if(method === "PUT"){
            data.userId = user.userId;
            const response = await updateUser(data);
            if(response.isSuccess){
                alert("User updated successfully");
                navigate("/");
            }else{
                alert("Failed to update user");
                setLoading(false);
            }
        }

    }

    return (
        <>
            <form method={method} onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name='name' defaultValue={user ? user.name : ""} readOnly={readonly} />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="text" id="email" name='email' defaultValue={user ? user.email : ""} readOnly={readonly} />
                </div>
                <div>
                    {readonly
                        ? <>
                            <Link to={`edit`}>Edit</Link>
                            <button type="button" onClick={handleDelete} disabled={loading}>Delete</button>
                        </>
                        : <button type="submit">Submit</button>
                    }
                </div>
            </form>
        </>
    );
}

export default UserForm;

import {useNavigate} from 'react-router-dom';
const DeleteConfirmation = (handleDelete)=>{
    const navigate = useNavigate();
    return (
        <div>
            <h2>Are you sure you want to delete this?</h2>
            <button onClick={handleDelete}>Delete</button>
            <button onClick = {()=> navigate('/')}>Cancel</button>
        </div>
    )
}

export default DeleteConfirmation;
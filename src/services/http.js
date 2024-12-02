export async function addUser(user){
    try{
        const response = await fetch('https://localhost:7011/api/ReactUsers/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        const data = await response.json()
        return data;
    }
    catch(error){
        return {
            message: 'Failed to add user',
            isSuccess: false,
            data: null
        }
    }
}

export async function removeUser(id){
    try{
        const response = await fetch(`https://localhost:7011/api/ReactUsers/${id}`, {
            method: 'DELETE'
        })
        return response.json()
    }
    catch(error){
        return {
            message: 'Failed to delete user',
            isSuccess: false,
            data: null
        }
    }
}

export async function updateUser(reactUser){
    try{
        const response = await fetch(`https://localhost:7011/api/ReactUsers/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reactUser)
        })

        return response.json()
    }
    catch(error){
        return {
            message: 'Failed to update user',
            isSuccess: false,
            data: null
        }
    }
}

export async function loadUsers(){
    try{
        const response = await fetch('https://localhost:7011/api/ReactUsers')
        let data = await response.json()
        return data
    }
    catch(error){
        return {
            message: 'Failed to fetch users',
            isSuccess: false,
            data: null
        }
    }
}

export async function loadUser(id){
    try{
        const response = await fetch(`https://localhost:7011/api/ReactUsers/${id}`)
        return response.json()
    }
    catch(error){
        return {
            message: 'Failed to fetch user',
            isSuccess: false,
            data: null
        }
    }
}
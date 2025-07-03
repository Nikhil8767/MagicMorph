import react from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

const Protect=({children})=>{
    const navigate=useNavigate();
    const token=localStorage.getItem('token');

    if(!token){
        return <Navigate to={'/signIn'}/>
    }

    return children
}

export default Protect;
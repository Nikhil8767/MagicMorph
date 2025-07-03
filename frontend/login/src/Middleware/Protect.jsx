import react from 'react'
import { useNavigate } from 'react-router-dom';

const protect=({children})=>{
    const navigate=useNavigate();
    const token=localStorage.getItem('token');

    if(!token){
        return navigate('/signIn');
    }

    return children
}

export default protect;
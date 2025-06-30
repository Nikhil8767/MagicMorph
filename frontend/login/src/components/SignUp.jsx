import react, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const SignUp=()=>{

  // const [dataformat,setDataformat]=useState({
  //   username:"",
  //   email:"",
  //   password:"",
  // })

  const [username,setUsername]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [error,setError]=useState('');
  const navigate=useNavigate();

  const handleSubmit=async(e)=>{
    e.preventDefault();
    
    if(!username || !email || !password){
      setError('please fill all the details');
      return;
    }

    try {
      const response=await fetch('http://localhost:3000/api/signup',{
        method:'POST',
        headers:{'content-type':'application/json'},
        body:JSON.stringify({name:username,email,password}),
      });

      const data=await response.json();

      if(response.ok){
        setError('');
        alert('sucess');
        navigate('/SignIn');
      }
      else{
        setError(data.msg || 'signup failed');
      }
    } catch (error) {
      setError('server errror')
    }
  };



  return(
    <>
    <div>
      <div className='flex align-center items-center justify-center min-h-screen bg-gray-100'>
        <form className='w-full items-center bg-white rounded-lg border-2 shadow-sm p-8 max-w-sm 'onSubmit={handleSubmit}>
          <h2 className='font-semibold b-6 p-2 mb-2 items-center text-center text-2xl '>Sign up for login Blog_Ji</h2>
          <div>
            <label className='block mb-1 mt-3'>Username</label>
            <input className='w-full border px-3 py-2 rounded mb-4 ' type="text" placeholder='enter username' required  values={username} onChange={(e)=>setUsername(e.target.value)}/>
          </div>
          
          <div>
            <label className='block mb-1 '>email</label>
            <input className='w-full border rounded px-3 py-2 mb-4 ' type="email" placeholder='enter your mail here' required  value={email} onChange={(e)=>setEmail(e.target.value)} />
          </div>

          <div>
            <label className='block'>password</label>
            <input className='w-full border rounded px-3 py-2 mb-4' type="password" placeholder='enter your password' required value={password} onChange={(e)=>setPassword(e.target.value)}/>
          </div>

          <button  className=' bg-black text-white p-2 align-center w-full rounded-lg mt-4'>submit</button>
        </form>
      </div>
    </div>
    </>
  )
}
export default SignUp
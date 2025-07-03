import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';

const SignIn = () => {
  const [email,setemail]=useState('');
  const [password,setPassword]=useState('');

  const handleSubmit=async(e)=>{
    e.preventDefault();

    if(!email || !password){
      alert('please fill  the full detaills');
      return
    }

    try {
      const response=await fetch('https://localhost:3000/api/signIn',{
        method:'POST',
        headers:{'content-type':'application/json'},
        body:JSON.stringify({email,password})
      })

      const data=await response.json();

      if(response.ok){
        Navigate('/Home')
      }
      else{
        alert(data.msg || 'invalid creditentials');
      }

    } catch (error) {
      alert(error);
    }
  }

  return (
    <div>
      <div className='flex justify-center items-center min-h-screen bg-gray-100  '>
        <form className='bg-white b-6  border-gray-200 rounded-lg shadow-sm w-full max-w-sm p-8'onSubmit={handleSubmit}>
          <h2 className='text-2xl  font-semibold  mb-4 text-center'>Lets Enjoy the posts buy SignIn</h2>
          <div>
            <label className='block text-sm  mb-2'>Email</label>
            <input className='w-full px-3 py-2 rounded border mb-5' type="email" placeholder='enter email' required  value={email} onChange={(e)=>setemail(e.target.value)} />
          </div>
          <div>
            <label className='block text-sm mb-2' >password</label>
            <input className='w-full px-3 py-2 rounded border mb-2' type="password" placeholder='enter passwword' required value={password} onChange={(e)=>setPassword(e.target.value)}/>
          </div>
          <button className='w-full bg-gray-900 text-white  py-2 rounded mt-3' type='submit'>SignIn</button>
        </form>
      </div>
    </div>
  )
}

export default SignIn
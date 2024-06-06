import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react'
import React, { useState } from 'react'
import {Link,useNavigate} from 'react-router-dom'

export default function Signup() {
const [formData,setFormData]=useState({});
const [errorMessage,setErrorMessage]=useState(null);
const [loading,setLoading]=useState(false);
const navigate=useNavigate();


  const handelChange=(e)=>{
    setFormData({...formData,[e.target.id]:e.target.value.trim()  })
    
  }
  const handlSubmit= async(e)=>{
    e.preventDefault();
    if(!formData.username || !formData.password || !formData.email){
      return setErrorMessage("all fields are required");
    }
    try {
      setLoading(false)
      setErrorMessage(null)
      const res = await fetch('/api/auth/signup',{
        method:'POST',
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(formData)
      })
      
      const data=await res.json();

      if(data.success===false){
        return setErrorMessage(data.message);
      }
      setLoading(true)
      if(res.ok){
        navigate('/signin')
      }
    } catch (error) {
      setErrorMessage(error.message);
    }

  }

  return (
<div >
  <div className='flex flex-col md:flex-row gap-2'  >
<div className='font-bold sm:text-4xl mt-20 bg-blue m-10 py:10 flex-1' 
 >
<Link to='/' className='text-blue'>LOGO</Link>
<p className='text-sm font-mono py-3 ' >welcome to ministry of tourism intranet</p>
</div>
{/* right */}
<form className='flex-1 md:align-center justify-center m-5' onSubmit={handlSubmit}>
  <div className=''>
    <Label value='your username'></Label>
<TextInput type='text' placeholder='username' id='username' onChange={handelChange}/>
</div>

<div>
    <Label value='your email'></Label>
<TextInput type='email' placeholder='nah@gmail.com' id='email' onChange={handelChange}/>
</div>
<div>
    <Label value='your password'></Label>
<TextInput type='password' placeholder='password' id='password' onChange={handelChange}/>
</div>

<Button type='submit' gradientDuoTone='purpleToPink' className='w-full' disabled={loading}>
  {
    loading ? (<>
    <Spinner />
    <span className='pl-3xl'>loading...</span>
    </>):'signup'
  }
</Button>
</form>
<div className='flex gap-2'>
  <span>do you have account</span>
  <Link to='/signin' className='text-blue-500' >signin</Link>
</div>
  </div>

{
  errorMessage && (
    <Alert>
    {errorMessage}
    </Alert>
  )
}
</div>
  )
}






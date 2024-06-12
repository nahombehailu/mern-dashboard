import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react'
import React, { useState } from 'react'
import {Link,useNavigate} from 'react-router-dom'
import { useDispatch ,useSelector} from 'react-redux';
import { signinStart,signinSuccess,signinFailure } from '../redux/user/userSlice';
import OAuth from '../components/OAuth';


export default function SignIn() {
const [formData,setFormData]=useState({});
// const [errorMessage,setErrorMessage]=useState(null);
// const [loadingh,setLoading]=useState(false);
const {loading,error:errorMessage}=useSelector(state=>state.user)
const navigate=useNavigate();
const dispatch=useDispatch();
const {currentUser}=useSelector(state=>state.user)


  const handelChange=(e)=>{
    setFormData({...formData,[e.target.id]:e.target.value.trim()  })
    
  }
  const handlSubmit= async(e)=>{
    e.preventDefault();
    if(!formData.password || !formData.email){
      dispatch(signinFailure('Please fill out all the fields '))
    }
    try {
      dispatch(signinStart);
      const res = await fetch('/api/auth/signin',{
        method:'POST',
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(formData)
      })
      
      const data=await res.json();

      if(data.success===false){
       dispatch(signinFailure(data.message))
      }
      if(res.ok){
        dispatch(signinSuccess(data))
        navigate('/')
      }
    } catch (error) {
      dispatch(signinFailure(data.message))
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
    </>):'signin'
  }
</Button>
<OAuth />
</form>
<div className='flex gap-2'>
  <span>do not you have account</span>
  <Link to='/signup' className='text-blue-500' >signin</Link>
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






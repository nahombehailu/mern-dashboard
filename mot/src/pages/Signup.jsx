import { Button, Label, TextInput } from 'flowbite-react'
import React from 'react'
import {Link} from 'react-router-dom'

export default function Signup() {
  return (
<div className='min-h-screen'>
  <div className='flex flex-col md:flex-row gap-2'  >
<div className='font-bold sm:text-4xl mt-20 bg-blue m-10 py:10 flex-1' 
 >
<Link to='/' className='text-blue'>LOGO</Link>
<p className='text-sm font-mono py-3 ' >welcome to ministry of tourism intranet</p>
</div>
{/* right */}
<form className='flex-1 md:align-center justify-center m-5'>
  <div className=''>
    <Label value='your username'></Label>
<TextInput type='text' placeholder='username'/>
</div>

<div>
    <Label value='your email'></Label>
<TextInput type='email' placeholder='nah@gmail.com'/>
</div>
<div>
    <Label value='your password'></Label>
<TextInput type='password' placeholder='password'/>
</div>

<Button type='submit' gradientDuoTone='purpleToPink' className='w-full'>
  <Link to='/signin'>signin</Link>
</Button>
</form>

  </div>
  <div className='flex gap-2'>
  <span>do you have account</span>
  <Link to='/signin' className='text-blue-500' >signin</Link>
</div>

</div>
  )
}






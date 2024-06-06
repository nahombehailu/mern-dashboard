import React from 'react'
import { Link } from 'react-router-dom'
import { TextInput } from 'flowbite-react'
// import {AiOutlineSearch} from 'react-icons/ai'


export default function Navbar() {
  return (
    <div className='flex gap-2 border-b-2 '>
<h1 className='text-blue '>MOT INTRANET</h1>
<form className='x-5 y-10'> 
    <TextInput 
    type='text'
    placeholder='searach...'
    // rightIcon={AiOutlineSearch}


    />
</form>
{/* <AiOutlineSearch /> */}
<div className='flex gap-4 justify-center <CgAlignCenter />'>
<Link to='/'>Home</Link>
<Link to='/core'>Core</Link>
<Link to='/news'>News</Link>
<Link to='/support'>Support</Link>
<Link to='/about'>About</Link>
</div>
    </div>
  )
}

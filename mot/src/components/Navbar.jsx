import React from 'react'
import { Link } from 'react-router-dom'
import { Avatar, Button, Dropdown, TextInput } from 'flowbite-react'
import { useSelector } from 'react-redux'
// import {AiOutlineSearch} from 'react-icons/ai'


export default function Navbar() {

  const {currentUser}=useSelector(state=>state.user)
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


{currentUser?
  (<Dropdown inline
  arrowIcon={false}
  label={
  <Avatar />

  }
  
  >

  </Dropdown>)
:
  (<div>
  <Link to='/signin'>
  
   <Button gradientDuoTone='purpleToPink' className='w-25'>signin</Button>
  </Link>
</div>
  )


}

    </div>
  )
}

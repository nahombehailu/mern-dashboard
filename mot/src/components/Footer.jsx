
import { Footer } from 'flowbite-react'
import React from 'react'
import {BsFacebook,BsGithub,BsTwitter,BsInstagram} from 'react-icons/bs'

export default function FooterComp() {
  return (
    <div>

    <Footer className='border border-t-2 color-blue '  >
        
       
        <div className='grid grid-cols-2 sm:grid-cols-3 w-full max-w-7xl mx:auto'>
         <div className='m-2'>
         <h1 className='w-full'>MOT INTRANET
        </h1>
      <Footer.Title title='About' />
      <Footer.Link href='/'>
   MOT
      </Footer.Link >
      <Footer.Link href='/'>
     Ministries
      </Footer.Link>
      <Footer.Link href='/'>
     Mission
      </Footer.Link>
      <Footer.Link href='/'>
     Vission
      </Footer.Link>
      </div>
      <div>
      <Footer.Title title='FollowUs' />
      <Footer.Link href='/'>
     youtube
      </Footer.Link>
      <Footer.Link href='/'>
     github
      </Footer.Link>
      <Footer.Link href='/'>
     facebook
      </Footer.Link>
      </div>
      <div>
      <Footer.Title title='Legal' />
      <Footer.Link href='/'  >
     Privacy Policy
      </Footer.Link>
      <Footer.Link href='/'>
     homTerms and condition
      </Footer.Link>
      </div>

      </div>
    </Footer>
    <Footer.Divider />
    <div className='flex gap-8 mt-2 sm:items-center w-full mx:auto justify-center'>
        <Footer.Icon href='#' icon={BsFacebook} />
        <Footer.Icon href='#' icon={BsGithub} />
        <Footer.Icon href='#' icon={BsTwitter} />
        <Footer.Icon href='#' icon={BsInstagram} />
    </div>
    </div>
  )
}

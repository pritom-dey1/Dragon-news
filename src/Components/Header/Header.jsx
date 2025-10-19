import React from 'react'
import Logo from '../../assets/logo.png'
import { format } from 'date-fns'
const Header = () => {
  return (
    <div className='mx-auto w-fit py-6'>
        <img src={Logo} alt="logo" className='object-cover w-[30vw]' />
        <p className='text-center text-[#404040] mt-3'>Journalism Without Fear or Favour</p>
        <p className='text-center mt-1'>{format(new Date(), 'do MMMM yyyy')}</p>
    </div>
  )
}

export default Header
import React from 'react'
import { Link} from 'react-router-dom'
import {NAV_LINKS} from '../../constants/index'
import Logo  from '../assets/odessy-2.svg'
import Button from './button'
import Icon from '../assets/user.svg'
import Menu from '../assets/menu.svg'

export default function navbar() {
  return (
   <nav className='flexBetween max-container padding-container relative z-30 py-5'>
      <Link to='/'>
        <img src={Logo} alt="Logo" width={160} />
      </Link>
      <ul className='hidden h-full gap-12 lg:flex'>
        {NAV_LINKS.map((link)=>(
          <Link to={link.href} key={link.key} className='regular-16 text-gray-50 text-center cursor-pointer pb-15 transition-all hover:font-bold' >{link.label}</Link>
        )
        )}
      </ul>

      <div className=' lg:flex hidden'>
        <Button type='button' name='Login' variant='btn_dark_green' icon={Icon}/>
      </div>

      <img src={Menu} alt="Menu" height={32} width={32} className='inline-block cursor-pointer lg:hidden' />
   </nav>
    
  )
}
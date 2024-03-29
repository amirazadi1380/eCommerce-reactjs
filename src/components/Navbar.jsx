import { faBars, faClose, faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

export default function Navbar() {
    const [open,setOpen] = useState(false)
    const handleClick = ()=>{
        setOpen((prev)=>!prev)
    }
  return (
    <div className='flex w-screen justify-between h-20 items-center px-3 relative '>
        <h1><FontAwesomeIcon icon={faHome}/></h1>
        <div className='text-5xl cursor-pointer absolute right-3 top-5 z-50 md:hidden '>
            {open ? <FontAwesomeIcon onClick={handleClick} icon={faClose} className='text-black'/> : <FontAwesomeIcon onClick={handleClick} icon={faBars} className='text-white'/>}
        </div>
        <ul className={`${open ? 'w-64 opacity-100 duration-150 ease-in' : 'w-0 opacity-0 duration-150 ease-in'}  md:w-96 md:opacity-100 md:justify-center md:items-center md:h-20 md:bg-transparent h-[1000px] right-0 md:space-x-16 text-black md:text-white md:text-2xl bg-white items-center flex-col md:space-y-0  space-y-20 top-0 absolute flex pt-60 text-3xl md:static  md:pt-0  md:flex-row`}>
            <li>Home</li>
            <li>About</li>
            <li>Help</li>
        </ul>
    </div>
  )
}

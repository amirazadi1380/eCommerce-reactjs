import React, { useContext, useState } from 'react'
import { AppContext } from '../App'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faClose } from '@fortawesome/free-solid-svg-icons';

export default function Factors() {
 const {factor} = useContext(AppContext)
 var totall = factor.reduce((accumulator,curr)=>accumulator + curr.price,0);
 const [open,setOpen] = useState(false) 
  return (
    <div className='absolute right-1 top-5'>
      <div className='absolute right-1 z-50 text-white text-xl'>
        {open ? <FontAwesomeIcon className='cursor-pointer' onClick={()=>setOpen(prev=>!prev)} icon={faClose}/> : <FontAwesomeIcon className='cursor-pointer' onClick={()=>setOpen(prev=>!prev)} icon={faBagShopping}/>}
      </div>
    <div className={`${open ? 'h-[600px] rounded-lg w-96 opacity-100 duration-150 ease-in transition-all' : 'h-0 w-0 opacity-0 duration-150 ease-in transition-all'}rounded-lg  bg-blue-600 text-white`}>
      {factor.length > 0 ? factor.map((item,index)=><div key={index} className='flex flex-col'><h3>{item.title}</h3><h4>{item.price}</h4></div>)   : <h1 className={`${open ? 'opacity-100' : 'opacity-0'}`}>nothing yet...</h1>}
      <h1 className={`${open ? 'opacity-100' : 'opacity-0'} `}>{totall}$</h1> 
         </div>
    </div>
  )
}

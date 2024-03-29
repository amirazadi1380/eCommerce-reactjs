import React, { useContext, useState } from 'react'
import useFetch from './useFetch'
import { useNavigate } from 'react-router-dom'
import Factors from '../pages/Factors'
import { AppContext } from '../App'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default function List() {
  const [searchText,setSearchText] = useState('');
  const { factor, setFactor } = useContext(AppContext)
  const { products, isLoading, setProducts } = useFetch();
  const [sort,setSort] = useState(false)
  const navigate = useNavigate();
  return (
    <div className='w-screen h-screen flex flex-col items-center'>

    <form className='p-5 mb-5 flex space-x-3 w-64 h-10 items-center justify-center'>
        <input className='px-2 bg-white rounded-sm text-black placeholder:text-black/40' type="search" placeholder='search...' id='input' onChange={(e)=>{setSearchText(e.target.value.toLowerCase())}}/>
        <FontAwesomeIcon icon={faSearch}/>
    </form>
    <div className='flex space-x-3'>
    <button className='bg-transparent text-xs w-44 h-10 mb-5' onClick={()=>{
      setSort(true)
}}>کمترین به بیشتر </button> 
    </div>
          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 place-items-center gap-5 xl:gap-16'>
        <Factors />
        {isLoading ? <h1>Loading...</h1> : products.sort((a,b)=> sort && a.price - b.price).filter(item=>searchText == '' ? item : item.title.toLowerCase().includes(searchText) ).map((item, index) => <div key={index} className='w-64 h-80 shadow-lg shadow-gray-500 text-center bg-white text-black flex flex-col justify-center items-center space-y-2'>
          <h4>{item.title}</h4>
          <img src={item.category.image} alt="pic" className='w-36 h-36' />
          <p>{item.price}$</p>
          <button className='w-36 bg-black rounded-none text-white h-10 hover:scale-110 ease-in transition-all duration-105' onClick={() => navigate(`/products/${item.title}/${item.id}`)}>more...</button>
          <button className='w-20 h-10 text-xs rounded-none text-white' onClick={() => setFactor((prev) => [...prev, { title: item.title, price: item.price }])}>buy</button>
        </div>)}
      </div>
    </div>
  )
}

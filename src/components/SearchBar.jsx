import React, { useState } from 'react'
import useFetch from './useFetch'

export default function SearchBar() {
    
  return (

    <form className='p-5'>
        <label htmlFor="input">search</label>
        <input type="search" id='input' onChange={(e)=>{
            setSearchText(e.target.value)
            setProducts(products.filter(item,index=>index == 0));
            }}/>
            {searchText}
    </form>
  )
}

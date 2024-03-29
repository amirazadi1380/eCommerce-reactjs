import React from 'react'
import Navbar from '../components/Navbar'
import useFetch from '../components/useFetch'
import List from '../components/List';

export default function Home() {
  const {products} = useFetch();
  return (
    <div className='w-screen h-screen flex flex-col items-center'>
      <Navbar/>
      <a href="products" className='mt-36 text-5xl'>products</a>
      </div>
  )
}

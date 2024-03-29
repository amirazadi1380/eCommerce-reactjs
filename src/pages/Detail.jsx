import React, { useContext } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import useFetch from '../components/useFetch';
import { AppContext } from '../App';

export default function Detail() {
  const { title,clothId } = useParams();
  const { products, setProducts } = useFetch()
  const navigate = useNavigate();
  const {setEachFactor,setFactor,eachFactor,factor} =  useContext(AppContext)
  return (
    <div className='w-screen h-screen justify-center items-center flex'>{products.filter((item) => item.title == title).map((item, index) =><div className='flex flex-col justify-center items-center' key={index}>
      <h1>{clothId}</h1>
      <h4 className='font-bold text-2xl'>{item.title}</h4>
    <p className='text-xs w-96 opacity-75'>{item.description}</p>
      <img src={item.images[0]} alt="pic" className='w-36 h-36' />
      <p>{item.price}$</p>
      <button onClick={()=>{
        setEachFactor({
          title:item.title,
          price:item.price
        })
        setFactor((prev)=>[...prev,eachFactor])
        alert("done")
      }}>buy</button>
    </div>)}
    <button onClick={()=>navigate('/products')}>back</button>
    </div>
  )
}

import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function useFetch() {
    const [products,setProducts] = useState([]);
    const [isLoading,setIsLoading] = useState(false)
    const [errTxt,setErrTxt] = useState('');
    const url = "https://api.escuelajs.co/api/v1/products";
    useEffect(()=>{
        async function fetchMyData(){
            setIsLoading(true)
        await axios.get(url)
        .then(res=>setProducts(res.data))
        .catch(err=>setErrTxt(err.message))    
        setIsLoading(false)
        }
        fetchMyData()
    },[])
        return {products,setProducts,errTxt,isLoading}
}

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCart from '../components/ProductCart'

const Products = () => {
    const [productItem,setProductItem]=useState([])
    const[isLoading,setIsloading]=useState(true)
    

    const fetchProducts=async()=>{
        setIsloading(true)
        try{
            setIsloading(false)
            const pro=await axios.get('https://fakestoreapi.com/products')
            setProductItem(pro?.data)
           

        }catch(error){
            setIsloading(false)
            console.log(error)
        }
    }

    useEffect(()=>{
        fetchProducts()

    },[])
  return (
    <div className='container-fluid'>
        {isLoading&& <h1>Loading...</h1>}
        <div className='container product-conatiner-item'>
            {productItem.map((items,index)=>{
                return <ProductCart items={items} />
            })}
        </div>

    </div>
  )
}

export default Products
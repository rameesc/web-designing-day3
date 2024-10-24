import React, { useEffect, useRef, useState } from 'react'
import useFetch from '../hooks/useFetch'

const Ref = () => {
  
 const [value]= useFetch('https://jsonplaceholder.typicode.com/posts')
    
   
console.log(value)
  return (
    <div>
      {
        value&&value.map((item)=>{
          return <h2>{item?.title}</h2>
        })
      }
       
    </div>
  )
}

export default Ref
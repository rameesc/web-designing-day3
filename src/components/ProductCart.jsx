import React, { useContext, useState } from 'react'
import { textLength } from '../utils/productItemsLogic'
import Button from './Button'
import { cretateUseCondext } from '../context/CreateCondexty'
import { TYPE } from '../utils/productTypes'
const ProductCart = ({items}) => {


  const {dispatch,cartData}=useContext(cretateUseCondext)
 
  

  const [showTest,setShowTezt]=useState(true)

  
  const ViewHandler=(cart)=>{
 
  }
  const addtoCartHandler=(cart)=>{
   
  
      

    
   
    if(cart){
     return dispatch({type:TYPE.ADD_TO_CART,payload:cart})

    }

   
  }

  const moreReadHandler=(items)=>{
  
      setShowTezt(!showTest)

    

  }

  return (
    <div className='productCart'>
      <img width={400} height={400} src={items?.image} alt="" />
      <h2>{textLength(items?.title)}</h2>
      <h3><span>Price</span>: {items.price}</h3>
     {showTest? <p >{
        textLength(items?.description)}
        <span onClick={()=>moreReadHandler(items)} style={{color:'blue',fontWeight:'600',cursor:'pointer'}}>Read more</span>
      </p>:<p>{items?.description} <span onClick={()=>moreReadHandler(items)} style={{color:'blue',fontWeight:'600',cursor:'pointer'}}>less</span></p>}
      <div className='bts-Cart'>
        <Button handler={ViewHandler}   name={'View'} bg={'red'}/>
        <Button handler={addtoCartHandler} cart={items} name={'Add to Cart'}/>
      </div>
      
    </div>
  )
}

export default ProductCart
import React, { useContext } from 'react'
import { cretateUseCondext } from '../context/CreateCondexty'
import Button from '../components/Button'
import { TYPE } from '../utils/productTypes'


const Cart = () => {

    const {cartData,dispatch}=useContext(cretateUseCondext)
    console.log(cartData.Cart)


    const removeFromCart=(item)=>{
       dispatch({type:TYPE.REMOVE_FROM_CART,payload:item})
    }


  return (
    <div className='container-fluid'>
      {cartData?.Cart.length>0?  <div className='container cart-container'>
           <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>#img</th>
                    <th>pro_name</th>
                    <th>Quantity</th>
                    <th>action</th>
                    
                </tr>
            </thead>
            <tbody>
               {cartData?.Cart.map((item,index)=>{
                return <tr key={index}>
                    <td>{index+1}</td>
                    <td>
                        <img width={50} height={50} src={item.image} alt="" />
                    </td>
                    <td>{item.title}</td>
                    <td  style={{display:'flex',alignItems:'center',borderTop:'1px solid black',justifyContent:'center'}}>
                        <Button name={'-'}/>
                        <span>1</span>
                        <Button name={'+'}/>
                    </td>
                    <td>
                    <Button handler={removeFromCart}cart={item} name={'Remove'} bg={'red'}/>
                    </td>
                </tr>
               })}
            </tbody>
           </table>
        </div>:
        <div className='container cart-container'>
            <h2>emty cart</h2>
        </div>
        }
    </div>
  )
}

export default Cart
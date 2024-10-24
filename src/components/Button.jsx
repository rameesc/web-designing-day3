import React from 'react'

const Button = ({name,bg,handler,cart}) => {
   
  return (
    <div>
        <button onClick={()=>handler(cart)} style={{backgroundColor:bg}}>{name}</button>
    </div>
  )
}

export default Button
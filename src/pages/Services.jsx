import React, { useCallback, useState } from 'react'
import List from '../components/List';

const Services = () => {

  const [number,setNumber]=useState(1);
  const [dark,setDark]=useState(false)

  // const getItems=()=>{
  //   return [number,number+1,number+2]
  // }

  const getItems=useCallback(()=>{
    return [number,number+1,number+2]

  },[number])

  const theme={
    backgroundColor:dark?"#333":"#fff",
    color:dark?"#fff":'#333'
  }
  return (
    <div style={theme}>
      <input type="number" value={number}
       onChange={(e)=>setNumber(parseInt(e.target.value))}

      />
      <button onClick={()=>setDark((pre)=>!pre)}>Toggle them</button>
      <List getItems={getItems}/>
    </div>
  )
}

export default Services
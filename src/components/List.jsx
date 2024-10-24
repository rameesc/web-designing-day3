import React, { useEffect, useState } from 'react'

const List = ({getItems}) => {
    const [getDatas,setDatas]=useState([])

    useEffect(()=>{
        console.log('update value')
        setDatas(getItems())

    },[getItems])
  return (
    <div>
        {getDatas.map((item,index)=>{
            return <h3 key={index}>{item}</h3>
        })}
    </div>
  )
}

export default List
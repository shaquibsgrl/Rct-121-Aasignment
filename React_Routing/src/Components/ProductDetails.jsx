import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
    const [data,setData]=useState([]);
    const [eror,setError]=useState(false)
const {id}=useParams();

useEffect(()=>{
 axios({
     method:"GET",
     url:`http://localhost:4001/Products/${id}`
 }).then(res=>{
     setData(res.data)
 }).catch(err=>{
 setError(false)
 })
 console.log(data)

},[])

  return (
    <div>
      <div>Product:{data.name}</div>
      <div>Price:{data.price}</div>
      <div>Id:{data.id}</div>
      

    </div>
  )
}

export default ProductDetails

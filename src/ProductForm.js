import React, { useState } from 'react'

const ProductForm = () => {
    const [id, setId]=useState('')
    const [price, setPrice]=useState('')
    const [name,setName]=useState(' ')
    const [data,setData]=useState([])
    
    

    const idHandler=(e)=>{
        setId(e.target.value)
    }

    const priceHandler=(e)=>{
        setPrice(e.target.value)
    }

    const nameHandler=(e)=>{
        setName(e.target.value)
    }

    const submitHandler=(e)=>{
       e.preventDefault()
       console.log(id,name,price);
       const obj={
        id:id,
        price:price,
        name:name
       }
       setData([...data,obj])
       setId('')
       setName('')
       setPrice('')
    }

    let total=0;
    data.forEach((item)=>{
        total+=Number(item.price)
    })

    const deleteHandler=(id)=>{
        const newItems=data.filter((item)=>item.id!==id)
        setData(newItems)
    }
  return (
    <div>
        <form onSubmit={submitHandler}>
            <label>ProductId:</label>
            <input type="number" value={id} onChange={idHandler}></input>
            <label>Selling Price</label>
            <input type="number" value={price} onChange={priceHandler}></input>
            <label>Product Name:</label>
            <input type="text" value={name} onChange={nameHandler}></input>
            <button>Add Product</button>
        </form>
        <div>
            {data.map((item)=>{
                return (
                    <ul key={item.id}>
                        <li>{item.id} {item.price} {item.name} <button type="button" onClick={deleteHandler.bind(null,item.id)}>Delete</button></li>
                    </ul>
                )
            })}
        </div>
        <div>total vlue worth of products:{total}</div>
        </div>
  )
}

export default ProductForm
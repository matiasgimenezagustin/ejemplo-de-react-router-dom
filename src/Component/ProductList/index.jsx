import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { Boton } from '../Boton'
import "./productList.css"

const ProductList = () => {
    const {category} = useParams()
    const [productsNotFound, setProductsNotFound] = useState(false)
    const [cart, setCart] = useState([])
    const data = [
        {
            title: "motorola g8",
            price: 4000,
            category: "celulares",
            id: 1
        },
        {
            title: "samsung s20",
            price: 400000,
            category: "celulares",
            id: 2
        },
        {
            title: "iphone 10",
            price: 500000,
            category: "celulares",
            id: 3
        },
        {
            title: "motorola g9",
            price: 40000,
            category: "celulares",
            id: 4
        },
        {
            title: "Computadora 9",
            price: 40000,
            category: "computadora",
            id: 5
        },
        {
            title: "Computadora 10",
            price: 40000,
            category: "computadora",
            id: 6
        },
        {
            title: "Computadora 11",
            price: 40000,
            category: "computadora",
            id: 7
        },
        {
            title: "Computadora 12",
            price: 40000,
            category: "computadora",
            id: 8
        },
    ]
    const [products, setProducts] = useState(data)
    useEffect(()=>{
        if(category && isNaN(category)){
            setProductsNotFound(false)
            setProducts(() => data.filter(product => product.category.toLowerCase() === category.toLowerCase()))
            products.length < 1 && setProductsNotFound(true)
        }else{
            setProductsNotFound(true)
        }
    }, [category])
    const addProduct =(id) =>{
        setCart([...cart, data.find(product => product.id === id)])
        console.log(cart)
    }
  return (
    <div className='cardList'>
        {
            productsNotFound ? 
            <h1>No hay productos que coincidan con tu busqueda</h1>
            :
        (products.map( product => (
            <div key={product.id} className="card">
                <h3>{product.title}</h3>
                <p>{product.price}</p>
                <Boton title="comprar" bgColor="green" textColor="white" funcion={() =>  addProduct(product.id)}/>
            </div>
        )))
    }
    </div>
  )
}

export {ProductList}
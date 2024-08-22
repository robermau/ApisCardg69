import React from 'react'
import axios from "axios"
import { useEffect, useState } from "react"
const Card = () => {
    const [catImage , setCatImage] =useState([])
    // console.log(catImage)
       useEffect(() => {
         fetchCatImage()
       }, [])
    
      // EJEMPLO CON AXIOS
       const fetchCatImage = async () => {
        try {
          const response = await axios.get('https://api.thecatapi.com/v1/images/search?limit=10')
          console.log(response)
          setCatImage(response.data)
        }catch (error) {
          console.error('Error con el axios' , error)
        }
      }
         
        // Ejemplo con Fetch
        // const fetchCatImage = async () => {
        //   try {
        //     const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=10')
        //     if(!response.ok) {
        //       throw new Error('La api no funciona')
        //     }
        //     const data = await response.json()
        //     console.log(data)
        //     setCatImage(data)
        //   } catch (error) {
        //     console.error('Error del fetch' , error)
        //   }
        // }
  return (
    <div>
    { catImage.map((cat,index) => ( 
      <div key={index} className="card" >
    
      <img src={cat.url} className="card-img-top" alt="..." />
      <div className="card-body">
        
        <p className="card-text">Alto :{cat.height} </p>
        <p className="card-text">Ancho : { cat.width} </p>
      
      </div>
    </div>
      ))}
  
 </div>
  )
}

export default Card

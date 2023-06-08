import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'

export const SuperHeroesPage = () => {
  const [isLoading,setIsLoading]=useState(true)
  const [data,setData]=useState([])
  //Step 1: Error Handling- Create prooperty
  const [error,setError]=useState('')

   
  useEffect(()=>{
  axios.get('http://localhost:4000/superheroes').then((res)=>{
    setData(res.data)
    setIsLoading(false)
     //Step 2: Error Handling- Add catch 
  }).catch(error=>{
    setError(error.message)
    setIsLoading(false)
  })
},[])

  if(isLoading){
    return <h2>Loading......</h2>
  }

  //step 3 : Add condition
  if(error){
    return <h4>{error}</h4>
  }
    return (
      <div>
        SuperHero Page
        {data.map((hero)=>{
          return <div key={hero.name}>{hero.name}</div>
        })}
      </div>
    )
  }  
  
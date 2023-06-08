import React from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'


const fetchData=()=>{
  return axios.get('http://localhost:4000/superheroes')
}

export const RQSuperHeroesPage = () => {
  //Step 1 : Increase parameter to hold other valyer
  const{isLoading, data,isError, error,isFetching, refetch}=useQuery('rqsuper-heroes',fetchData,
  {
    enabled:false,
  })
   
console.log(isLoading,isFetching)
    if(isLoading){
      return <h2>Loading......</h2>
    }
// step 2 : Add condition to check error or not
    if(isError){
      return <h2>{error.message}</h2>
    }

      return (
        <div>
          RQSuperHero Page
          {data?.data.map((hero)=>{
            return <div key={hero.name}>{hero.name}</div>
          })}
        </div>
      )
    }  

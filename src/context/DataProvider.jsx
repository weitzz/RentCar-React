import React, {createContext,useState,useEffect} from 'react'
import api from '../services/api'




export const DataContext = createContext([])


export const DataProvider = (props) => {
    const [cars,setCars] = useState([])
    useEffect(()=>{
        async function loadApi(){
          const response = await api.get('/cars')
          return setCars(response.data)
        }
        loadApi()
     },[])
   

     const value = {
         cars : [cars,setCars]
     }


    return (
        <DataContext.Provider value={value}>
        {props.children}
    </DataContext.Provider>
    )
}

export default DataProvider

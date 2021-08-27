import React, {createContext,useState,useEffect} from 'react'
import api from '../services/api'



export const DataContext = createContext([])


export const DataProvider = (props) => {
    const [cars,setCars] = useState([])
    const [token,setToken] = useState(false)
    useEffect(()=>{
        async function loadApi(){
          const response = await api.get('/cars')
          return setCars(response.data)
        }
        loadApi()
     },[])
    

    const state = {
        token: [token,setToken],
        cars: [cars,setCars]
    }
    return (
        <DataContext.Provider value={state}>
        {props.children}
    </DataContext.Provider>
    )
}

export default DataProvider

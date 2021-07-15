import React from 'react'
import About from '../components/About'
import Footer from '../components/Footer'
import  Header  from '../components/Header'
import ListCars from '../components/ListCars'

const Home = () => {
    return (
        <div>
            <Header/>
            <ListCars/>
            <About/>
            <Footer/>
        </div>
    )
}

export default Home

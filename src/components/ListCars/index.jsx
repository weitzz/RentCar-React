import React,{useState,useContext} from 'react'
import { DataContext } from '../../context/DataProvider'
import { motion } from "framer-motion"
import {CatalogContent,FilterCard,Input,CardWrapper,CardItem,Img,CardContent,ImgContent,ContainerText} from './ListCarsElements'
import Button from '../Button'
import {ParagraphSection,TitleSection,TitleCard,ParagraphCard,Span,Small,SectionTitle} from '../Text'

//import api from '../../services/api'



const ListCars = ({props,children}) => {
   const value = useContext(DataContext)
   const [cars,setCars] = value.cars
   const [filterCars,setFilterCars] = useState('')
  //console.log(cars)

  const handleInputFilter = event =>{
    setFilterCars(event.target.value)
  }

    
    return (
    
      <CatalogContent>
        <SectionTitle>
          <TitleSection>Carros</TitleSection>
          <ParagraphSection>Oque você busca está aqui</ParagraphSection>
        </SectionTitle>
        <FilterCard >
          <Input type="search" 
           placeholder="Buscar" 
           onChange={handleInputFilter}/>
          {/*<BtnInput>Pesquisar</BtnInput>*/}
        </FilterCard>
        <CardWrapper>
          
            {cars.filter(cars => {
                if(filterCars === ''){
                  return cars
                }
                else if(cars.brand.toLowerCase().includes(filterCars.toLowerCase())||
                cars.name.toLowerCase().includes(filterCars.toLowerCase())||
                cars.value.toLowerCase().includes(filterCars.toLowerCase())){
                  return cars
                }
            })
            .map(cars =>{

              return(
                <CardItem key={cars.id} cars={cars} whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1.1 }}>
                  <ContainerText>
                  <TitleCard>{cars.brand}</TitleCard>
                  <ParagraphCard>{cars.name}</ParagraphCard>
                  </ContainerText>
                <ImgContent>
            <Img src={cars.image} alt="carro"/>
            </ImgContent>
            <CardContent>
              <Span>R$ {cars.value},00<Small>/Hora</Small></Span>
            </CardContent>
              <Button to={`/car/${cars.id}`} variant='secondary' >Alugar</Button>
            </CardItem>
              )
            })}
            
          
        </CardWrapper>
      </CatalogContent>
   
    )
}

export default ListCars

import React,{useState, useEffect,useContext} from 'react'
import { DataContext } from '../../context/DataProvider'

import {CatalogContent,FilterCard,Input,CardWrapper,CardItem,Img,CardContent,ImgContent,ContainerText} from './ListCarsElements'
import {BtnCard} from '../Button'
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
                <CardItem key={cars.id} cars={cars}>
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
              <BtnCard to={`/car/${cars.id}`}>Alugar</BtnCard>
            </CardItem>
              )
            })}
            
          
        </CardWrapper>
      </CatalogContent>
   
    )
}

export default ListCars

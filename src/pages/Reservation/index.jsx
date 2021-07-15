import React, {useState, useEffect} from 'react'
import paypal from '../../img/Payment Method3.png'
import gpay from '../../img/Payment Method2.png'
import apay from '../../img/Payment Method.png'
import {IconArrowLeft,LinkRouter} from '../Login/style'
import {Container,ContainerCar,ContainerPayments,TitleCar,ContainerImage,Img,InfosCar,FormCar,WrapperPays,FormPayment} from './style'
import {TitleSection,ParagraphSection,TitleCard} from '../../components/Text/index'
import Cards from 'react-credit-cards'
import 'react-credit-cards/es/styles-compiled.css';
import {BtnLogin} from '../../components/Button'
import { useParams } from 'react-router-dom'

const Reservation = ({value}) => {
    const [car,setCar] = useState({})

    const {id} =  useParams()
    //console.log(id.brand)


    const [countPay,setCountPay] = useState(0)
    const [payment,paymentState] = useState({
        number:'',
        name: '',
        expiry: '',
        cvc: '',
        focus: ''
    })

    const handleInputChange = event =>{
        paymentState({
            ...payment,
            [event.target.name] : event.target.value
        })
    }

    const handleFocusChange = event =>{
        paymentState({
            ...payment,
            focus : event.target.name
        })
    }
    return (
        <>
            <Container >
                <ContainerCar >
                    <LinkRouter to='/'><IconArrowLeft/></LinkRouter>
                    <TitleCar>
                    <ParagraphSection></ParagraphSection>
                    <TitleSection></TitleSection>
                    </TitleCar>
                    <ContainerImage>
                    <Img src={id.image} alt="carro" />
                    </ContainerImage>
                        <FormCar>
                            <label htmlFor="">Horas reservadas</label>
                            <input type="number" value={countPay} />
                            <button onClick={()=> setCountPay(countPay +1)}>Add</button>
                            <button onClick={()=> setCountPay(countPay -1)}>Rem</button>
                        </FormCar>
                    <InfosCar>
                    <TitleCard>{car.brand}</TitleCard>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam obcaecati unde aliquam quas nisi exercitationem ratione laboriosam nemo sed necessitatibus doloribus et tempore, reiciendis quia dolorem vitae, deserunt nesciunt explicabo.</p>
                    </InfosCar>
                </ContainerCar>
                <ContainerPayments>
                    <TitleCar>
                    <TitleSection>Pagamento</TitleSection>
                    </TitleCar>
                    <WrapperPays>
                        <img src={paypal} alt="" />
                        <img src={gpay} alt="" />
                        <img src={apay} alt="" />
                    </WrapperPays>
        	            <Cards
                            name={payment.name}
                            number={payment.number}
                            expiry={payment.expiry}
                            cvc={payment.cvc}
                            focused={payment.focus}
                        />
                        <FormPayment>

                            <input type="text" 
                            name="number" 
                             placeholder='Número do cartão'
                             maxLength='16'
                             onChange={handleInputChange} 
                             onFocus={handleFocusChange}/>
                             <input type="text"
                             name="name"  
                             placeholder='Nome completo'
                             maxLength='30'
                             onChange={handleInputChange}
                             onFocus={handleFocusChange}/>
                            <div>
                            <input type="text" 
                            name="expiry" 
                             placeholder='MM/AA'
                             maxLength='4'
                             onChange={handleInputChange}
                             onFocus={handleFocusChange}/>
                            <input type="text" 
                             name="cvc" 
                             placeholder='CVC' 
                             maxLength='3'
                             onChange={handleInputChange}
                             onFocus={handleFocusChange}/>
                            </div>
                            <TitleSection>Total: R$ {countPay * 250},00</TitleSection>
                            <BtnLogin>Pagar</BtnLogin>
                        </FormPayment>

                </ContainerPayments>
            </Container>
        </>
    )
}

export default Reservation
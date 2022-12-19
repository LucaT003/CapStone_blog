import { useState } from 'react'
import Card from 'react-bootstrap/Card';
import '../style/Info.css'
import React from 'react';
import p from '../img/infofaImg.webp'

const Info = () => {

    const [data, setData] = useState({})
    const [food, setFood] = useState('')
  
    const searchFood = () => {
      console.log('search')

      fetch('https://api.api-ninjas.com/v1/country?name=' + food, { headers: { 'X-Api-Key': 'a4RAazJoqhT3BSyhRDuMx3DNaOUopjOZlPHSnzzG' } })
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.log(error))
      console.log(data)
      setFood('')  
    }

    return(

    <div className='infoPage'><h3 className='infoTitle'>Inserisci la tua destinazione</h3>
   <img className='infoImg' src={p} alt="bla" />
    <div  style={{ height:'15vh'}}>
        <div className="search">
            <input 
            className='textInfo'
            type="text"
            value={food}
            onChange= {e => setFood(e.target.value)}
            placeholder='Inserisci lo stato...'
             />  
             <button className='infoSubmit' onClick={searchFood}>Cerca</button> 
       </div>
       </div>
     
    
    
    <div>
        
    <Card className='cardInfo' >
      <Card.Body>
        {data[0] ?
        <Card.Title>Capital: {data[0].capital}</Card.Title> : null }
        {data[0] ?
        <Card.Subtitle className="mb-2 text-muted">Valute: {data[0].currency.name}</Card.Subtitle> : null }
        {data[0] ?
        <Card.Text>
          Position: {data[0].region}
        </Card.Text> : null }
      </Card.Body>
    </Card></div>

    </div>
    )
}

export default Info
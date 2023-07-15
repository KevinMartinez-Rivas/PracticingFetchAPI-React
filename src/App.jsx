// Hooks
import { useState, useEffect } from 'react'

// Components
import Form from './components/Form';
import Result from './components/Result';
import Spinner from './components/Spinner';

// Dependencies
import styled from '@emotion/styled';

// SVG/IMG/PNG/JPEG
import CriptoImage from './img/imagen-criptos.png';

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;

  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 2rem;
  }
`

const Imagen = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`

const Heading = styled.h1`
  font-family: 'Lato', sans-serif;
  color: #FFFFFF;
  text-align: center;
  font-weight: bold;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    width: 150px;
    height: 8px;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 15px);
    background-color: #4d87ea;
  }
`

function App() {
  const [ coins, setCoins ] = useState({});
  const [ result, setResult ] = useState({});

  const [ loading, setLoading ] = useState({});

  useEffect(() => {
    if(Object.keys(coins).length > 0){
      setLoading(true);
      setResult({});

      const consultarAPI = async () => {
        const { coin, criptoCoin } = coins;
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoCoin}&tsyms=${coin}`;
  
        const res = await fetch(url);
        const data = await res.json();
  
        setResult(data.DISPLAY[criptoCoin][coin]);
        setLoading(false);
      }
  
      consultarAPI();
    }
  }, [coins])

  return (
    <>
     <Contenedor>
        <Imagen 
          src={CriptoImage}
          alt='Imagenes de cripmonedas'
        />

        <div>
          <Heading>Cotiza criptomonedas al instante</Heading>

          <Form 
            setCoins={setCoins}
          />

          {loading && (
            <>
              <Spinner />
            </>
          )}
          {result.PRICE && (
            <Result 
            result={result}
            />
          )}
        </div>
     </Contenedor>
    </>
  )
}

export default App;

//
import styled from "@emotion/styled"

const ResultDiv = styled.div`
    font-family: 'Lato', sans-serif;
    font-weight: bold;
    font-size: 24px;
    text-align: center;
    color: #FFFFFF;
`

const Result = ({result}) => {
    const { PRICE, LOWDAY,HIGHDAY, LASTUPDATE, CHANGEPCT24HOUR } = result;
  
    return (
    <ResultDiv>
        <p>Precio: {PRICE}</p>
        <p>Mas alto: {HIGHDAY}</p>
        <p>Mas bajo: {HIGHDAY}</p>
        <p>Variacion (Ultimas 24H): {CHANGEPCT24HOUR}%</p>
        <p>Actualizado: {LASTUPDATE}</p>
    </ResultDiv>
    )
}

export default Result;
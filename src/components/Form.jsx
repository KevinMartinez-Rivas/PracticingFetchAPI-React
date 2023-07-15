// Hooks
import useSelectCoins from "../hooks/useSelectCoins";
import { useEffect, useState } from "react";

// Components
import Error from "./Error";

// Dependencies
import styled from "@emotion/styled";

// Data
import { coins } from "../data/coins";

const InputSubmit = styled.input`
    font-family: 'Lato', sans-serif;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 20px;
    background-color: #8b67db;
    color: #FFFFFF;
    padding: 20px 0;
    width: 100%;
    border: none;
    border-radius: 5px;
    transition: background-color 0.3s ease;
    margin-top: 20px;

    &:hover {
        cursor: pointer;
        background-color: #8358e1;
        transition: background-color 0.3s ease;
    }
`



const Form = ({setCoins}) => {
    const [ cripto, setCripto ] = useState([]);
    const [ error, setError ] = useState(false);

    // Custom Hooks
    const [ coin, SelectCoins ] = useSelectCoins('Elige tu moneda', coins);
    const [ criptoCoin, SelectCriptoCoins ] = useSelectCoins('Elige tu criptomoneda', cripto);

    useEffect(() => {
        const consultarApi = async () => {
            const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`;
            const res = await fetch(url);
            const data = await res.json();
            
            const arrayData = data.Data.map(criptoCoin => {
                const { CoinInfo: { Name, FullName } } = criptoCoin;
                return { id: Name,  name: FullName};
            })

            setCripto(arrayData);
        }

        consultarApi();
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();

        if([coin, criptoCoin].includes("")){
            setError(true);

            setTimeout(() => {
                setError(false);
            }, 3000);
            return;
        }

        setError(false);
        setCoins({coin, criptoCoin});
    }

    return (
        <>
            {error && (
                <Error />
            )}

            <form 
                action=""
                onSubmit={handleSubmit}
            >
                <SelectCoins />
                <SelectCriptoCoins />

                <InputSubmit 
                    type="submit" 
                    value="Cotizar" 
                />
            </form>
        </>
    )
}

export default Form;
//
import styled from "@emotion/styled";

const Alert = styled.div`
    background-color: #ff5555;
    color: #ffffff;
    border-radius: 6px;
    font-weight: bold;
    font-size: 20px;
    font-family: 'Lato', sans-serif;
    padding: 20px;
    text-transform: uppercase;
`

const Error = () => {
    return (
        <Alert>
            Es neceserio seleccionar todos los campos
        </Alert>
    )
}

export default Error;
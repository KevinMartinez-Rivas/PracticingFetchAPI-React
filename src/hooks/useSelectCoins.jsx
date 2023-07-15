// Hooks
import { useState } from "react";

// Styled-Components
import styled from "@emotion/styled";

const Label = styled.label`
  display: block;
  font-family: "Lato", sans-serif;
  font-weight: bold;
  font-size: 20px;
  margin: 15px 0;
  color: #FFFFFF;
`

const Select = styled.select`
  width: 100%;
  padding: 14px 0;
  font-family: "Lato", sans-serif;
  font-weight: bold;
  font-size: 20px;
  border-radius: 6px;
  text-align: center;
`

const useSelectCoins = (labelText, options) => {
  const [ state, setState ] = useState('');

  const SelectCoins = () => (
    <>
      <Label htmlFor={labelText}>{labelText}</Label>
      <Select
        value={state}
        onChange={(e) => setState(e.target.value)} 
        id={labelText}
      >
        <option value="" hidden>Seleccione una moneda</option>
        {options.map(option => (
          <option value={option.id} key={option.id}>{option.name}</option>
        ))}
      </Select>
    </>
  )

  return [ state, SelectCoins ];
}

export default useSelectCoins;
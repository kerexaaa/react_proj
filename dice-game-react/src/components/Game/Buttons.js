import styled from "styled-components"

export const Button = styled.button`
  font-family: "Poppins";
  padding: 10px 18px;
  min-width: 220px;
  background: #000;
  color: #FFF;
  border-radius: 5px;
  text-transform: capitalize;
  border: 1px solid black;
  outline: none;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  transition: all .2s ease-in;
  cursor: pointer;
  
  &:hover {
    background-color: #FFF;
    color: black;
    transition: all .2s ease-in;
  }
`

export const OutlineButton = styled(Button)`
    border: 1px solid black;
    background-color: transparent;
    color: #000;

    &:hover {
        background-color: #000;
        color: white;
        transition: all .2s ease-in;
    }
`

import { styled } from "styled-components"

export const Addbutton = styled.button `
    background: #03a9f4;
    color: #000000;
    height: 40px;
    border-radius: 10px;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    margin-left: 10px;

    &:hover{
        opacity: 0.8;
    }
`

export const Container = styled.div `
    background: #2af700;
    padding: 20px;
    border-radius: 10px;

    h1{
    color: white;
    }
    input{
        height: 35px;
        border-radius: 5px;
        border: none;
        margin-top: 30px;
        outline: none;
        padding-left: 10px;
    }
`
export const Product = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    background: #fff; 
    border-radius: 5px;
    margin-top: 6px;
    padding: 0px 10px;
    p {
        text-transform: capitalize;
        font-weight: bold;
    }
`
export const TrashButton = styled.button `
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 20px;


`
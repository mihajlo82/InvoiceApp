import styled from "styled-components";

export const PaginateStyleWrapp = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 10px;
`;

export const PaginateBoxWrapp = styled.article`
    padding: 10px;
    display: flex;
    justify-content: flex-end;
    margin-top: -10px;
    width:50%;
`;

export const PaginateBox = styled.article`
    width: 37px;
    height: 37px;
    margin-left: 7px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border: 2px solid gray;
    border-radius: 10px;
    font-weight: bold;
    cursor: pointer;
    :hover{
        background-color: lightgray;
    }
`;

export const PaginateBoxLast = styled.article`
    width: 37px;
    height: 37px;
    margin-left: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border: 2px solid gray;
    border-radius: 10px;
    font-weight: bold;
    cursor: pointer;
    :hover{
        background-color: lightgray;
    }
`;
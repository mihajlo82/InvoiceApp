import styled from "styled-components";
import { Link } from "react-router-dom";

export const InvoicesStyled = styled.section`
    width: 88%;
    height: 100%; 
    display: flex;
    flex-direction: column;
`;

//////////HEADER STYLE////////////////////
export const HeaderStyled = styled.header`
    width: 100%; 
    display: flex;
    justify-content: center;
    padding: 25px;
`;

export const HeaderBox = styled.div`
    width: 299px; 
    background-color: whtite;
    border: 2px solid gray;
    padding: 5px 10px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
`;

///////////ACTIONS/////////////////
export const ActionsWrapp = styled.article`
    width: 100%;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Actions = styled.div`
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 12px;
    border: 2px solid gray;
    padding-right: 20px;
    cursor: pointer;
`;
//    // border: 2px solid ${props => props.type==='delete' && !props.disabled ? '#f55b5b' : 'gray'};
export const ActionBox = styled.button`
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: gray;
    background-color: ${props => props.color};
    border-radius: 50%;
    border: 2px solid ${props => 
        props.typer === 'add' ? '#48e340' :
        props.typer==='delete' && !props.disabled ? '#f55b5b' :
        props.typer === 'edit' && !props.disabled ? '#e3e327' :
        'gray'};
    margin-left: 10px;
    :hover{
        background-color: lightgray;
    }
`;

export const PathLink = styled(Link)`
    display:flex;
    justify-content: center;
    align-items: center;
    color: gray;
`;

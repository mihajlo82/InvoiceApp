import styled from "styled-components";
import { Link } from "react-router-dom";

export const TableStyleWrapp = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
`;

export const TablerStyle = styled.table`
    width: 50%;
    border-radius: 10px;
    border-spacing: 0px;
`;

// TABLE HEAD STYLE
export const TablerHeadWrapp = styled.thead`
    width: 100%;
`;

export const TablerHead = styled.tr`
    width: 100%;
    padding: 10px;
    border-radius: 10px;
`;

export const HeadCol = styled.th`
    width: 25%;
    background-color: #dfe1e6;
    text-align: left;
    padding: 12px;
    border-top: 2px solid gray; 
    border-bottom: 2px solid gray; 
    :nth-child(1){
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
        border-left: 2px solid gray; 
    }
    :last-child {
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        border-right: 2px solid gray; 

      }
`;


// TABLE BODY STYLE
export const TablerBodyWrappStyle = styled.tbody`
    width: 100%;
    padding: 10px;
    border-collapse:collapse
    border-radius: 10px;
`;

export const TablerBodyRowStyle = styled.tr`
    width: 100%;
    padding: 10px;
    border-radius: 10px;
    background-color: ${props => props.choose ? 'lightblue' : 'white'};
    cursor: pointer;
`;

export const TablerBodyCell = styled.td`
    width: 25%;
    text-align: left;
    padding: 12px;
    padding-left: 17px;
    border-top: 2px solid gray;
    border-bottom: 2px solid gray;
    color:black;
    cellspacing: 0px;
    :nth-child(1){
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
        border-left: 2px solid gray;
    }
    :last-child {
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        border-right: 2px solid gray;

      }
`;

export const Text = styled(Link)`
    text-decoration: none;
    color:black;
    :hover{
        text-decoration: underline;
    }
`;

//TableSpacing bw thead and tbody
export const TableSpacing = styled.tr`
    width: 100%;
    height: 10px;
`;

// spacing bw body rows
export const RowSpacing = styled.tr`
    width: 100%;
    height: 6px;
`;
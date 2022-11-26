import styled from "styled-components";

export const SidebarStyled = styled.section`
    width: 12%;
    height: 100%; 
    padding-top: 50px;
`;

export const RoutesWrappStyled = styled.nav`
    margin: 0 auto;
    width: 99px;
    padding: 10px;
    border-radius: 12px;
    border: 2px solid gray;
    background-color: white;
    display:flex;
    justify-content:flex-start;
    flex-direction: column;
    align-items: center;
`;

export const IconWrappStyled = styled.div`
    background-color: ${props => props.active ? '#91e3fa' : 'white'};
    width: 70px;
    height:70px;
    border-radius: 50%;
    margin-top: 10px;
    border: 2px solid ${props => props.active ? '#4eb3cf' : 'gray'};
    color: gray;
    display:flex;
    justify-content:center;
    font-size: 35px;
    align-items: center;
    cursor: pointer;
    :hover{
        // background-color: lightgray;
    }
`;
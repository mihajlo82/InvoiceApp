import styled from "styled-components";

export const DeleteWrapp = styled.section`
    width: 100vw;
    height: 100vh;
    position: fixed;
    background-color: rgba(0,0,0, 0.6);
    top: 0;
    left:0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 33333;
`;

export const BodyDelete = styled.div`
    width: 333px;
    padding: 20px;
    background-color: white;
    display: flex;
    flex-direction: column;
    border: 3px solid gray;
    border-radius: 10px;
`;

export const TitleText = styled.h3`
    text-align: center;
    font-weight: bold;
`;

export const BtnDels = styled.div`
    margin-top: 15px;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
`;

export const DeleteButton = styled.button`
    display: flex;
    width: 45%;
    justify-content: center;
    align-items: center;
    padding: 12px;
    background-color: ${props => !!props.confirm ? '#fa7878' : 'white'};
    border: 3px solid ${props => !!props.confirm ? '#d94848' : 'gray'};
    border-radius: 8px;
`;

import styled from "styled-components";

export const DataWarningWrapp= styled.section` 
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0, 0.7); 
    z-index: 222222;
`;

export const DataWarningStyle = styled.article` 
    width: 350px;
    flex-direction: column;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: #f5a4a4;
    padding: 40px;
    border-radius: 20px;
    border: 3px solid #f24e4e;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const IconBox = styled.div`
        position: absolute;
        top: 10px;
        right: 10px;
        display: flex;
        justify-content: flex-end;
`;

export const Message = styled.p`
        width: 100%;
        display: flex;
        justify-content: flex-end;
        font-size: 1.1rem;
`;
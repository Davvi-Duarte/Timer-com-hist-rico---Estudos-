import styled from "styled-components";

export const TimerContainer = styled.main`
    flex: 1;

    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;

    
    form{
        gap: 3.5rem;
        display: flex;
        flex-direction: column;
        align-items: center;

    }
`;













export const BaseButton = styled.button`
    width: 100%;
    border: 0;
    padding: 1rem;
    border-radius: 8px;

    display: flex;
    align-items:center;
    justify-content: center;
    gap: 0.5rem;
    font-weight: bold;

    cursor: pointer;

    color: ${props => props.theme['gray-100']};

    transition: all 0.5s;


    &:disabled{
        filter: opacity(0.7);
        cursor: not-allowed;
    }

    &:not(:disabled):hover{
        background-color: ${props => props.theme["orange-700"]};
    }
`;

export const SubmitButton = styled(BaseButton)`
    background: ${props => props.theme['orange-500']};

    &:not(:disabled):hover{
        background-color: ${props => props.theme["orange-700"]};
    }
`;

export const StopCycleButton = styled(BaseButton)`
    background: ${props => props.theme['red-500']};

    &:not(:disabled):hover{
        background-color: ${props => props.theme["red-700"]};
    }

`;
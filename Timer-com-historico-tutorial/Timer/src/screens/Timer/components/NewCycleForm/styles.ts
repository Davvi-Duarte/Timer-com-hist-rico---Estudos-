import styled from "styled-components";

export const FormContainer = styled.div`

        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        color: ${props => props.theme["gray-100"]};
        font-size: 1.125rem;
        font-weight: bold;
        flex-wrap: wrap;

`;

export const BaseInput = styled.input`
    background-color: transparent;
    border: none;
    border-bottom: 2px solid ${props => props.theme["gray-400"]};
    padding: 0.5rem;
    font-weight: bold;
    font-size: 1.125rem;
    /* text-align: center; */
    color: ${props => props.theme['gray-100']};

    &::placeholder{
        font-family: "Roboto", sans-serif ;
        font-weight: bold;
        font-size: 1.125rem;
        text-align: center;
    }
`;

export const ProjectNameInput = styled(BaseInput)`
    flex: 1;


    &::-webkit-calendar-picker-indicator{
        display: none !important;
    }

`;


export const ProjectDurationInput = styled(BaseInput)`
    width: 4rem;
`;
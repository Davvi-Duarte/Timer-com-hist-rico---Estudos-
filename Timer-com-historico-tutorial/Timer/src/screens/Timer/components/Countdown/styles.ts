import styled from "styled-components";

export const CountdownContainer = styled.div`
    display: flex;
    gap: 1rem;
    font-family: 'Roboto Mono', monospace;
    font-size: 10rem;

    span{
        border-radius: 8px;
        border: 1px solid rgba(83, 83, 83, 0.42);

        background: rgba(83, 83, 83, 0.12);

        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        backdrop-filter: blur(2.799999952316284px);
        padding: 0rem 1rem;

    }
`;

export const Separator = styled.span`
    color: ${props => props.theme['orange-500']};
    background: none !important;
    box-shadow: unset !important;
    backdrop-filter: unset !important;
    padding: 0 !important;
    border: none !important;
`;
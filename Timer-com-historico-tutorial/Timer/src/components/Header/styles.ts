import styled from "styled-components";


export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;

    nav{
        display: flex;
        gap: 0.5rem;


        a{
            color: ${props => props.theme['gray-100']};
            width: 3rem;
            height: 3rem;

            display: flex;
            align-items: center;
            justify-content: center;

            border-top: 3px solid transparent;
            border-bottom: 3px solid transparent;
            transition: all 0.5s;

            &:hover{
                color: ${props => props.theme['orange-500']};
                border-bottom-color: ${props => props.theme['orange-500']};
            }

        }

        a.active{
            color: ${props => props.theme['orange-500']};
        }
    }
`;
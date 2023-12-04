import styled from "styled-components";


export const HistoryContainer = styled.main`
    flex: 1;
    padding: 3.5rem;
    display: flex;
    flex-direction: column;


    h1{
        font-size: 1.5rem;
        color: ${props => props.theme["gray-100"]};
    }
`;

export const HistoryList = styled.div`
    flex: 1;
    overflow: auto;
    margin-top: 2rem;


    table{
        width: 100%;
        border-collapse: collapse;
        min-width: 600px;

        th{
            background-color: ${props => props.theme["gray-600"]};
            padding: 1rem;
            text-align: left;
            color: ${props => props.theme["gray-100"]};
            line-height: 1.6;

            &:first-child{
                border-top-left-radius: 8px;
                padding-left: 1.5rem;
            }

            &:last-child{
                border-top-right-radius: 8px;
                padding-right: 1.5rem;

            }
        }
        
        
        tr{
            margin-bottom: 1rem;
        
            &:last-child{
                border-bottom: 3px solid rgba(83, 83, 83, 0.42);
            }
        }


        td{
            border-bottom: 4px solid #1a1a1c;
            border-top: 4px solid #1a1a1c;
            padding: 1rem;
            line-height: 1.6;
            font-size: 0.875rem;
            margin-top: 1rem;


            background: rgba(83, 83, 83, 0.12);

            /* box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25); */
            backdrop-filter: blur(2.799999952316284px);


            &:first-child{
                border-left: 3px solid rgba(83, 83, 83, 0.42);

                width: 50%;
            }


            &:last-child{
                border-right: 3px solid rgba(83, 83, 83, 0.42);
            }

            
        }
    }
`;

VideoColorSpace


const STATUS_COLORS = {
    yellow: "yellow-500",
    red: 'red-500',
    green: 'green-500'
} as const

interface StatusProps{
        statusColor: keyof typeof STATUS_COLORS;
}

export const Status = styled.span<StatusProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    &::before{
        content: '';
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 50%;
        background-color: ${props => props.theme[STATUS_COLORS[props.statusColor]]};
    }
`;
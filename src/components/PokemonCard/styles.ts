import styled from 'styled-components'
import * as muiStyled from '@mui/material'
import { Paper, Typography } from "@mui/material"

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    span {
        color: white;
        font-size: 8px;
        text-align: right;
        padding: 0.2rem;
    }
`
export const StyledPaper = muiStyled.styled(Paper)`
    margin: 0 auto;
    width: 20vw;
    height: 35vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background: #f6f7f9;

    span {
        width: 90%;
        text-align: center;
        border-top: 1px solid #c3c3c3;
    }

    
    @media only screen and (max-width: 600px) {
        width: 80vw;
    }
    @media screen and (min-width: 700px) and (max-width: 1240px) {
        width: 40vw;
    }
`
export const Gif = styled.img`
    width: 5rem;
`
export const Img = styled.img`
    width: 4rem;
`
export const StyledTypography = muiStyled.styled(Typography)`
    color: #af007e;
    font-weight: bold;
`
export const Details = styled.details`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Summary = styled.summary`
    color: #c3c3c3; 
    display: flex;
    align-items: center;
    justify-content: center;
`
import styled from 'styled-components'
import * as muiStyled from '@mui/material'
import { TextField, } from "@mui/material"

export const FormPoke = styled.form`
    width: 20%;
    display: flex;   
    flex-direction: column; 
    justify-content: space-around;
    gap: 1rem;

    @media only screen and (max-width: 600px) {
        width: 80%;
    }
    @media screen and (min-width: 700px) and (max-width: 1240px) {
        width: 40%;
    }
`
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5rem;
`
export const StyledTextField = muiStyled.styled(TextField)`
`

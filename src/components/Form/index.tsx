import { useState, useEffect } from 'react'
import React, { MouseEvent, useContext } from "react";
import { PokemonCard } from '../PokemonCard';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Container, FormPoke } from './styles'

export const Form = () => {
    const [pokemons, setPokemons] = useState('');
    const [pokemon, setPokemon] = useState('');


    const inputValue = React.useRef<HTMLInputElement>(null);

    const handleSubmit = (ev: MouseEvent<HTMLFormElement>) => {
        ev.preventDefault();
        const value = inputValue.current?.value.toLowerCase();
        if (value) return setPokemon(value)
    };


    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
            .then((res) => {
                res.json().then((data) => {
                    setPokemons(data)
                })
            })
            .catch((error) => console.log(error))
            .finally(() => {
                console.log('Finally!')
            })
    }, [pokemon])

    return (
        <Container>
            <FormPoke onSubmit={handleSubmit}>
                <TextField label="Insira o nome do pokemon" inputRef={inputValue}></TextField>
                <Button type='submit'>Enter</Button>
            </FormPoke>

            <PokemonCard pokemons={pokemons}/>
        </Container>
    )
}
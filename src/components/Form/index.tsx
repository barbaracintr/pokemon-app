import React, { useState, useEffect } from 'react'
import { PokemonCard } from '../PokemonCard';
import Button from '@mui/material/Button';
import { Container, FormPoke, StyledTextField } from './styles'
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Form = () => {

    const [pokemon, setPokemon] = useState('');
    const [pokemonName, setPokemonName] = useState('');
    const [pokemonList, setPokemonList] = useState([]);

    const inputValue = React.useRef<HTMLInputElement>(null);
    const listName = new Array

    const formSchema = yup.object().shape({
        name: yup.string().required("Campo obrigatório"),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(formSchema),
    });

    fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
        .then((res) => {
            res.json().then((data) => {
                setPokemonList(data.results)
            })
        })
        .catch((error) => console.log(`Erro: ${error}`))

    useEffect(() => {
        pokemonList?.forEach((poke: any) => listName.push(poke.name))

        if (listName.includes(pokemonName)) {
            fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
                .then((res) => {
                    res.json().then((data) => {
                        setPokemon(data)
                    })
                })
                .catch((error) => console.log(`Erro: ${error}`))
        } else if (!listName.includes(pokemonName) && pokemonName !== "") {
            toast.error("Pokémon não encontrado. Tente novamente.")
            setPokemonName("")
            setPokemon("")
        }
    }, [pokemonName])

    
    const onHandleSubmit = () => {
        handleClick()
    };
    
    const handleClick = () => {
        const value = inputValue.current?.value.toLowerCase();
        if (value) {
            setPokemonName(value)
        }
        else {
            setPokemonName("")
        }
    };

    return (
        <Container>
            <FormPoke onSubmit={handleSubmit(onHandleSubmit)}>
                <StyledTextField
                    autoComplete='on'
                    error={!!errors.name}
                    helperText={errors.name?.message?.toString()}
                    {...register("name")}
                    color="secondary"
                    size="small"
                    variant="filled"
                    label="Digite o nome do pokémon"
                    inputRef={inputValue}
                />
                <Button
                    color="secondary"
                    variant="contained"
                    type='submit'
                    onClick={handleClick}>
                    <span
                        className="material-symbols-outlined">
                        search
                    </span>
                </Button>
            </FormPoke>

            <PokemonCard
                pokemon={pokemon}
                pokemonName={pokemonName}
            />
        </Container>
    )
}
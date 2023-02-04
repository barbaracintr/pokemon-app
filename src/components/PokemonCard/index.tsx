import Typography from "@mui/material/Typography"
import { StyledPaper, Img } from './styles'

export const PokemonCard = ({ pokemons }: any) => {

    return (
        <>
            {pokemons.name ?
                <StyledPaper elevation={3}>
                    <Img src={pokemons.sprites?.front_default} />
                    <Typography component="p">{pokemons.name.toUpperCase()}</Typography>
                </StyledPaper>
                : null}
        </>
    )
}
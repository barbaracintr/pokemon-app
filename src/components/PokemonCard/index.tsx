import { Typography } from '@mui/material'
import { Box, StyledTypography, StyledPaper, Gif, Details, Summary, Img } from './styles'

export const PokemonCard = ({ pokemon, pokemonName }: any) => {

    const typeInfo = pokemon?.types?.map((_: any, index: number) => _.type.name)

    return (
        <>
            {pokemonName !== "" && pokemon.name !== undefined ?
                <Box>
                    <span>created by Bárbara Cintra</span>

                    <StyledPaper elevation={16}>
                        <StyledTypography>{pokemon?.name?.toUpperCase()}</StyledTypography>
                        <Gif src={pokemon?.sprites?.versions["generation-v"]["black-white"].animated.front_default} />
                        <span>{typeInfo.join(" | ")}</span>

                        <Details>
                            <Summary>
                                official art
                            </Summary>
                            <Img src={pokemon?.sprites?.other["official-artwork"]?.front_shiny} />
                        </Details>
                    </StyledPaper>
                </Box>
                : null}
        </>
    )
}
import { Box, StyledTypography, StyledPaper, Gif, Details, Created, Summary, Img } from './styles'

export const PokemonCard = ({ pokemon, pokemonName }: any) => {

    const typeInfo = pokemon?.types?.map((_: any, index: number) => _.type.name)

    return (
        <>
            {pokemonName !== "" && pokemon.name !== undefined ?
                <Box>
                    <Created>created by Bárbara Cintra</Created>

                    <StyledPaper elevation={16}>
                        <StyledTypography>
                            {pokemon?.name?.toUpperCase()}
                        </StyledTypography>
                        <Gif
                            alt={"Gif de Pokémon"}
                            src={pokemon?.sprites?.versions["generation-v"]["black-white"].animated.front_default}
                        />
                        <span>{typeInfo.join(" | ")}</span>

                        <Details>
                            <Summary>
                                official art
                            </Summary>
                            <Img
                                alt={"Tipo do Pokémon"}
                                src={pokemon?.sprites?.other["official-artwork"]?.front_shiny} />
                        </Details>
                    </StyledPaper>
                </Box>
                : null}
        </>
    )
}
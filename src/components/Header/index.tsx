import { HeaderBox, Logo } from "./styles"

export const Header = () => {

    const logo =  require("../../assets/img/logo.png")
    return (
        <HeaderBox>
            <Logo src={logo} />
        </HeaderBox>
    )
}
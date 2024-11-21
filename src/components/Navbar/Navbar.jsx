import { useState } from "react";
import { NavbarContainer, NavList, NavItem, BurgerButton, Overlay, Logo } from "./styles";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => setMenuOpen(!menuOpen);

    const handleScroll = (section) => {
        const target = document.getElementById(section);
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
            setMenuOpen(false);
        }
    };

    return (
        <>
            <NavbarContainer>
                <Logo src="/logo_clinic.png" alt="Logo da clínica" />
                <BurgerButton onClick={handleMenuToggle} menuOpen={menuOpen}>
                    <div />
                    <div />
                    <div />
                </BurgerButton>
                <NavList menuOpen={menuOpen}>
                    <NavItem onClick={() => handleScroll("home")}>Home</NavItem>
                    <NavItem onClick={() => handleScroll("sobre")}>Sobre</NavItem>
                    <NavItem onClick={() => handleScroll("servicos")}>Serviços</NavItem>
                    <NavItem onClick={() => handleScroll("localizacao")}>Localização</NavItem>
                    <NavItem onClick={() => handleScroll("contato")}>Contato</NavItem>
                </NavList>
            </NavbarContainer>
            {menuOpen && <Overlay onClick={() => setMenuOpen(false)} />}
        </>
    );
};

export default Navbar;

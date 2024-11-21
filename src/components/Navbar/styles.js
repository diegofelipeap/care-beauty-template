import styled from "styled-components";

export const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  z-index: 10;
`;

export const Logo = styled.img`
  max-width: 90px;
  height: auto;
  margin: 0; /* Remove margens que estavam adicionando espaçamento extra */
  object-fit: contain; /* Garante que a logo mantenha as proporções corretas */
`;

export const NavList = styled.ul.attrs(() => ({
  as: "ul",
}))`
  display: flex;
  list-style: none;
  gap: 1.5rem;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: ${({ menuOpen }) => (menuOpen ? "0" : "-100%")};
    width: 60%;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    box-shadow: -2px 0 4px rgba(0, 0, 0, 0.1);
    padding: 2rem;
    gap: 2rem;
  }
`;

export const NavItem = styled.li`
  cursor: pointer;
  color: #6b3f77;
  font-weight: bold;
  font-size: 1rem;
  transition: color 0.3s ease;

  &:hover {
    color: #d070a3;
  }
`;

export const BurgerButton = styled.button.attrs(() => ({
  as: "button",
}))`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 20px;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 11;

  div {
    width: 30px;
    height: 3px;
    background-color: #333;
    border-radius: 5px;
    transition: all 0.3s ease;

    &:nth-child(1) {
      transform: ${({ menuOpen }) => (menuOpen ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      opacity: ${({ menuOpen }) => (menuOpen ? "0" : "1")};
    }
    &:nth-child(3) {
      transform: ${({ menuOpen }) => (menuOpen ? "rotate(-45deg)" : "rotate(0)")};
    }
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9;
`;

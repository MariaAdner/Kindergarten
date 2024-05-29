import styled from "styled-components";
import Link from "next/link";

const StyledNav = styled.nav`
  background-color: lightblue;
  padding: 2rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  &:hover {
    color: red;
  }
`;

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;
`;

export default function Navbar() {
  return (
    <StyledNav>
      <StyledList>
        <li>
          <StyledLink href="../../">Startseite</StyledLink>
        </li>
        <li>
          <StyledLink href="../../About">Über uns</StyledLink>
        </li>
        <li>
          <StyledLink href="../../Kontakt">Kontakt</StyledLink>
        </li>
      </StyledList>
    </StyledNav>
  );
}

import styled from "styled-components";

interface LinkProps {
  isActive?: boolean;
}

export const Container = styled.nav`
  width: 100%;
  height: 124px;
  background-color: rgba(var(--background), 0.8);

  display: flex;

  justify-content: space-between;
  align-items: center;

  padding: 0px 80px;

  ul {
    display: flex;
    list-style: none;

    li {
      margin: 0px 15px;
      font-size: 0.8rem;
    }
  }
`;

export const Link = styled.a<LinkProps>`
  font-size: inherit;

  color: ${(props) =>
    props.isActive ? "var(--text-yellow)" : "var(--text-white)"};

  text-decoration: none;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
`;

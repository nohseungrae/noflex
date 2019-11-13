import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header``;

const HeaderList = styled.ul`
  display: flex;
  &:hover {
    background-color: blue;
  }
`;

const HeaderItem = styled.li``;

const ALink = styled(Link)``;

export default () => {
  return (
    <Header>
      <HeaderList>
        <HeaderItem>
          <ALink to="/">Movies</ALink>
        </HeaderItem>
        <HeaderItem>
          <ALink to="/tv">TV</ALink>
        </HeaderItem>
        <HeaderItem>
          <ALink to="/search">Search</ALink>
        </HeaderItem>
      </HeaderList>
    </Header>
  );
};

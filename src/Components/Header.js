import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  padding: 0px 10px;
  background-color: rgba(20, 20, 20, 0.8);
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const HeaderList = styled.ul`
  display: flex;
`;

const HeaderItem = styled.li`
  width: 80px;
  height: 50px;
  text-align: center;
  border-bottom : 3px solid ${props =>
    props.current ? "#3498db" : "transparent"}
  transition : border-bottom .5s ease-in-out
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

const ALink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default withRouter(({ location: { pathname } }) => {
  return (
    <Header>
      {console.log(pathname)}
      <HeaderList>
        <HeaderItem current={pathname === "/"}>
          <ALink to="/">Movies</ALink>
        </HeaderItem>
        <HeaderItem current={pathname === "/tv"}>
          <ALink to="/tv">TV</ALink>
        </HeaderItem>
        <HeaderItem current={pathname === "/search"}>
          <ALink to="/search">Search</ALink>
        </HeaderItem>
      </HeaderList>
    </Header>
  );
});

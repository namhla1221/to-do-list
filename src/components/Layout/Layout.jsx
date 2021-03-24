import React, { useState } from "react";
import styled from "styled-components";
import Link from "../Link/Link";
import identity from "netlify-identity-widget";
import { Button, IconButton } from "@material-ui/core";
import {
  AccountCircle as UserIcon,
  Help as HelpIcon,
} from "@material-ui/icons";

const Header = styled.header`
  background: blue;
  color: white;
  text-align: centre;
  padding: 0.1rem;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: centre;
  padding: 0.25rem 2rem;
`;

const Title = styled.h1`
  font-fanily: Arial, sams-serif;
  letter-spacing: -1px;
`;

const Footer = styled.footer`
  background: #ddd;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: centre;
`;
const List = styled.ul`
  list-styled: none;
  font-family: Arial, sans-serif;
  display: flex;
  width: 100%;
  padding: 0;
  margin: 0;
`;

const LinkWrap = styled.li`
  width: 50%;
`;

const StyledButton = styled(Button)`
  && {
    color: white;
  }
`;

const StyledIconButton = styled(IconButton)`
  && {
    color: white;
  }
`;

const PAGE_TITLE_MAP = {
  home: "To-do List",
  add: "Adding Item",
  edit: "Editing Item",
  contact: "Contact Us",
};

identity.init();

const UserDisplay = (props) => {
  const { name } = props;
  return (
    <StyledButton>
      <span> {name} </span>
      <UserIcon />
    </StyledButton>
  );
};

const Layout = (props) => {
  const { children, activePage } = props;
  const [userObject, setUserObject] = useState(identity.currentUser());

  const handleLogIn = () => identity.open();

  identity.on("login", (response) => {
    setUserObject(response);
    identity.close();
  });

  const handleLogOut = () => identity.logout();

  identity.on("logout", () => {
    setUserObject(null);
    identity.close();
  });

  const handleTestApi = async () => {
    const response = await fetch("/.netlify/functions/test", {
      headers: {
        Authorization: `Bearer ${userObject.token.access_token}`,
      },
    });
    const data = await response.json();
  };

  return (
    <>
      <Header>
        <Title>{PAGE_TITLE_MAP[activePage]}</Title>

        <div>
          <StyledButton
            variant="outlined"
            onClick={userObject ? handleLogOut : handleLogIn}
          >
            {userObject ? "Log Out" : "Log In"}
          </StyledButton>

          <StyledIconButton>
            <HelpIcon href="#/contact" />
          </StyledIconButton>
        </div>
      </Header>
      {children}
      <Footer>
        <nav>
          <List>
            <LinkWrap>
              <Link fullWidth disabled={activePage === "home"} url="#/">
                Back to Home
              </Link>
            </LinkWrap>

            <LinkWrap>
              <Link fullWidth disabled={activePage === "add"} url="#/add">
                Add new items
              </Link>
            </LinkWrap>
          </List>
        </nav>
      </Footer>
    </>
  );
};

export default Layout;

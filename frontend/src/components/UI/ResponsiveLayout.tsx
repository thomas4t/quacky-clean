import { Container, Box, Typography, IconButton } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import AppLogo from "../AppLogo";
import CategoryMenu from "../category/CategoryMenu";
import StickyHeader from "./StickyHeader";
import UserMenuSection from "../user/UserMenuSection";

const AppContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const StyledFooter = styled.footer`
  min-height: 40px;
  margin-top: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.primary};
  color: #fff;
`;

const HeaderMenuContainer = styled.div`
  width: 100%;
  display: flex;
`;

type OnlyChildrenProps = {
  children: React.ReactNode;
};

function LayoutBody(props: OnlyChildrenProps) {
  return (
    <Container>
      <Box my={2}>{props.children}</Box>
    </Container>
  );
}

export default function ResponsiveLayout(props: OnlyChildrenProps) {
  return (
    <AppContainer>
      <StickyHeader>
        <HeaderMenuContainer>
          <AppLogo />
          <CategoryMenu />
          <UserMenuSection />
        </HeaderMenuContainer>
      </StickyHeader>
      <LayoutBody {...props} />
      <StyledFooter>
        <Typography>Copyright @TT & ŠZ - UHK Project 2021</Typography>
      </StyledFooter>
    </AppContainer>
  );
}

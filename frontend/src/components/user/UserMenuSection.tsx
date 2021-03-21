import { IconButton, Typography } from "@material-ui/core";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import React from "react";
import styled from "styled-components";
import { SystemPageLink } from "../../core/links";

const SectionContainer = styled.div`
  color: #fff;
  flex-grow: 1;
  text-align: right;
`;
const StyledIcon = styled(AccountBoxIcon)`
  color: #fff;
`;

// const StyledLoginLink = styled(SystemPageLink)`
//   font-size: 1.3rem;
// `;

//TODO add login and such
export default function UserMenuSection() {
  return (
    <SectionContainer>
      {/* <StyledLoginLink page={"login"}>Login</StyledLoginLink> */}

      <IconButton
        aria-label="profile"
        onClick={() => {
          alert("I dont work yet :C");
        }}
      >
        <StyledIcon fontSize="large" />
      </IconButton>
    </SectionContainer>
  );
}

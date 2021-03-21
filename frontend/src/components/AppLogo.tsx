import StrikethroughSIcon from "@material-ui/icons/StrikethroughS";
import styled from "styled-components";
import { SystemPageLink } from "../core/links";

const StyledIcon = styled(StrikethroughSIcon)`
  margin-top: 10px;
  font-size: 3rem;
`;

export default function AppLogo() {
  return (
    <SystemPageLink page={"homepage"}>
      <StyledIcon fontSize="large" />
    </SystemPageLink>
  );
}

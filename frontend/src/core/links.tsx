import { Link } from "react-router-dom";
import styled from "styled-components";

type SystemPageNames =
  | "category"
  | "profile"
  | "homepage"
  | "login"
  | "register";
//   | 'invoice'
//   | 'register'
//   | 'register-lite'
//   | 'reset-password-form-email'
//   | 'reset-password-form-password'
//   | 'set-password-form'
//   | 'search'
//   | 'favorite'
//   | 'watchdog'
//   | 'quick-order'
//   | 'cart'
//   | 'account'
//   | 'users'
//   | 'articles'
//   | 'orders'
//   | 'login';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  :hover {
    opacity: 90%;
  }
`;

export function SystemPageLink(props: {
  page: SystemPageNames;
  extra?: string;
  children: React.ReactNode;
}) {
  const { page, extra = "" } = props;

  const resolvePageUrl = () => {
    if (page === "homepage") return "/";

    return `/${page}/${extra}`;
  };

  return <StyledLink to={resolvePageUrl()}>{props.children}</StyledLink>;
}

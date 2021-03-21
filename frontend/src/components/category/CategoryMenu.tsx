import { Typography } from "@material-ui/core";
import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import { SystemPageLink } from "../../core/links";
import { useDidMount } from "../../helpers/customHooks";
import { CategoryType } from "./types";

const StyledNav = styled.nav`
  a {
    position: relative;
    text-decoration: none;
    color: #fff;
    :hover {
      color: #fff;
    }
    ::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: #fff;
      visibility: hidden;
      transform: scaleX(0);
      transition: all 0.15s ease-in-out 0s;
    }
    :hover::before {
      visibility: visible;
      transform: scaleX(1);
    }
  }
  ul {
    list-style-type: none;
  }
  li {
    display: inline-block;
    margin: 0 15px;
  }
`;

export default function CategoryMenu() {
  const [categories, setCategories] = useState<CategoryType[]>([]);

  useDidMount(async () => {
    //TODO fix this
    const url = process.env.REACT_APP_BACKEND_URL + "/categories";
    const data: CategoryType[] = await (await axios.get(url)).data;
    setCategories(data);
  });

  return (
    <StyledNav>
      <ul>
        {categories.map((ctg) => {
          const categoryID = String(ctg.ID_Category);
          const categoryName = ctg.name_c;
          return (
            <li key={categoryID}>
              <Typography variant="h5">
                <SystemPageLink page="category" extra={categoryID}>
                  {categoryName}
                </SystemPageLink>
              </Typography>
            </li>
          );
        })}
      </ul>
    </StyledNav>
  );
}

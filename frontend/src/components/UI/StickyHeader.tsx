import { useScrollTrigger, AppBar, Toolbar } from "@material-ui/core";
import React from "react";

interface Props {
  children: React.ReactElement;
}

//This just helps to do stylish things, its copy pasta
function ElevationScroll(props: Props) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  //Elevation determines the "shadow" of header after scroll
  return React.cloneElement(props.children, {
    elevation: trigger ? 4 : 0,
  });
}

export default function StickyHeader(props: Props) {
  return (
    <header>
      <ElevationScroll {...props}>
        <AppBar>
          <Toolbar>{props.children}</Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </header>
  );
}

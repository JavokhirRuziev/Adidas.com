import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import { Close } from "@mui/icons-material";
import { Typography } from "@mui/material";
import BlackButton from "./BlackButton";

export default function HeaderHamburgerDrawer() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor, onClick) => (
    <Box
      sx={{ width: "250px" }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box></Box>
        <BlackButton
          text={<Close sx={{ padding: "5px" }} onClick={onClick} />}
        />
      </Box>
      <Box>
        <Typography sx={{ padding: "10px" }}>some text</Typography>
      </Box>
    </Box>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <MenuIcon
            onClick={toggleDrawer(anchor, true)}
            sx={{ margin: "0 15px 0 0" }}
          />
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor, toggleDrawer(anchor, false))}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

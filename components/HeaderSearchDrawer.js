import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import SearchIcon from "@mui/icons-material/Search";
import { KeyboardArrowLeft } from "@mui/icons-material";
import { TextField } from "@mui/material";

export default function HeaderSearchDrawer() {
  const [state, setState] = React.useState({
    right: false,
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

  const list = (anchor) => (
    <Box
      sx={{
        width: "100%",
        maxWidth: "960px",
        display: "flex",
        alignItems: "center",
      }}
      role="presentation"
    >
      <KeyboardArrowLeft
        sx={{ padding: "10px 0 10px 0" }}
        onClick={toggleDrawer(anchor, false)}
      />
      <TextField sx={{ padding: "10px 10px 10px 0" }} placeholder="Search" />
    </Box>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <SearchIcon onClick={toggleDrawer(anchor, true)} />
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

import * as React from "react";
import Box from "@mui/material/Box";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import Drawer from "@mui/material/Drawer";
import { Button } from "@mui/material";

export default function GridSystemDrawer() {
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
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    ></Box>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            onClick={toggleDrawer(anchor, true)}
            sx={{
              border: "solid 1px black",
              width: "160px",
              display: "flex",
              justifyContent: "space-around",
              cursor: "pointer",
            }}
          >
            Filter & Sort
            <TbAdjustmentsHorizontal />
          </Button>
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

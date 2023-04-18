import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import EastIcon from "@mui/icons-material/East";
import CloseIcon from "@mui/icons-material/Close";
import { Button, Typography } from "@mui/material";
import BlackButton from "./BlackButton";

export default function AppBarDrawer({ maxWidth, margin }) {
  const [state, setState] = React.useState({
    top: false,
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
        maxWidth: "1440px",
        margin: "auto",
      }}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, true)}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ width: "35%", padding: "82px" }}>
          <Typography
            sx={{ fontSize: "14px", fontWeight: "600", marginBottom: "10px" }}
          >
            FREE STANDARD SHIPPING & RETURNS
          </Typography>
          <Typography
            sx={{ fontSize: "12px", width: "80%", marginBottom: "20px" }}
          >
            Sign up for adiClub to unlock unlimited free standard shipping and
            start earning points on every order. If you are not completely
            satisfied with your adidas.com purchase, we offer free returns or
            exchanges within 30 days of
          </Typography>
          <Box
            sx={{
              position: "relative",
              border: "solid 1px black",
              width: "149px",
              height: "43px",
              cursor: "pointer",
              marginBottom: "20px",
            }}
          >
            <Button
              className="button"
              style={{
                position: "absolute",
                width: "150px",
                bottom: "3px",
                zIndex: "1",
                right: "3px",
                fontSize: "11px",
                fontWeight: "600",
                padding: "10px 0 10px 0",
              }}
              color="primary"
              variant="contained"
            >
              join or login <EastIcon sx={{ marginLeft: "10px" }} />
            </Button>
          </Box>
          <BlackButton text={"RETURN POLICY"} />
        </Box>
        <Box sx={{ padding: "20px" }}>
          <Button
            onClick={toggleDrawer(anchor, false)}
            sx={{ border: "solid black 1px", padding: "10px 0 10px 0" }}
          >
            <CloseIcon />
          </Button>
        </Box>
      </Box>
    </Box>
  );

  return (
    <div>
      <React.Fragment key={"top"}>
        <Box
          onClick={toggleDrawer("top", true)}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            bgcolor: "black",
            color: "white",
            height: "35px",
            cursor: "pointer",
            maxWidth: { maxWidth },
            margin: { margin },
          }}
        >
          <Typography
            sx={{ fontSize: "10px", fontWeight: "600", marginRight: "10px" }}
          >
            FREE STANDARD SHIPPING & RETURNS
          </Typography>
          <KeyboardArrowDownIcon />
        </Box>
        <Drawer
          anchor={"top"}
          open={state["top"]}
          onClose={toggleDrawer("top", false)}
        >
          {list("top")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}

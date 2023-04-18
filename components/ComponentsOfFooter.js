import { Typography } from "@mui/material";
import React from "react";

function ComponentsOfFooter({ text }) {
  return (
    <Typography
      className="footerHover"
      sx={{ fontSize: "12px", marginBottom: "5px", color: "darkgray" }}
    >
      {text}
    </Typography>
  );
}

export default ComponentsOfFooter;

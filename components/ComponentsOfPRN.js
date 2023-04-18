import { Box, Typography } from "@mui/material";
import React, { useState } from "react";

function ComponentsOfPRN({ text }) {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <Box onMouseEnter={onHover} onMouseLeave={onHover} sx={{ margin: "10px" }}>
      <Typography sx={{ fontWeight: "700", fontSize: "26px" }}>
        {text}
      </Typography>
      <Box
        className={hover ? "prnHover" : ""}
        sx={{ borderBottom: "solid 1px black", paddingBottom: "6px" }}
      ></Box>
    </Box>
  );
}

export default ComponentsOfPRN;

import React from "react";
import { Box, Typography } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

function ComponentsOfHelp({ icon, text, arrow, onClick }) {
  return (
    <Box
      onClick={onClick}
      className="buttonHelp"
      sx={{
        display: "flex",
        padding: "15px 5px 15px 5px",
        justifyContent: "space-between",
        cursor: "pointer",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        {icon}
        <Typography sx={{ margin: "0 0 0 20px" }}>{text}</Typography>
      </Box>
      <ChevronRightIcon className={arrow ? "arrow" : "arrowNone"} />
    </Box>
  );
}

export default ComponentsOfHelp;

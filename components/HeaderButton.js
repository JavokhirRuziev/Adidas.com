import { Box, Typography } from "@mui/material";
import React from "react";
import styles from "../src/styles/headerAppBar.module.css";

function HeaderButton({
  text,
  onMouseEnter,
  onMouseLeave,
  className,
  fontWeight,
}) {
  return (
    <Box>
      <Box>
        <Typography
          className={styles.headerButton}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          sx={{
            fontSize: "14px",
            cursor: "pointer",
            fontWeight: { fontWeight },
          }}
        >
          {text}
        </Typography>
        <Box
          onMouseEnter={onMouseEnter}
          className={className}
          sx={{
            borderBottom: "solid 4px black",
            paddingBottom: "21px",
            display: "none",
          }}
        ></Box>
      </Box>
    </Box>
  );
}

export default HeaderButton;

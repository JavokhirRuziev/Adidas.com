import { Box, Button } from "@mui/material";
import React, { useState } from "react";

function FixedButton({ text, className, width }) {
  const [buttonHover, setButtonHover] = useState(false);
  const [fixedButtonClick, setFixedButtonClick] = useState(false);

  const setHoverEnter = () => {
    setButtonHover(true);
  };
  const setHoverLeave = () => {
    setButtonHover(false);
  };

  const clicked = () => {
    setFixedButtonClick(true);
  };

  return (
    <Box>
      <Button
        onClick={clicked}
        onMouseEnter={setHoverEnter}
        onMouseLeave={setHoverLeave}
        variant="contained"
        color={buttonHover ? "primary" : "secondary"}
        className={className}
        sx={{
          border: "none",
          fontWeight: "600",
          padding: "0 5px 0 5px",
          boxShadow: "none",
          width: { width },
          display: "flex",
          textAlign: "left",
          textDecoration: "none",
        }}
      >
        {text}
      </Button>
    </Box>
  );
}

export default FixedButton;

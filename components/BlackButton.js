import { Button } from "@mui/material";
import React, { useState } from "react";

function BlackButton({ text, onClick, className, width }) {
  const [buttonHover, setButtonHover] = useState(false);

  const setHoverEnter = () => {
    setButtonHover(true);
  };
  const setHoverLeave = () => {
    setButtonHover(false);
  };

  return (
    <Button
      onClick={onClick}
      onMouseEnter={setHoverEnter}
      onMouseLeave={setHoverLeave}
      variant="contained"
      color={buttonHover ? "primary" : "secondary"}
      className={className}
      sx={{
        border: "none",
        textDecoration: "underline",
        fontWeight: "600",
        padding: "0 5px 0 5px",
        boxShadow: "none",
        width: { width },
        display: "flex",
        textAlign: "left",
      }}
    >
      {text}
    </Button>
  );
}

export default BlackButton;

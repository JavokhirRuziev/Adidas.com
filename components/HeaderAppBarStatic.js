import React, { useEffect, useState } from "react";
import HeaderSection from "./HeaderSection";
import { Box } from "@mui/material";
import AppBar from "./AppBar";
import HeaderResponsive from "./HeaderResponsive";

function HeaderAppBarStatic() {
  return (
    <>
      <Box className="responsive">
        <AppBar maxWidth={"1440px"} margin={"auto"} />
        <HeaderSection maxWidth={"1440px"} margin={"auto"} />
      </Box>
      <Box className="responsiveVerse">
        <HeaderResponsive />
      </Box>
    </>
  );
}

export default HeaderAppBarStatic;

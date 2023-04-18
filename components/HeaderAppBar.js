import React, { useEffect, useState } from "react";
import HeaderSection from "./HeaderSection";
import { Box } from "@mui/material";
import AppBar from "./AppBar";
import HeaderResponsive from "./HeaderResponsive";

function HeaderAppBar() {
  const [hideAshow, setHideAshow] = useState(null);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;
    const scrollAction = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (
        direction !== hideAshow &&
        (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
      ) {
        setHideAshow(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", scrollAction);
    return () => {
      window.removeEventListener("scroll", scrollAction);
    };
  }, []);
  return (
    <Box
      className={`header ${hideAshow === "down" ? "down" : "show"}`}
      sx={{
        position: "sticky",
        top: "0",
        zIndex: 100,
      }}
    >
      <Box className="responsive">
        <AppBar maxWidth={"1440px"} margin={"auto"} />
        <HeaderSection maxWidth={"1440px"} margin={"auto"} />
      </Box>
      <Box className="responsiveVerse">
        <HeaderResponsive />
      </Box>
    </Box>
  );
}

export default HeaderAppBar;

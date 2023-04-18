import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import AppBar from "../../components/AppBar";
import HeaderSection from "../../components/HeaderSection";
import PageFooter from "./PageFooter";
import BlackButton from "../../components/BlackButton";
import AccordionComponent from "../../components/AccordionComponent";
import EastIcon from "@mui/icons-material/East";
import HeaderAppBar from "../../components/HeaderAppBar";

function ExchangesReturns() {
  const ref = useRef();
  const toTop = () => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "end",
    });
  };
  return (
    <>
      <div ref={ref}></div>
      <HeaderAppBar />
      <Box sx={{ maxWidth: "1440px", margin: "auto" }}>
        <Box
          sx={{
            width: "400px",
            display: "flex",
            flexDirection: "column",
            marginRight: "auto",
            padding: "70px",
          }}
        >
          <Typography
            sx={{
              margin: "10px 0 10px 0",
              fontSize: "24px",
              fontWeight: "600",
            }}
          >
            EXCHANGES & RETURNS
          </Typography>
          <Box
            sx={{
              position: "relative",
              border: "solid 1px black",
              width: "184px",
              height: "43px",
              cursor: "pointer",
            }}
          >
            <Button
              className="button"
              style={{
                position: "absolute",
                width: "185px",
                bottom: "3px",
                zIndex: "1",
                right: "3px",
                fontSize: "12px",
                fontWeight: "600",
                padding: "10px 0 10px 0",
              }}
              color="primary"
              variant="contained"
            >
              FREE SIZE EXCHANGE <EastIcon sx={{ marginLeft: "10px" }} />
            </Button>
          </Box>
          <Button
            sx={{
              width: "185px",
              border: "solid 1px black",
              margin: "10px 0 10px 0",
              fontWeight: "600",
            }}
          >
            START YOUR RETURN
          </Button>
          <Box sx={{ width: "185px" }}>
            <BlackButton text={"TRACK YOUR RETURN"} />
          </Box>
        </Box>
        <Box sx={{ padding: "70px 30px 70px 30px" }}>
          <AccordionComponent />
          <Button
            sx={{
              marginTop: "30px",
              border: "solid 1px black",
              fontWeight: "600",
            }}
          >
            NEED MORE INFO OR HELP?
            <EastIcon sx={{ marginLeft: "10px" }} />
          </Button>
        </Box>
      </Box>
      <PageFooter onClick={toTop} maxWidth={"1440px"} margin={"auto"} />
    </>
  );
}

export default ExchangesReturns;

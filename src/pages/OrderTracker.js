import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import AppBar from "../../components/AppBar";
import PageFooter from "./PageFooter";
import EastIcon from "@mui/icons-material/East";
import HeaderSection from "../../components/HeaderSection";
import BlackButton from "../../components/BlackButton";
import HeaderAppBar from "../../components/HeaderAppBar";

function OrderTracker() {
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
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          margin: "auto",
          width: "400px",
          padding: "30px",
        }}
      >
        <Typography sx={{ fontSize: "24px", fontWeight: "600" }}>
          ORDER STATUS
        </Typography>
        <Typography sx={{ fontSize: "12px", padding: "10px 0 10px 0" }}>
          Start a return, exchange, or track an order by entering your order
          number and email address below.
        </Typography>

        <Box sx={{ marginLeft: "auto" }}>
          <BlackButton text={"Whats this?"} />
        </Box>
        <TextField label="Order number *" sx={{ margin: "10px 0 10px 0" }} />
        <TextField label="Email *" />
        <Box
          sx={{
            position: "relative",
            border: "solid 1px black",
            width: "124px",
            height: "43px",
            cursor: "pointer",
            margin: "50px 0 50px 0",
          }}
        >
          <Button
            className="button"
            style={{
              position: "absolute",
              width: "125px",
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
            Continue <EastIcon sx={{ marginLeft: "10px" }} />
          </Button>
        </Box>
        <Typography>
          Can't find your order number? Log in to access your order history.
        </Typography>
        <Button
          sx={{
            width: "120px",
            border: "1px solid black",
            margin: "10px 0 10px 0",
          }}
        >
          LOG IN <EastIcon sx={{ marginLeft: "10px" }} />
        </Button>
      </Box>
      <PageFooter onClick={toTop} maxWidth={"1440px"} margin={"auto"} />
    </>
  );
}

export default OrderTracker;

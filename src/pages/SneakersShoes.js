import { Box, Button, Grid } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import BlackButton from "../../components/BlackButton";
import Link from "next/link";

function SneakersShoes() {
  return (
    <Box sx={{ margin: "20px" }}>
      <Box
        sx={{
          maxWidth: "1320px",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "30px",
          marginBottom: "30px",
        }}
      >
        <Grid
          className="grid2x2"
          container
          spacing={1}
          sx={{
            display: "flex",
            margin: "auto",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
            <Link href={"/GridSystem"} style={{ textDecoration: "none" }}>
              <Box
                sx={{
                  maxWidth: "320px",
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  bgcolor: "#8882",
                  height: "236px",
                  margin: "auto",
                }}
              >
                <Image
                  className="shoesImage"
                  src={"/mens.webp"}
                  width={200}
                  height={200}
                  alt={"men"}
                />
                <BlackButton text={"womens sneakers"} />
              </Box>
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
            <Link href={"/GridSystem"} style={{ textDecoration: "none" }}>
              <Box
                sx={{
                  maxWidth: "320px",
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  bgcolor: "#8882",
                  height: "236px",
                  margin: "auto",
                }}
              >
                <Image
                  className="shoesImage"
                  src={"/shoes.webp"}
                  width={200}
                  height={200}
                  alt={"shoes"}
                />
                <BlackButton text={"mens sneakers"} />
              </Box>
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
            <Link href={"/GridSystem"} style={{ textDecoration: "none" }}>
              <Box
                sx={{
                  maxWidth: "320px",
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  bgcolor: "#8882",
                  height: "236px",
                  margin: "auto",
                }}
              >
                <Image
                  src={"/womens.webp"}
                  width={200}
                  height={200}
                  alt={"women"}
                  className="shoesImage"
                />
                <BlackButton text={"mens shoes"} />
              </Box>
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
            <Link href={"/GridSystem"} style={{ textDecoration: "none" }}>
              <Box
                sx={{
                  maxWidth: "320px",
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  bgcolor: "#8882",
                  height: "236px",
                  margin: "auto",
                }}
              >
                <Image
                  src={"/womens.webp"}
                  width={200}
                  height={200}
                  alt={"women"}
                  className="shoesImage"
                />
                <BlackButton text={"womens shoes"} />
              </Box>
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default SneakersShoes;
